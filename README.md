<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=400&size=22&duration=3000&pause=1500&color=FFFFFF&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=100&lines=mathematics+%E2%86%92+software+engineering;code+as+data+%2B+correctness+%2B+measurement;building+systems+that+dig+beneath+the+surface" alt="typing animation"/>

# Varun Gore

*Mathematics by degree. Software engineer by trade.*

I build production-oriented software around AI, developer infrastructure, and code intelligence —<br/>
systems that dig beneath the surface rather than sitting on top of it.

<br/>

<img src="https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white" alt="Rust"/>
<img src="https://img.shields.io/badge/Python-0d1117?style=flat-square&logo=python&logoColor=3776AB" alt="Python"/>
<img src="https://img.shields.io/badge/Go-0d1117?style=flat-square&logo=go&logoColor=00ADD8" alt="Go"/>
<img src="https://img.shields.io/badge/TypeScript-0d1117?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript"/>
<img src="https://img.shields.io/badge/PostgreSQL-0d1117?style=flat-square&logo=postgresql&logoColor=4169E1" alt="PostgreSQL"/>
<img src="https://img.shields.io/badge/Docker-0d1117?style=flat-square&logo=docker&logoColor=2496ED" alt="Docker"/>

<br/>

<sub>
<a href="#selected-work">selected work</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#technical-areas">areas</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#currently">now</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#contact">contact</a>
</sub>

<br/>

<img src="https://komarev.com/ghpvc/?username=VarunGore36&color=blueviolet&style=flat-square&label=profile+views" alt="profile views"/>

</div>

<img src="https://raw.githubusercontent.com/VarunGore36/VarunGore36/output/github-contribution-grid-snake-dark.svg" alt="contribution snake" width="100%"/>

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g1)"/>
</svg>
</div>

## What I build

> Systems where **correctness is tested**, **performance is benchmarked**, and **claims ship with reproduction scripts**.

<table>
<tr>
<td width="33%" valign="top">

**Code intelligence**
<br/><br/>
<sub>static analysis · dependency graphs · AST-level usage tracing · git-history signal mining</sub>

</td>
<td width="33%" valign="top">

**Eval infra for AI code**
<br/><br/>
<sub>sandboxed runners · efficiency scoring · bootstrap CIs · reproducible harnesses — not demos</sub>

</td>
<td width="33%" valign="top">

**Backends with constraints**
<br/><br/>
<sub>concurrent ingestion · crash recovery · reorg handling · bounded backpressure · Postgres storage</sub>

</td>
</tr>
</table>

```
code as data  +  systems that must be correct  +  measurement over assumption
```

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g2)"/>
</svg>
</div>

## Selected work
<a id="selected-work"></a>

### `01` — [ChainLens](https://github.com/VarunGore36/ChainLens) · high-performance Ethereum indexer

A concurrent Ethereum mainnet indexer in **Rust + Tokio**: ingests blocks, transactions, receipts, and logs from JSON-RPC, decodes, persists to PostgreSQL, serves over a read API.

> Most indexers assume correctness. This one tests it — reorg handling against a scriptable mock, crash recovery verified by killing the process mid-stream, throughput measured across three isolated environments so cost is attributable, not claimed.

`rust` `tokio` `postgresql` `json-rpc` `criterion`

Live site → [chain-lens-chi.vercel.app](https://chain-lens-chi.vercel.app/) · [ChainLens-Results](https://github.com/VarunGore36/ChainLens-Results)

<details>
<summary><sub>engineering notes</sub></summary>

- Fan-out for I/O, single-writer funnel — RPC round-trips dominate by an order of magnitude
- Cursor committed in the same transaction as data — recovery is a single `SELECT`
- Every channel bounded — backpressure is structural, not hoped for
- `93 tests · 0 failures` — `~28ns` empty-block decode · `~1.7M blocks/sec` decode-only ceiling

```
JSON-RPC → Head Watcher → Scheduler → Workers → Sequencer → Committer → PostgreSQL
                                     ↕ bounded channels (backpressure)
```

</details>

<br/>

### `02` — [DepLens](https://github.com/VarunGore36/DepLens) · can dependency impact be predicted?

An investigation into whether dependency graphs, code usage, and historical evidence can predict the impact of a dependency update *before* it is applied. Framed explicitly as an open research question — not a solved problem.

> End-to-end pipeline against real repos: spec parsing → transitive graph → AST import linking → git-history mining → heuristic + test-grounded labeling → baselines → full evaluation. Every claim marked proven vs. unproven, with a committed 42-case dataset and reproduction script.

`python` `ast-analysis` `dependency-graphs` `git-mining` `uv` `ruff`

<details>
<summary><sub>engineering notes</sub></summary>

- Parses `requirements.txt`, `pyproject.toml` (incl. Poetry), `uv` / `Pipfile` locks
- Tracks direct / transitive depth, dependents, centrality, snapshots
- Labels via reverts, fix-suspects, and isolated-venv test outcomes in git worktrees
- `91 tests · ruff clean · CI` + GitHub workflow with PR comments · `precision / recall / ROC-AUC / Brier / ablation / temporal splits`

</details>

<br/>

### `03` — [ENAMEL-Extended](https://github.com/VarunGore36/ENAMEL-Extended) · do open-source code models write efficient code?

Reimplementation and extension of [ENAMEL](https://arxiv.org/abs/2406.06647) (ICLR 2025). Same question, new target: **open-source models**. Passing tests ≠ writing fast code.

> Evaluated 13 open-source models across 161 problems with a sandboxed timing runner, censored scoring, and q-distribution analysis. Best model matches expert efficiency on only ~33% of problems — and bigger isn't better (CodeGen 6B beats 16B on efficiency).

`python` `llm-eval` `sandboxed-execution` `docker` `statistics`

Live results → [enamel-extended.vercel.app](https://enamel-extended.vercel.app) · `612 tests passing`

<br/>

### `04` — [CrukxCLI](https://github.com/VarunGore36/CrukxCLI) · a release gate for AI-written software

`crukx gate` replays a recorded agent session against a regression contract — and blocks the release when reliability, security, or latency constraints fail. Deterministic, offline, no account required.

> Instead of LLM-judging one response, it replays the real trajectory (commands, writes, exit codes) `k` times and requires all `k` to pass — `pass^k`. Logs are hash-chained, so a BLOCK can't be quietly rewritten into a PASS.

`rust` `ratatui` `cli` `replay-verification` `tamper-evident-logs`

```
crukx run -- npm test   →   crukx capture   →   crukx gate   →   PASS / BLOCKED
```

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g3)"/>
</svg>
</div>

## Signal board

```text
ChainLens        93 tests · 0 failures · 3-env benchmarks · reorg + crash tested
DepLens          91 tests · ruff clean · 42-case dataset · reproduce_v0.py committed
ENAMEL-Extended  612 tests · 13 models · 161 problems · eff@1 vs pass@1 gap measured
CrukxCLI         pass^k replay · hash-chained logs · VTR / P95 / security deltas
```

No stat cards. The numbers above trace to test suites and committed experiment outputs.

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g4)"/>
</svg>
</div>

## Technical areas
<a id="technical-areas"></a>

| Area | What I've actually used |
| :--- | :--- |
| **AI / ML** | LLM efficiency eval · sandboxed measurement · `eff@k`, bootstrap CIs · quant background (GARCH, stat-arb, IV forecasting) |
| **Backend & Systems** | `Rust + Tokio` · concurrent pipelines · `PostgreSQL` · crash-safe recovery · reproducible benchmarking |
| **Developer tooling** | AST analysis · dependency graphs · CLI design · CI workflows · replay / regression contracts |
| **Full-stack & Infra** | `Python` · `TypeScript` · `Go` · `Docker / Compose` · static result dashboards |

<sub>Only what's in my repos. No padded skill lists.</sub>

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g5)"/>
</svg>
</div>

## Currently
<a id="currently"></a>

> Active work centers on **ChainLens** (indexer correctness + performance) and exploring **blockchain infrastructure** (cosmos-sdk, artemis for Android automation).

```text
$ git log --since="30 days" --oneline --author="VarunGore36"
  … chainlens: 93 tests · reorg / recovery hardening · live site
  … deplens: pipeline validation + v0 experiments
  … enamel-extended: open-model efficiency tables + site
```

Throughline: turning *"does this code work?"* into something measurable.

<div align="center">
<svg width="100%" height="3" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="3s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="3" rx="1.5" fill="url(#g6)"/>
</svg>
</div>

<div align="center">
<a id="contact"></a>

```
— contact —
```

**[github.com/VarunGore36](https://github.com/VarunGore36)** · **[LinkedIn](https://www.linkedin.com/in/varun-gore-14187632a/)**

<sub>Building around code intelligence, eval infrastructure, or backend systems? I'm interested in the conversation.</sub>

</div>
