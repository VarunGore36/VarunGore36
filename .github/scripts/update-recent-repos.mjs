import { readFile, writeFile } from "node:fs/promises";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const token = process.env.GITHUB_TOKEN;
const readmePath = "README.md";
const endpoint = `https://api.github.com/users/${owner}/repos?type=owner&sort=updated&direction=desc&per_page=100`;
const featuredRepos = new Set(["toolcage", "astralproject", "chainlens", "enamel-extended"]);

const response = await fetch(endpoint, {
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

if (!response.ok) throw new Error(`GitHub API request failed: ${response.status}`);

const repos = (await response.json())
  .filter((repo) => !repo.fork && !repo.archived && repo.name !== owner && !featuredRepos.has(repo.name.toLowerCase()))
  .slice(0, 6);

const formatDate = (value) => new Intl.DateTimeFormat("en", {
  month: "short", year: "numeric", timeZone: "UTC",
}).format(new Date(value));

const rows = repos.length
  ? [
      "| Project | Latest signal |",
      "| :-- | :-- |",
      ...repos.map((repo) => {
        const description = repo.description?.replaceAll("|", "\\|") ?? "No description yet.";
        const language = repo.language ? ` · \`${repo.language}\`` : "";
        const stars = repo.stargazers_count ? ` · ★ ${repo.stargazers_count}` : "";
        return `| [**${repo.name}**](${repo.html_url}) | ${description}${language}${stars}<br /><sub>updated ${formatDate(repo.updated_at)}</sub> |`;
      }),
    ].join("\n")
  : "_No public repositories found yet._";

const start = "<!-- RECENT_REPOS:START -->";
const end = "<!-- RECENT_REPOS:END -->";
const readme = await readFile(readmePath, "utf8");
const startAt = readme.indexOf(start);
const endAt = readme.indexOf(end);
if (startAt < 0 || endAt < 0 || endAt < startAt) throw new Error("README repo markers are missing or malformed.");

const updated = `${readme.slice(0, startAt + start.length)}\n${rows}\n${readme.slice(endAt)}`;
await writeFile(readmePath, updated);
