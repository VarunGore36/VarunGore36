# Varun Gore

**Mathematics by degree. Software engineer by trade.**

I build AI systems, developer tooling, and backend infrastructure — software that digs beneath the surface rather than sitting on top of it.

---

## What I build

My work sits at the intersection of three things: **code as data, systems that have to be correct, and measurement over assumption.**

- **Code intelligence** — static analysis, dependency graphs, AST-level usage tracing, historical signal mining
- **Evaluation infrastructure for AI-generated code** — not demos, but harnesses that test whether model output is correct, efficient, and reproducible
- **Backend systems with real constraints** — concurrent ingestion, crash recovery, reorg handling, bounded backpressure, Postgres-backed storage

I care about systems where correctness is tested, performance is benchmarked, and claims come with reproduction scripts — not the other way around.

---

## Selected work

### [ChainLens](https://github.com/VarunGore36/ChainLens-Results) — high-performance Ethereum indexer

A concurrent Ethereum mainnet indexer in Rust: ingests blocks, transactions, receipts, and logs from JSON-RPC, decodes them, persists to PostgreSQL, and serves them over a read API.

Why it's interesting: most indexers assume correctness. This one tests it — reorg handling against a scriptable mock, crash recovery verified by killing the process mid-stream, and throughput measured across three isolated environments so cost is attributable, not claimed.

`Rust · Tokio · PostgreSQL · JSON-RPC · criterion`

Results, methodology, and live dashboard: **[ChainLens-Results](https://github.com/VarunGore36/ChainLens-Results)** → [varungore36.github.io/ChainLens-Results](https://varungore36.github.io/ChainLens-Results/)

<details>
<summary>Engineering notes</summary>

- Fan-out for I/O, single-writer funnel — RPC round-trips dominate by an order of magnitude
- Cursor committed in the same transaction as data — recovery is a single `SELECT`
- All channels bounded — backpressure is structural
- 63 tests (56 unit + 7 integration), zero failures; decode benchmarks down to ~28ns for empty blocks, ~1.7M blocks/sec decode-only ceiling

</details>

### [DepLens](https://github.com/VarunGore36/DepLens) — can dependency impact be predicted?

An investigation into whether dependency graphs, code usage, and historical evidence can predict the impact of a dependency update *before* it is applied. Explicitly framed as an open research question, not a solved problem.

Why it's interesting: the pipeline runs end-to-end against real repositories — spec parsing, transitive graph analysis, AST import-to-dependency linking, git-history update mining, heuristic + test-grounded labeling, baselines, and full evaluation (precision/recall, ROC-AUC, Brier, ablation, temporal splits). The README marks what is proven vs. what isn't, with a committed 42-case dataset and reproduction script.

`Python · AST analysis · dependency graphs · git mining · evaluation harnesses · uv · ruff`

<details>
<summary>Engineering notes</summary>

- Parses `requirements.txt`, `pyproject.toml` (incl. Poetry), `uv` / `Pipfile` locks
- Tracks direct/transitive depth, dependents, centrality, snapshots
- Labels history via reverts, fix-suspects, and isolated - venv test outcomes in git worktrees
- 91 tests, `ruff check` clean, CI + GitHub workflow with PR comments

</details>

### [ENAMEL-Extended](https://github.com/VarunGore36/ENAMEL-Extended) — do open-source code models write efficient code?

Reimplementation and extension of [ENAMEL](https://arxiv.org/abs/2406.06647) (ICLR 2025), asking the same question for open-source models: passing tests is not the same as writing fast code.

Why it's interesting: evaluated 13 open-source models across 161 problems with a sandboxed timing runner, censored scoring, bootstrap CIs, and q-distribution analysis. Finding: the best open-source model matches expert efficiency on only ~33% of problems, and bigger is not always better (CodeGen 6B beats 16B on efficiency).

`Python · LLM evaluation · sandboxed execution · Docker · statistical analysis`

Live results: [enamel-extended.vercel.app](https://enamel-extended.vercel.app) · 612 tests passing

### [CrukxCLI](https://github.com/VarunGore36/CrukxCLI) — a release gate for AI-written software

`crukx gate` replays a recorded agent session against a regression contract and blocks the release when reliability, security, or latency constraints aren't met — deterministically, offline.

Why it's interesting: instead of LLM-judging a single response, it replays the real recorded trajectory (shell commands, file writes, exit codes) `k` times and requires all `k` to pass (`pass^k`). Session logs are hash-chained, so a BLOCK can't be quietly rewritten into a PASS.

`Rust · Ratatui · CLI design · replay-based verification · tamper-evident logs`

---

## Technical areas

**AI / ML**
`LLM code-efficiency evaluation` · `sandboxed measurement` · `statistical scoring (eff@k, bootstrap CIs)` · `quant modeling background (GARCH, stat-arb, IV forecasting)`

**Backend & Systems**
`Rust + Tokio` · `concurrent pipelines` · `PostgreSQL` · `crash-safe recovery` · `reproducible benchmarking`

**Developer tooling**
`AST analysis` · `dependency graphs` · `CLI design` · `CI workflows` · `replay / regression contracts`

**Full-stack & Infra**
`Python` · `TypeScript` · `Go` · `Docker / Compose` · `static result dashboards`

Only what's above shows up in my repositories. No padded skill lists.

---

## Currently

Recent work centers on **DepLens** (dependency-change impact) and **ChainLens** (indexer correctness + performance) — both active as of September 2026. The throughline: tooling that turns "does this code work?" into something measurable.

---

## Contact

Best place to reach me is here on GitHub:

**[github.com/VarunGore36](https://github.com/VarunGore36)**

If you've read this far and build interesting systems — particularly around code intelligence, eval infrastructure, or backend systems — I'm interested in the conversation.
