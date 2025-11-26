import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
    return (
        <Layout
            title="NovaEco"
            description="Open-source operating system for circular economy and sustainability"
        >
            <main>

                {/* Hero Section (Executive Summary) */}
                <section
                    style={{
                        padding: '4rem 4rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
                        color: 'white'
                    }}
                >
                    <h1>🌍 NovaEco</h1>
                    <p style={{ maxWidth: 960, margin: '0 auto', fontSize: '1.0rem', lineHeight: '1.8' }}>
                        <strong>NovaEco</strong> is the open‑source operating system for the circular economy —
                        empowering individuals, communities, and organizations to design, share, and scale sustainable solutions together.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link className="button button--primary" to="/docs/intro">
                            Get Started
                        </Link>
                        <Link
                            className="button button--secondary"
                            to="https://app.novaeco.tech"
                            style={{ marginLeft: '0.75rem' }}
                        >
                            Launch App
                        </Link>
                    </div>
                </section>


                {/* Four-column Ecosystem Table (short descriptions + tooltips) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🔎 Ecosystem overview</h2>
                    <p>
                        At the heart of the ecosystem are a couple of central services which glue everything together:
                    </p>
                    <ul>
                        <li><strong><a href="https://app.novaeco.tech">App</a></strong> — Central app for onboarding, discovery, and ecosystem management.</li>
                        <li><strong><a href="https://auth.novaeco.tech">Identity</a></strong> — Digital Passport & Trust Profile for unified login and credentials across the ecosystem.</li>
                        <li><strong><a href="https://api.novaeco.tech">Gateway</a></strong> — API gateway for secure, managed access to ecosystem services.</li>
                        <li><strong><a href="https://novaeco.tech/docs">Docs</a></strong> — Comprehensive documentation hub for architecture, use cases, and developer guides.</li>
                    </ul>
                    <p>
                        It is designed as a <strong>System‑of‑Systems</strong>: interconnected <strong>Horizontal Enablers</strong> (services), <strong>Vertical Sectors</strong> (application industries), <strong>Workers</strong> (microservices), and <strong>Products</strong> (hardware/software innovations) that together enable sustainable collaboration, compliance, and innovation.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Enablers</th>
                                    <th style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Sectors</th>
                                    <th style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Representative workers</th>
                                    <th style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Representative products</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td title="Innovation Wizard: Decomposes complex problems into atomic ecosystem tasks"><a href="https://novahub.network">NovaHub — Innovation Wizard</a></td>
                                    <td title="Regenerative agriculture and food systems"><a href="https://novaagro.tech">NovaAgro — farming & food</a></td>
                                    <td title="Syncs EU databases and ERPs to keep Digital Product Passports current">NovaMaterial — DPP sync</td>
                                    <td title="Autonomous electric robot for regenerative farming tasks">DurasAGV — agricultural robot</td>
                                </tr>
                                <tr>
                                    <td title="Fintech hub for green bonds, ESG-linked finance"><a href="https://novafin.finance">NovaFin — capital engine</a></td>
                                    <td title="Water purification, desalination, smart grids"><a href="https://novawater.tech">NovaWater — water systems</a></td>
                                    <td title="Automated LCA calculations triggered by transactions">NovaBalance — LCA engine</td>
                                    <td title="Smart reusable packaging with tracker and e-ink label">NovaBox — reusable packaging</td>
                                </tr>
                                <tr>
                                    <td title="Exchange for materials and environmental assets"><a href="https://novatrade.markets">NovaTrade — trading backbone</a></td>
                                    <td title="Circular construction & buildings-as-material-banks"><a href="https://novabuild.tech">NovaBuild — construction</a></td>
                                    <td title="Finds waste-to-resource symbiosis matches">NovaHub — symbiosis matcher</td>
                                    <td title="Retrofit robotic arm with vision for AI sorting">SortBotX1 — sorting robot</td>
                                </tr>
                                <tr>
                                    <td title="AI, robotics, IoT, digital twins"><a href="https://novasapien.ai">NovaSapien — intelligence & robotics</a></td>
                                    <td title="Circular fashion & textile recycling"><a href="https://novatextile.tech">NovaTextile — fashion & textile</a></td>
                                    <td title="Computer vision inference for sorting robots">NovaSapien — AI sorter</td>
                                    <td title="Industrial-grade NFC/RFID tag linking to passports">CirclID — industrial tag</td>
                                </tr>
                                <tr>
                                    <td title="Renewable energy, smart grids, storage"><a href="https://novaenergy.tech">NovaEnergy — power systems</a></td>
                                    <td title="Advanced sorting, recycling, urban mining"><a href="https://novawaste.tech">NovaWaste — recycling</a></td>
                                    <td title="Policy-as-code compliance scanning across supply chains">NovaPolicy — policy guard</td>
                                    <td title="CAD plugin that generates compliant DPPs">MaterialPassportGenerator — SaaS tool</td>
                                </tr>
                                <tr>
                                    <td title="R&D for biomaterials and new recycling tech"><a href="https://novamaterial.tech">NovaMaterial — materials lab</a></td>
                                    <td title="Carbon capture, pollution monitoring, air quality"><a href="https://novaair.systems">NovaAir — air systems</a></td>
                                    <td title="Optimizes reverse logistics routes">NovaMobility — routing</td>
                                    <td title="Bi-directional EV charger enabling V2H/V2G">WattShareController — charger</td>
                                </tr>
                                <tr>
                                    <td title="Reverse logistics, EV fleets, take-back loops"><a href="https://novamobility.tech">NovaMobility — logistics</a></td>
                                    <td title="Reusable devices, sustainable hospital operations"><a href="https://novahealth.systems">NovaHealth — healthcare</a></td>
                                    <td title="Coordinates EV fleets to stabilize the grid">NovaEnergy — V2G coordinator</td>
                                    <td title="Urban furniture with moss filters and sensors">PureAirStation — air bench</td>
                                </tr>
                                <tr>
                                    <td title="Shared physical infrastructure and hubs"><a href="https://novainfra.systems">NovaInfra — infrastructure backbone</a></td>
                                    <td title="Circular packaging systems and deposit schemes"><a href="https://novapack.tech">NovaPack — packaging</a></td>
                                    <td title="Crawls public data for urban mining sources">NovaHub — urban miner</td>
                                    <td title="Computer-vision bin to prevent mis-sorting in hospitals">MedCycleBin — smart bin</td>
                                </tr>
                                <tr>
                                    <td title="Education and reskilling for green-collar workers"><a href="https://novaskills.education">NovaSkills — human capital</a></td>
                                    <td title="Electronics repair/refurbishment and device layer"><a href="https://novatronix.tech">NovaTronix — electronics</a></td>
                                    <td title="Anonymizes healthcare data to protect privacy">NovaHealth — privacy shield</td>
                                    <td title="Automated disassembly rig for textile preparation">ReformFabric — textile rig</td>
                                </tr>
                                <tr>
                                    <td title="Governance standards and rulebook"><a href="https://novapolicy.global">NovaPolicy — governance</a></td>
                                    <td title="Green chemistry and chemical leasing models"><a href="https://novachem.tech">NovaChem — chemicals</a></td>
                                    <td title="Executes performance-based financing settlements">NovaFin — green contracts</td>
                                    <td title="Standardized toolset for repair cafes">RefurbLabKit — repair tools</td>
                                </tr>
                                <tr>
                                    <td title="Environmental auditor for carbon/water/waste"><a href="https://novabalance.earth">NovaBalance — environmental auditor</a></td>
                                    <td></td><td></td><td></td>
                                </tr>
                                <tr>
                                    <td title="Social auditor for fair labor and equity"><a href="https://novaequity.org">NovaEquity — social auditor</a></td>
                                    <td></td><td></td><td></td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: '0.5rem', color: '#666' }}>
                            Note: Workers and Products shown are representative examples; the list evolves as the ecosystem grows.
                        </p>
                        <p>
                            👉 Explore the full <Link to="/docs/architecture/overview">Architecture Overview</Link> for detailed descriptions and interactions.
                        </p>
                    </div>
                </section>

                {/* Use Case Highlights (Four Levels) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>📊 Use case highlights</h2>
                    <p>
                        We demonstrate the ecosystem’s scalability and interoperability through four distinct, non‑overlapping levels: <strong> Onboarding & Control</strong>, <strong>Transactional Efficiency</strong>, <strong>Value Chain Coordination</strong>, and <strong>Systemic Transformation</strong>.<br />
                        Together these levels provide a complete view of how the NovaEco supports individual entry, simple exchanges, coordinated value chains, and complex systemic change across the circular economy.
                    </p>


                    {/* Level 1: Onboarding & Control */}
                    <h3>Level 1: Onboarding & Control (Foundational integration)</h3>
                    <p><em>Focus: onboarding, IAM, API setup, inter‑enabler/sector/worker/product integration, data aggregation, dashboards, compliance.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-1-onboarding#O1">[O1] User Onboarding</Link> — Individual registers and joins the ecosystem via Identity, creating a trusted profile.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O2">[O2] API Key Generation</Link> — Developer generates API keys to integrate enabler/sector services securely.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O3">[O3] Sustainability Dashboard</Link> — User views personal or organizational impact metrics aggregated across enablers.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O4">[O4] Cross‑Sector Data Aggregation</Link> — DPP and LCA data ingested from multiple sectors for holistic insights.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O5">[O5] Circular Marketplace Access</Link> — User discovers and connects to sector apps and workers through the central marketplace.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O6">[O6] Community Governance</Link> — Contributors propose and vote on changes via NovaPolicy governance modules.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O7">[O7] Multi‑Tenant Access Management</Link> — Organizations manage roles, teams, and permissions across apps.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O8">[O8] Ecosystem‑Wide LCA Calculation</Link> — Automated life‑cycle assessment across products and sectors.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O9">[O9] Urban Mining Coordination</Link> — Central app orchestrates urban mining projects across enablers and sectors.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#O10">[O10] Central Audit & Compliance Dashboard</Link> — Unified compliance and ESG dashboard spanning all enablers/sectors.</li >
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-1-onboarding">Level 1: Onboarding & Control</Link>
                    </p>

                    {/* Level 2: Easy (Transactional Efficiency) */}
                    < h3 > Level 2: Easy(Transactional efficiency)</h3 >
                    <p><em>Focus: simple, low‑friction transactions involving 1–2 stakeholders.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-2-easy#E1">[E1] The Waste Match</Link> — Bakery waste matched with a local insect farm via NovaHub.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E2">[E2] Green Tutor</Link> — Circular design tutoring booked on NovaSkills, paid via NovaFin.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E3">[E3] Ride to Factory</Link> — BMW employees carpool using NovaMobility, micro‑pay via NovaFin.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E4">[E4] Citizen Sensor</Link> — River water testing uploaded via NovaWater; verified by NovaBalance.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E5">[E5] Material Scout</Link> — Architect catalogs reusable bricks using AI vision; passported in NovaMaterial.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E6">[E6] Ugly Veggie Box</Link> — Farm lists imperfect produce for direct sale on NovaTrade.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E7">[E7] Solar Log</Link> — Homeowner logs daily green energy with NovaEnergy; impact in NovaBalance.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E8">[E8] Device Return</Link> — Clinic requests pickup via NovaHealth & NovaWaste.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E9">[E9] Pollen Alert</Link> — Hyper‑local air quality notifications via NovaAir & NovaSapien.</li>
                        <li><Link to="/docs/usecases/level-2-easy#E10">[E10] Universal Bowl</Link> — Reusable takeout tracked by Identity; reverse logistics via NovaMobility.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-2-easy">Level 2: Easy (Transactional Efficiency)</Link>
                    </p>

                    {/* Level 3: Medium (Value Chain Coordination) */}
                    <h3>Level 3: Medium (Value chain coordination)</h3>
                    <p><em>Focus: B2B transactions, multi‑stakeholder coordination, compliance checks, simple audits.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-3-medium#M1">[M1] Startup Funding</Link> — NovaHub matches capital, mentorship, lab space.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M2">[M2] Furniture Loop</Link> — Siemens chairs reused by Munich Re; logistics via NovaMobility.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M3">[M3] Compliance Check</Link> — Textile importer certs validated by NovaPolicy + NovaSapien.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M4">[M4] Smart Bin Route</Link> — Route optimization via NovaMobility & NovaSapien.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M5">[M5] Fair Wage Audit</Link> — Split payments via NovaFin; NovaEquity badge on confirmation.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M6">[M6] V2G Balancing</Link> — EV fleet sells capacity via NovaEnergy; settlement via NovaFin.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M7">[M7] Plastic Passport</Link> — DPP for rPET via NovaMaterial & NovaPolicy.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M8">[M8] Greywater Share</Link> — Data center heat/greywater to greenhouse via NovaInfra; audited in NovaBalance.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M9">[M9] Corporate Refurb</Link> — Bank laptops refurbished, data‑wipe certified; resale via NovaTrade.</li>
                        <li><Link to="/docs/usecases/level-3-medium#M10">[M10] Solvent Lease</Link> — Filtration via NovaWater; QA via NovaSapien.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-3-medium">Level 3: Medium (Value Chain Coordination)</Link>
                    </p>

                    {/* Level 4: Complex (Systemic Transformation) */}
                    <h3>Level 4: Complex (Systemic transformation)</h3>
                    <p><em>Focus: system‑of‑systems, real‑time AI optimization, policy‑as‑code, cross‑border compliance.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-4-complex#C1">[C1] City Challenge</Link> — Munich consortium (Agro, Waste, Logistics), grants via NovaFin, governance via NovaPolicy.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C2">[C2] Building‑as‑Bank</Link> — Assets tracked for futures; LCA via NovaBalance; listing via NovaTrade.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C3">[C3] Fiber‑to‑Fiber</Link> — AI sorting via NovaSapien; chemical recycling via NovaMaterial; logistics via NovaMobility.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C4">[C4] Circular Hospital</Link> — Pay‑per‑scan leasing via NovaFin; sterilization hub via NovaInfra.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C5">[C5] Automated Carbon Trading</Link> — Sensors verify capture; credits via NovaTrade; community dividend via NovaEquity.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C6">[C6] Autonomous Logistics</Link> — DurasAGV swarm coordinated by NovaSapien; charging via NovaEnergy.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C7">[C7] Algorithmic Governance</Link> — EU laws as code; gatekeeping via NovaTrade; Identity and NovaMaterial compliance.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C8">[C8] Urban Air Twin</Link> — Dynamic toll pricing via NovaFin; pollution data via NovaAir.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C9">[C9] Global Green Corps</Link> — Remote ops via NovaInfra; fair pay audited via NovaEquity.</li>
                        <li><Link to="/docs/usecases/level-4-complex#C10">[C10] City‑Wide Loop</Link> — Unified cup deposit; washing via NovaWater; logistics via NovaMobility.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-4-complex">Level 4: Complex (Systemic Transformation)</Link>
                    </p>
                </section >

                {/* Collaboration & Legal */}
                < section style={{ padding: '2rem 4rem' }}>
                    <h2>🤝 Collaboration & legal</h2>
                    <p>
                        Contributions are governed by our <a href="https://github.com/novaeco-tech/.github/blob/main/CONTRIBUTING.md">Contribution Guide</a> and
                        <a href="https://github.com/novaeco-tech/.github/blob/main/CODE_OF_CONDUCT.md"> Code of Conduct</a>. Sponsorship agreements are managed via
                        <a href="https://circular.engineering"> Circular Engineering Nova GmbH</a>.
                    </p>
                </section >

                {/* Blog */}
                < section style={{ padding: '2rem 4rem' }}>
                    <h2>📰 Latest updates</h2>
                    <p>
                        Check our <Link to="/blog">Blog</Link> for news, releases, and ecosystem stories.
                    </p>
                </section >
            </main >
        </Layout >
    );
}