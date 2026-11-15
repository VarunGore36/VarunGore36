import { readFile, writeFile } from "node:fs/promises";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const token = process.env.GITHUB_TOKEN;
const readmePath = "README.md";
const featuredRepos = new Set(["toolcage", "astralproject", "chainlens", "enamel-extended"]);
const cutoff = Date.now() - 24 * 60 * 60 * 1000;

const github = async (endpoint) => {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!response.ok) throw new Error(`GitHub API request failed: ${response.status} (${endpoint})`);
  return response.json();
};

const events = await github(`/users/${owner}/events/public?per_page=100`);
const activeRepos = new Map();

for (const event of events) {
  const isPush = event.type === "PushEvent";
  const isRepositoryCreation = event.type === "CreateEvent" && event.payload?.ref_type === "repository";
  if ((!isPush && !isRepositoryCreation) || new Date(event.created_at).getTime() < cutoff) continue;
  if (!activeRepos.has(event.repo.name)) activeRepos.set(event.repo.name, event.created_at);
}

const repos = (await Promise.all(
  [...activeRepos.entries()].map(async ([fullName, lastActivity]) => {
    try {
      return { ...(await github(`/repos/${fullName}`)), lastActivity };
    } catch {
      return null;
    }
  }),
))
  .filter(Boolean)
  .filter((repo) => !repo.fork && !repo.archived && repo.name !== owner && !featuredRepos.has(repo.name.toLowerCase()))
  .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity))
  .slice(0, 6);

const formatDate = (value) => new Intl.DateTimeFormat("en", {
  month: "short", year: "numeric", timeZone: "UTC",
}).format(new Date(value));

const rows = repos.length
  ? [
      "| Project | Activity in the last 24 hours |",
      "| :-- | :-- |",
      ...repos.map((repo) => {
        const description = repo.description?.replaceAll("|", "\\|") ?? "No description yet.";
        const language = repo.language ? ` · \`${repo.language}\`` : "";
        const stars = repo.stargazers_count ? ` · ★ ${repo.stargazers_count}` : "";
        return `| [**${repo.name}**](${repo.html_url}) | ${description}${language}${stars}<br /><sub>activity ${formatDate(repo.lastActivity)}</sub> |`;
      }),
    ].join("\n")
  : "_No public repositories created or pushed to in the last 24 hours._";

const start = "<!-- RECENT_REPOS:START -->";
const end = "<!-- RECENT_REPOS:END -->";
const readme = await readFile(readmePath, "utf8");
const startAt = readme.indexOf(start);
const endAt = readme.indexOf(end);
if (startAt < 0 || endAt < 0 || endAt < startAt) throw new Error("README repo markers are missing or malformed.");

const updated = `${readme.slice(0, startAt + start.length)}\n${rows}\n${readme.slice(endAt)}`;
await writeFile(readmePath, updated);
