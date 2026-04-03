# AINI Field Agent

**AI for Nature's Intelligence — Field Intelligence Interface**

Built by the [Pachamaya Foundation](https://pachamaya.ai) in partnership with [Future Climate](https://futureclimate.com) and the Paiter-Suruí People of Rondônia, Brazil.

---

## What This Is

The AINI Field Agent is a constitutional AI agent designed to support project developers working on nature-based carbon solutions. It is the operational interface layer of the AINI initiative — sitting between human practitioners in the field and the AINI Nature Characterized Foundation Model (NC-FM) currently in development.

This repository contains the field agent for the **Surui Carbon Project** on Terra Indígena Sete de Setembro — 275,000 hectares of intact Amazon rainforest stewarded by the Paiter-Suruí people of Rondônia, Brazil.

---

## What It Does

- Answers questions about the Surui REDD+ carbon project from a full project corpus — baseline data, biodiversity reports, territorial diagnostics, risk registers, FPIC and CARE documentation, and the territorial management plan
- Operates natively in **English and Portuguese**
- Applies **dual-track reasoning** — geospatial data and ancestral ecological knowledge as co-equal intelligence streams
- Displays a **Dual-Track Integrity Score** showing the current strength of each knowledge track and the combined project integrity
- Surfaces an **Agent Network** showing this agent's position within the broader AINI network — peers, the NC-FM, and pending connections
- Enforces **constitutional constraints** at the architecture level — FPIC consent, Indigenous data sovereignty (CARE principles), and divergence detection between knowledge tracks
- Generates downloadable project intelligence reports in `.txt` and `.md` formats

---

## Architecture

```
Human Practitioner
       ↓
AINI Field Agent  ←──────────────────────── This repository
       ↓                    ↕ (lateral, pending)
  NC-FM (pending)      Peer Agents (pending)
       ↓
Nature Characterized Foundation Model
```

The Field Agent is **Node 1** in the AINI network. The NC-FM and peer territory agents (Uru-Eu-Wau-Wau TI, Kayapó Mẽbêngôkre, Munduruku TI) are pending Phase 1A development.

---

## Constitutional Framework

All agent behavior is governed by five principles in priority order:

| # | Principle | Description |
|---|-----------|-------------|
| I | Open Source | Apache 2.0. Full transparency, no access restrictions. |
| II | Public Benefit | 501(c)(3). Indigenous benefit-sharing is legally binding. |
| III | Nature Centric | Geospatial and ancestral knowledge are co-equal inputs. |
| IV | Indigenous Governed | Wisdom Council holds veto. Code refuses without FPIC. |
| V | AI Configured | Built on NASA/IBM Prithvi + NVIDIA Earth-2. |

**FPIC VERIFIED · CARE VERIFIED** — Free, Prior and Informed Consent and CARE principles (Collective Benefit, Authority to Control, Responsibility, Ethics) are enforced at the architecture level for every query.

---

## Project Corpus — Surui Carbon Project

The agent has access to the following documents:

| Document | Language | Description |
|----------|----------|-------------|
| M002 Preliminary Baseline Report | EN | Equitable Earth · 149,046 ha · 1.3M tCO₂e/yr gross baseline |
| Relatório de Biodiversidade TISS 2024 | PT → EN | 54 pages · camera traps · 28 Indigenous monitors |
| Diagnóstico Territorial TI 2023 | PT → EN | 53 pages · threats, governance, land use |
| Carbon Risk Analysis | EN + PT | 24 identified risks · VCS/CCB aligned |
| FPIC Consent Documentation | PT → EN | Sovereignty verified · multi-village consultation |
| PGTA — Land Management Plan | PT → EN | 2013 · conservation and production zones |

---

## Dual-Track Integrity Score

| Track | Current Score | Status |
|-------|--------------|--------|
| Geospatial | 68 / 100 | 🟡 Yellow — developing |
| Ancestral Knowledge | Phase 1A | ⬜ Pending field ingestion |
| Combined | Incomplete | Unlocks when both tracks carry data |

**Score thresholds:** 🔴 Under 65 · 🟡 66–85 · 🟢 86 and above

The combined score is not an average — it is a convergence-weighted composite. When both tracks agree, the combined score exceeds either track alone. When they diverge, a mandatory due diligence flag is raised.

---

## Setup — Local Development

### Prerequisites
- [Node.js](https://nodejs.org) LTS version
- An Anthropic API key (`sk-ant-...`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/aini-field-agent.git
cd aini-field-agent

# 2. Install dependencies
npm install

# 3. Configure your API key
cp .env.example .env
# Open .env and replace 'your-key-here' with your Anthropic API key

# 4. Start the agent
bash start.sh
```

### Open in browser
```
http://localhost:3000
```

No API key in the browser. No CORS issues. Works every time.

---

## File Structure

```
aini-field/
├── server.js              ← Express proxy server (API key lives here)
├── public/
│   └── index.html         ← AINI Field Agent frontend (v21)
├── .env                   ← Your API key (never commit this)
├── .env.example           ← Environment template
├── start.sh               ← Start script with friendly error handling
├── package.json           ← Node dependencies
└── README.md              ← This file
```

---

## Deployment

To make the agent accessible to Future Climate project developers at a URL rather than just locally, deploy to any Node.js host:

| Platform | Notes |
|----------|-------|
| [Render](https://render.com) | Free tier available · simple setup |
| [Railway](https://railway.app) | Fast deployment · good free tier |
| [Fly.io](https://fly.io) | More control · free allowance |

Set the `ANTHROPIC_API_KEY` environment variable in your hosting provider's dashboard — never in code or in this repository.

---

## How It Works

```
Browser → POST /api/chat → server.js → Anthropic API → response → browser
```

The Express server (`server.js`) acts as a proxy. The browser never touches the Anthropic API directly — all authentication happens server-side. The API key lives in `.env` and is never exposed to the client.

---

## Important Notes

- **Never commit `.env`** — it contains your API key. It is already in `.gitignore`.
- The agent is a **prototype** — Phase 1A of the AINI initiative. The NC-FM and peer agent connections shown in the network diagram are pending development.
- The baseline data is **DRAFT** — preliminary estimates from Equitable Earth, not yet certified.

---

## Related

- [Pachamaya Foundation](https://pachamaya.ai) — the nonprofit building AINI
- [Future Climate](https://futureclimate.com) — operational partner in Brazil
- [The Case for AINI](https://pachamaya.ai) — the full initiative overview
- [CARE Principles](https://www.gida-global.org/care) — Indigenous data governance framework

---

## License

Apache 2.0 — open source, public benefit, Indigenous governed.

*Co-developed in partnership with Claude (Anthropic) as a constitutional AI co-creator.*

*"The forest is our skin. If you cut the tree, you cut us. If the forest dies, we have no mirror to see who we are." — Paiter-Suruí People of Rondônia, Brazil*
