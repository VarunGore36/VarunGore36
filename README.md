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
    subgraph DATA["Data systems"]
        A[AstralProject<br/>market data]
        B[ChainLens<br/>chain data]
    end
    subgraph EVAL["Evaluation"]
        C[DepLens<br/>change impact]
        D[ENAMEL-Extended<br/>code efficiency]
    end
    subgraph REL["Release safety"]
        E[CrukxCLI<br/>replay gates]
    end
    S[deterministic · measured · failures documented]
    style S fill:#0f1626,stroke:#5eead4,color:#8ac7db
    style DATA fill:transparent,stroke:#2a3350,color:#6b7488
    style EVAL fill:transparent,stroke:#2a3350,color:#6b7488
    style REL fill:transparent,stroke:#2a3350,color:#6b7488
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
    WS[Exchange WebSocket] --> FR[raw frames]
    FR --> CH[compressed chunks + SHA-256]
    CH --> BK[order-book reconstruct]
    BK --> AU[offline audit]
```

---

### ChainLens — concurrent Ethereum mainnet indexer

[![Repo](https://img.shields.io/badge/Repo-ChainLens-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/ChainLens)
[![Live](https://img.shields.io/badge/Live-chain--lens--chi.vercel.app-5eead4?style=flat-square&logo=vercel&logoColor=black)](https://chain-lens-chi.vercel.app/)

> Rust + Tokio indexer. Blocks, transactions, receipts and logs into PostgreSQL with a read API. Reorg-safe, crash-resumable.

**Evidence:** 93 tests · 392 blocks/sec pipeline benchmark · 150 ns/block decode

```mermaid
flowchart LR
    RPC[Ethereum RPC] --> W[workers]
    W --> S[sequencer]
    S --> C[committer]
    C --> PG[(PostgreSQL)]
    PG --> API[read API + WS]
```

---

### DepLens — can history predict breakage?

[![Repo](https://img.shields.io/badge/Repo-DepLens-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VarunGore36/DepLens)

> Do dependency graphs, code usage and git history predict the impact of a change before it lands? End-to-end pipeline tested against real repos.

**Evidence:** 91 tests · 42-case dataset · reproduction script · claims marked proven / unproven

```mermaid
flowchart LR
    R[repo + specs] --> G[dependency graph]
    R --> U[usage tracing]
    G --> P[impact estimate]
    U --> P
    P --> E[evaluation]
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
    Q[problems + samples] --> M[sandboxed measure]
    M --> S[eff@1 scoring]
    S --> R[report + CIs]
```

---

### CrukxCLI — deterministic release gates

[![Repo](https://img.shields.io/badge/Repo-CrukxCLI-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Crukx-dev/CrukxCLI)

> `crukx gate` replays a recorded agent session *k* times and blocks the release if constraints fail. Deterministic, offline, no account needed.

**Evidence:** pass^k replay · hash-chained, tamper-evident session logs

```mermaid
flowchart LR
    S[recorded session] --> R[replay k times]
    R --> G{constraints hold?}
    G -->|yes| OK[release]
    G -->|no| BL[block]
```

---

## How I work

```mermaid
flowchart TD
    I[same input] --> R[replay]
    R --> M[measure with benchmark]
    M --> D[document failures]
    D --> SH[ship or mark unproven]
```

1. **Deterministic before fast** — same input, same output, every replay.
2. **Measure before optimising** — every optimisation ships with a benchmark.
3. **Failures are documented, not hidden** — partial results and unverified claims stay in the README.

---

## Stack

**Core:** Rust · Python · Tokio · PostgreSQL
<br/>**Infra:** Docker · Linux
<br/>**Also:** C, C++, Go, TypeScript, JavaScript, Solidity / EVM

<!-- Stack icons served via GitHub Camo -->
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=rust,py,postgres,docker,linux,go,ts,js,solidity,c,cpp&theme=dark" alt="Rust, Python, PostgreSQL, Docker, Linux, Go, TypeScript, JavaScript, Solidity, C, C++"/>
  </a>
</p>

---

## Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/varun-gore-14187632a/)
[![Email](https://img.shields.io/badge/Email-varungore1@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:varungore1@gmail.com)

</div>
