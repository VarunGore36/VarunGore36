<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=28&pause=1000&color=FFFFFF&center=true&vCenter=true&width=450&lines=Varun+Gore" alt="name"/>
<br/>
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=400&size=15&pause=1500&color=A78BFA&center=true&vCenter=true&width=500&lines=AI+systems+%C2%B7+developer+tools+%C2%B7+backend+infrastructure;code+intelligence+%C2%B7+eval+infra+%C2%B7+blockchain+indexing;correctness+is+tested+%C2%B7+performance+is+benchmarked" alt="subtitle"/>

<br/>

[![Rust](https://img.shields.io/badge/Rust-dea584?style=for-the-badge&logo=rust&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](#)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)

<br/>

[![GitHub](https://img.shields.io/badge/github.com%2FVarunGore36-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VarunGore36)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/varun-gore-14187632a/)
<img src="https://komarev.com/ghpvc/?username=VarunGore36&color=6e40c9&style=for-the-badge&label=profile+views" alt="profile views"/>

</div>

<br/>

<div align="center">
<svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="divider" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6e40c9" stop-opacity="0"/>
      <stop offset="50%" stop-color="#6e40c9" stop-opacity="1"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="4s" repeatCount="indefinite"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="4" rx="2" fill="url(#divider)"/>
</svg>
</div>

<br/>

## Featured Projects

<table>
<tr>
<td width="50%" valign="top">

### ChainLens
**High-performance Ethereum indexer**

Concurrent mainnet indexer in **Rust + Tokio**. Ingests blocks, transactions, receipts, logs. Decodes, persists to PostgreSQL, serves over a read API.

Reorg-safe. Crash-resumable. Benchmarked.

`93 tests` · `392 blocks/sec pipeline` · `150ns/block decode`

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/VarunGore36/ChainLens)
[![Live](https://img.shields.io/badge/Live_Site-22c55e?style=flat-square)](https://chain-lens-chi.vercel.app/)

</td>
<td width="50%" valign="top">

### DepLens
**Dependency-change impact prediction**

Can dependency graphs + code usage + git history predict impact *before* an update is applied?

End-to-end pipeline against real repos. Every claim marked proven vs. unproven.

`91 tests` · `42-case dataset` · `reproduction script`

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/VarunGore36/DepLens)

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ENAMEL-Extended
**LLM code efficiency evaluation**

Reimplementation of [ENAMEL](https://arxiv.org/abs/2406.06647) (ICLR 2025) for **open-source models**. Passing tests ≠ writing fast code.

13 models · 161 problems · sandboxed timing runner.

`612 tests` · `eff@1 vs pass@1 gap measured`

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/VarunGore36/ENAMEL-Extended)
[![Live](https://img.shields.io/badge/Live_Site-22c55e?style=flat-square)](https://enamel-extended.vercel.app)

</td>
<td width="50%" valign="top">

### CrukxCLI
**Release gate for AI-written software**

`crukx gate` replays an agent session `k` times and blocks release when constraints fail. Deterministic, offline, tamper-evident.

`pass^k replay` · `hash-chained logs`

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/VarunGore36/CrukxCLI)

</td>
</tr>
</table>

<br/>

<div align="center">
<svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="4" rx="2" fill="url(#divider)"/>
</svg>
</div>

<br/>

## GitHub Activity

<div align="center">

<img src="https://streak-stats.demolab.com?user=VarunGore36&theme=dark&background=0d1117&ring=6e40c9&fire=3b82f6&currStreakLabel=c9d1d9&sideLabels=8B949E&dates=484f5d" alt="Streak Stats" width="60%"/>

<br/>

<img src="https://ghchart.rshah.org/6e40c9/VarunGore36" alt="Contribution Chart" width="90%"/>

</div>

<br/>

<div align="center">
<svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="4" rx="2" fill="url(#divider)"/>
</svg>
</div>

<br/>

## Tech Stack

| Domain | Tools |
| :--- | :--- |
| **AI / ML** | LLM efficiency eval · sandboxed measurement · `eff@k` · bootstrap CIs |
| **Backend** | `Rust + Tokio` · concurrent pipelines · `PostgreSQL` · crash recovery |
| **Dev Tools** | AST analysis · dependency graphs · CLI design · CI workflows |
| **Infra** | `Python` · `TypeScript` · `Go` · `Docker / Compose` |

<br/>

<div align="center">
<svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="4" rx="2" fill="url(#divider)"/>
</svg>
</div>

<br/>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=400&size=14&pause=2000&color=8B949E&center=true&vCenter=true&width=400&lines=building+systems+that+dig+beneath+the+surface" alt="footer"/>

<br/>

**[github.com/VarunGore36](https://github.com/VarunGore36)** · **[LinkedIn](https://www.linkedin.com/in/varun-gore-14187632a/)**

</div>
