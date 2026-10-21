<div align="center">

# Varun Gore

### Systems engineer building software that earns trust.

I work on secure agent runtimes, deterministic data systems, and benchmarks that separate a promising claim from a proven result.

[LinkedIn](https://www.linkedin.com/in/varun-gore-14187632a/) · [Email](mailto:varungore1@gmail.com) · [GitHub](https://github.com/VarunGore36) · Discord `@geronimo.stilton36`

</div>

---

## The through-line

Most of my work starts with one question: **can we show that this system did what it says it did?**

That means explicit policies instead of ambient authority, replayable pipelines instead of hand-wavy results, and benchmarks with enough context to be challenged. I enjoy working close to the boundary where an idea becomes dependable software.

## Selected work

| Project | What it is | Why it matters |
| :-- | :-- | :-- |
| [**Toolcage**](https://github.com/VarunGore36/toolcage) | A local-first Rust runtime that places policy, credential brokering, controlled egress, and tamper-evident audit logs between an AI agent and the systems it can affect. | Agent actions default to **deny** when policy, isolation, or evidence cannot be established. `72 tests` · `404 ns` policy-decision p99 · alpha, not independently reviewed. |
| [**AstralProject**](https://github.com/VarunGore36/AstralProject) | A reproducible measurement layer for crypto markets: lossless capture, deterministic replay, and honest cost models. | Research is only useful when someone else can replay it. `300/300` top-of-book checks. [Live site](https://astral-project-ruddy.vercel.app/) |
| [**ChainLens**](https://github.com/VarunGore36/ChainLens) | A concurrent Ethereum mainnet indexer in Rust and Tokio with canonical-chain tracking, reorg handling, crash recovery, and PostgreSQL storage. | Makes blockchain data pipelines inspectable rather than magical. `232 tests` · `150 ns/block` decode benchmark. [Live site](https://chain-lens-chi.vercel.app/) |
| [**ENAMEL-Extended**](https://github.com/VarunGore36/ENAMEL-Extended) | An open reimplementation and extension of the ENAMEL benchmark for evaluating the efficiency of LLM-generated code. | Passing tests is not the same thing as writing efficient software. `13 models` · `161 problems` · `612 tests`. [Live site](https://enamel-extended.vercel.app) |
| [**DepLens**](https://github.com/VarunGore36/DepLens) | An empirical investigation into whether dependency graphs, code use, and Git history can predict change impact. | The project is designed to report where prediction works—and where the evidence says it does not. `91 tests` · `42-case` dataset. |

<sub>Numbers describe the projects at the time they were recorded. Benchmarks belong to their documented environments; they are not universal performance claims.</sub>

## What I build with

```text
languages       Rust · Python · SQL · TypeScript
systems         Tokio · Axum · SQLx · PostgreSQL · Linux
reliability     Docker · GitHub Actions · Prometheus · Grafana · pytest · Ruff
AI / evaluation vLLM · EvalPlus · NumPy · Matplotlib
```

## Working principles

- **Determinism before speed.** Same input, same output, every replay.
- **Measure before optimising.** Performance claims come with a method and a boundary.
- **Fail closed.** When a security or correctness guarantee cannot be established, do not quietly weaken it.
- **Document the rough edges.** Partial results and unverified assumptions deserve to be visible.

## Currently exploring

Making AI agents safer to run in the real world: constrained tools, least-privilege credentials, auditable execution, and isolation that fails safely.

---

<div align="center">

<sub>Open to interesting systems, infrastructure, and agent-safety conversations.</sub>

</div>
