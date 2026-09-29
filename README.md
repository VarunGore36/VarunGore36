<div align="center">
  <img src="banner.svg" alt="Varun Gore — infrastructure that proves its own claims" width="100%"/>
</div>

<br/>

> I build infrastructure that has to prove its own claims — indexers, benchmarks, replay systems, and release gates where correctness is tested, performance is measured, and anything unproven is labelled as such.

**Systems engineering · AI evaluation · developer infrastructure**
<br/>Rust · Python — Freelance / contract via [Crukx-dev](https://github.com/Crukx-dev) · Project work for IISER Bhopal
<br/>Based in Bhopal, India (IST)

> **Currently:** [AstralProject](https://github.com/VarunGore36/AstralProject) — preparing a supervised 72-hour capture soak

---

## Selected work

| Project | What it does | Evidence |
|---|---|---|
| [**AstralProject**](https://github.com/VarunGore36/AstralProject) · [site](https://astral-project-ruddy.vercel.app/) | Reproducible measurement layer for crypto markets: lossless, hash-verified market-data capture and order-book reconstruction. Research and simulation only. | Best bid/ask matched venue depth on 300/300 live checks · 26 hostile-payload parser tests · failures documented in-repo |
| [**ChainLens**](https://github.com/VarunGore36/ChainLens) · [live](https://chain-lens-chi.vercel.app/) | Concurrent Ethereum mainnet indexer in Rust + Tokio. Blocks, transactions, receipts and logs into PostgreSQL with a read API. Reorg-safe, crash-resumable. | 93 tests · 392 blocks/sec pipeline benchmark · 150 ns/block decode |
| [**DepLens**](https://github.com/VarunGore36/DepLens) | Can dependency graphs, code usage and git history predict the impact of a change before it lands? End-to-end pipeline tested against real repos. | 91 tests · 42-case dataset · reproduction script · claims marked proven / unproven |
| [**ENAMEL-Extended**](https://github.com/VarunGore36/ENAMEL-Extended) · [live](https://enamel-extended.vercel.app) | Reimplementation of [ENAMEL](https://arxiv.org/abs/2406.06647) (ICLR 2025) for open-source models: passing tests isn't the same as writing fast code. | 13 models · 161 problems · 612 tests · eff@1 vs pass@1 gap measured |
| [**CrukxCLI**](https://github.com/Crukx-dev/CrukxCLI) | `crukx gate` replays a recorded agent session *k* times and blocks the release if constraints fail. Deterministic, offline, no account needed. | pass^k replay · hash-chained, tamper-evident session logs |

---

## How I work

1. **Deterministic before fast** — same input, same output, every replay.
2. **Measure before optimising** — every optimisation ships with a benchmark.
3. **Failures are documented, not hidden** — partial results and unverified claims stay in the README.

---

## Stack

**Core:** Rust · Python · Tokio · PostgreSQL
<br/>**Infra:** Docker · Linux
<br/>**Also:** C, C++, Go, TypeScript, JavaScript, Solidity / EVM

<p>
  <img src="https://img.shields.io/badge/Rust-dea584?style=flat-square&logo=rust&logoColor=black"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tokio-000000?style=flat-square&logo=rust&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black"/>
</p>

---

## Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/varun-gore-14187632a/)
[![Crukx-dev](https://img.shields.io/badge/Crukx--dev-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Crukx-dev)

</div>
