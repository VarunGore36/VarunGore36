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

## Independent projects, shared standard

> Each project below is standalone — no shared runtime, no pipeline between them. What they share is how they're built.

```mermaid
flowchart TB
    subgraph data["Data systems"]
        a1["AstralProject - market data"]
        a2["ChainLens - chain data"]
    end
    subgraph eval["Evaluation"]
        b1["DepLens - change impact"]
        b2["ENAMEL-Extended - code efficiency"]
    end
    subgraph rel["Release safety"]
        c1["CrukxCLI - replay gates"]
    end
    s["deterministic - measured - failures documented"]
```

---

## Selected work

### AstralProject — reproducible market-data measurement

[![Repo](https://img.shields.io/badge/Repo-AstralProject-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/AstralProject)
[![Live site](https://img.shields.io/badge/Live-astral--project--ruddy.vercel.app-5eead4?style=flat-square&logo=vercel&logoColor=black)](https://astral-project-ruddy.vercel.app/)

> Lossless, hash-verified market-data capture and order-book reconstruction. Research and simulation only.

**Evidence:** best bid/ask matched venue depth on 300/300 live checks · 26 hostile-payload parser tests · failures documented in-repo

```mermaid
flowchart LR
    ws["Exchange WebSocket"] --> fr["raw frames"]
    fr --> ch["compressed chunks plus SHA-256"]
    ch --> bk["order-book reconstruct"]
    bk --> au["offline audit"]
```

---

### ChainLens — concurrent Ethereum mainnet indexer

[![Repo](https://img.shields.io/badge/Repo-ChainLens-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/ChainLens)
[![Live](https://img.shields.io/badge/Live-chain--lens--chi.vercel.app-5eead4?style=flat-square&logo=vercel&logoColor=black)](https://chain-lens-chi.vercel.app/)

> Rust + Tokio indexer. Blocks, transactions, receipts and logs into PostgreSQL with a read API. Reorg-safe, crash-resumable.

**Evidence:** 93 tests · 392 blocks/sec pipeline benchmark · 150 ns/block decode

```mermaid
flowchart LR
    rpc["Ethereum RPC"] --> w["workers"]
    w --> sq["sequencer"]
    sq --> cm["committer"]
    cm --> pg[("PostgreSQL")]
    pg --> api["read API plus WS"]
```

---

### DepLens — can history predict breakage?

[![Repo](https://img.shields.io/badge/Repo-DepLens-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/DepLens)

> Do dependency graphs, code usage and git history predict the impact of a change before it lands? End-to-end pipeline tested against real repos.

**Evidence:** 91 tests · 42-case dataset · reproduction script · claims marked proven / unproven

```mermaid
flowchart LR
    r["repo plus specs"] --> g["dependency graph"]
    r --> u["usage tracing"]
    g --> p["impact estimate"]
    u --> p
    p --> e["evaluation"]
```

---

### ENAMEL-Extended — passing tests isn't fast code

[![Repo](https://img.shields.io/badge/Repo-ENAMEL--Extended-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/ENAMEL-Extended)
[![Live](https://img.shields.io/badge/Live-enamel--extended.vercel.app-5eead4?style=flat-square&logo=vercel&logoColor=black)](https://enamel-extended.vercel.app)
[![Paper](https://img.shields.io/badge/Paper-arXiv:2406.06647-b31b1b?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.06647)

> Reimplementation of [ENAMEL](https://arxiv.org/abs/2406.06647) (ICLR 2025) for open-source models: passing tests isn't the same as writing fast code.

**Evidence:** 13 models · 161 problems · 612 tests · eff@1 vs pass@1 gap measured

```mermaid
flowchart LR
    q["problems plus samples"] --> m["sandboxed measure"]
    m --> sc["eff-at-1 scoring"]
    sc --> rp["report plus CIs"]
```

---

### CrukxCLI — deterministic release gates

[![Repo](https://img.shields.io/badge/Repo-CrukxCLI-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Crukx-dev/CrukxCLI)

> `crukx gate` replays a recorded agent session *k* times and blocks the release if constraints fail. Deterministic, offline, no account needed.

**Evidence:** pass^k replay · hash-chained, tamper-evident session logs

```mermaid
flowchart LR
    s1["recorded session"] --> r1["replay k times"]
    r1 --> gt{"constraints hold"}
    gt -->|"yes"| ok["release"]
    gt -->|"no"| bl["block"]
```

---

## How I work

```mermaid
flowchart TD
    i["same input"] --> rp2["replay"]
    rp2 --> ms["measure with benchmark"]
    ms --> dc["document failures"]
    dc --> sh["ship or mark unproven"]
```

1. **Deterministic before fast** — same input, same output, every replay.
2. **Measure before optimising** — every optimisation ships with a benchmark.
3. **Failures are documented, not hidden** — partial results and unverified claims stay in the README.

---

## Stack

<!-- All icons below are served via GitHub Camo -->

| | |
|---|---|
| Languages | <img src="https://skillicons.dev/icons?i=rust,py,ts,js,c,cpp,go,solidity,bash,html,css&theme=dark" alt="Languages"/> |
| Rust | <img src="https://img.shields.io/badge/Tokio-000000?style=flat-square&logo=rust&logoColor=white" alt="Tokio"/> <img src="https://img.shields.io/badge/Axum-000000?style=flat-square&logo=rust&logoColor=white" alt="Axum"/> <img src="https://img.shields.io/badge/SQLx-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="SQLx"/> <img src="https://img.shields.io/badge/Alloy-7C3AED?style=flat-square&logo=ethereum&logoColor=white" alt="Alloy"/> <img src="https://img.shields.io/badge/Clap-000000?style=flat-square&logo=rust&logoColor=white" alt="Clap"/> <img src="https://img.shields.io/badge/Serde-000000?style=flat-square&logo=rust&logoColor=white" alt="Serde"/> <img src="https://img.shields.io/badge/Tungstenite-0F1626?style=flat-square&logo=websocket&logoColor=white" alt="Tungstenite"/> <img src="https://img.shields.io/badge/rustls-000000?style=flat-square&logo=rust&logoColor=white" alt="rustls"/> <img src="https://img.shields.io/badge/Reqwest-000000?style=flat-square&logo=rust&logoColor=white" alt="Reqwest"/> <img src="https://img.shields.io/badge/zstd-000000?style=flat-square&logo=rust&logoColor=white" alt="zstd"/> <img src="https://img.shields.io/badge/Ratatui-000000?style=flat-square&logo=rust&logoColor=white" alt="Ratatui"/> <img src="https://img.shields.io/badge/Criterion-000000?style=flat-square&logo=rust&logoColor=white" alt="Criterion"/> |
| Python | <img src="https://img.shields.io/badge/pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white" alt="pytest"/> <img src="https://img.shields.io/badge/Ruff-D7FF64?style=flat-square&logo=ruff&logoColor=black" alt="Ruff"/> <img src="https://img.shields.io/badge/uv-DE5FE9?style=flat-square&logo=astral&logoColor=white" alt="uv"/> <img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" alt="NumPy"/> <img src="https://img.shields.io/badge/Matplotlib-11557C?style=flat-square&logo=plotly&logoColor=white" alt="Matplotlib"/> <img src="https://img.shields.io/badge/EvalPlus-000000?style=flat-square&logo=python&logoColor=white" alt="EvalPlus"/> <img src="https://img.shields.io/badge/vLLM-000000?style=flat-square&logo=python&logoColor=white" alt="vLLM"/> |
| Data / Infra | <img src="https://skillicons.dev/icons?i=postgres,docker,linux,git,githubactions,prometheus,grafana,vercel,nodejs,npm&theme=dark" alt="Data and infra"/> <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat-square&logo=ethereum&logoColor=white" alt="Ethereum"/> <img src="https://img.shields.io/badge/WebSocket-010101?style=flat-square&logo=websocket&logoColor=white" alt="WebSocket"/> |

---

## Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/varun-gore-14187632a/)
[![Email](https://img.shields.io/badge/Email-varungore1@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:varungore1@gmail.com)

</div>
