import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
    return (
        <Layout
            title="Nova Ecosystem"
            description="The Open-Source Operating System for a Circular Economy"
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
                    <h1>🌍 Nova Ecosystem</h1>
                    <p style={{ maxWidth: 960, margin: '0 auto' }}>
                        The Nova Ecosystem is the open-source operating system for the circular economy.
                        It unites Enablers, Sectors, specialized Workers, and innovative Products
                        into a cohesive framework that transforms sustainability from fragmented efforts
                        into a scalable, systemic solution.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link className="button button--primary" to="/docs/intro">
                            Get Started
                        </Link>
                        <Link className="button button--secondary" to="https://app.nova-ecosystem.org" style={{ marginLeft: '0.75rem' }}>
                            Launch Central App
                        </Link>
                    </div>
                </section>

                {/* Four-column Ecosystem Table (short descriptions + tooltips) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🔎 Ecosystem overview</h2>
                    <p>
                        The Nova Ecosystem is built on <strong>Enablers</strong> (horizontal services), <strong>Sectors</strong> (application industries),
                        <strong>Workers</strong> (microservices), and <strong>Products</strong> (hardware/software innovations).
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
                                    <td title="Digital Passport & Trust Profile for unified login and credentials"><a href="https://auth.nova-ecosystem.org">Identity — SSO & profile</a></td>
                                    <td title="Regenerative agriculture and food systems"><a href="https://novaagro.tech">NovaAgro — farming & food</a></td>
                                    <td title="Syncs EU databases and ERPs to keep Digital Product Passports current">NovaMaterial — DPP sync</td>
                                    <td title="Autonomous electric robot for regenerative farming tasks">DurasAGV — agricultural robot</td>
                                </tr>
                                <tr>
                                    <td title="Collaboration Engine, project wizard for needs/offers/problems"><a href="https://novahub.network">NovaHub — project wizard</a></td>
                                    <td title="Water purification, desalination, smart grids"><a href="https://novawater.tech">NovaWater</a></td>
                                    <td title="Automated LCA calculations triggered by transactions">NovaBalance — LCA engine</td>
                                    <td title="Smart reusable packaging with tracker and e-ink label">NovaBox — reusable packaging</td>
                                </tr>
                                <tr>
                                    <td title="Fintech hub for green bonds, ESG-linked finance"><a href="https://novafin.finance">NovaFin — capital engine</a></td>
                                    <td title="Circular construction & buildings-as-material-banks"><a href="https://novabuild.tech">NovaBuild — construction</a></td>
                                    <td title="Finds waste-to-resource symbiosis matches">NovaHub — symbiosis matcher</td>
                                    <td title="Retrofit robotic arm with vision for AI sorting">SortBotX1 — sorting robot</td>
                                </tr>
                                <tr>
                                    <td title="Exchange for materials and environmental assets"><a href="https://novatrade.markets">NovaMarkets — trading backbone</a></td>
                                    <td title="Circular fashion & textile recycling"><a href="https://novatextile.tech">NovaTextile — fashion & textile</a></td>
                                    <td title="Computer vision inference for sorting robots">NovaSapien — AI sorter</td>
                                    <td title="Industrial-grade NFC/RFID tag linking to passports">CirclID — industrial tag</td>
                                </tr>
                                <tr>
                                    <td title="AI, robotics, IoT, digital twins"><a href="https://novasapien.ai">NovaSapien — intelligence & robotics</a></td>
                                    <td title="Advanced sorting, recycling, urban mining"><a href="https://novawaste.tech">NovaWaste — recycling</a></td>
                                    <td title="Policy-as-code compliance scanning across supply chains">NovaPolicy — policy guard</td>
                                    <td title="CAD plugin that generates compliant DPPs">MaterialPassportGenerator — SaaS tool</td>
                                </tr>
                                <tr>
                                    <td title="Renewable energy, smart grids, storage"><a href="https://novaenergy.tech">NovaEnergy — power systems</a></td>
                                    <td title="Carbon capture, pollution monitoring, air quality"><a href="https://novaair.systems">NovaAir — air systems</a></td>
                                    <td title="Optimizes reverse logistics routes">NovaMobility — routing</td>
                                    <td title="Bi-directional EV charger enabling V2H/V2G">WattShareController — charger</td>
                                </tr>
                                <tr>
                                    <td title="R&D for biomaterials and new recycling tech"><a href="https://novamaterial.tech">NovaMaterial — materials lab</a></td>
                                    <td title="Reusable devices, sustainable hospital operations"><a href="https://novahealth.systems">NovaHealth — healthcare</a></td>
                                    <td title="Coordinates EV fleets to stabilize the grid">NovaEnergy — V2G coordinator</td>
                                    <td title="Urban furniture with moss filters and sensors">PureAir Station — air bench</td>
                                </tr>
                                <tr>
                                    <td title="Reverse logistics, EV fleets, take-back loops"><a href="https://novamobility.tech">NovaMobility — logistics</a></td>
                                    <td title="Circular packaging systems and deposit schemes"><a href="https://novapack.tech">NovaPack — packaging</a></td>
                                    <td title="Crawls public data for urban mining sources">NovaHub — urban miner</td>
                                    <td title="Computer-vision bin to prevent mis-sorting in hospitals">MedCycle Bin — smart bin</td>
                                </tr>
                                <tr>
                                    <td title="Shared physical infrastructure and hubs"><a href="https://novainfra.systems">NovaInfra — infra backbone</a></td>
                                    <td title="Electronics repair/refurbishment and device layer"><a href="https://novatronix.tech">NovaTronix — electronics</a></td>
                                    <td title="Anonymizes healthcare data to protect privacy">NovaHealth — privacy shield</td>
                                    <td title="Automated disassembly rig for textile preparation">ReformFabric — textile rig</td>
                                </tr>
                                <tr>
                                    <td title="Education and reskilling for green-collar workers"><a href="https://novaskills.education">NovaSkills — human capital</a></td>
                                    <td title="Green chemistry and chemical leasing models"><a href="https://novachem.tech">NovaChem — chemicals</a></td>
                                    <td title="Executes performance-based financing settlements">NovaFin — green contracts</td>
                                    <td title="Standardized toolset for repair cafes">RefurbLab Kit — repair tools</td>
                                </tr>
                                <tr>
                                    <td title="Governance standards and rulebook"><a href="https://novapolicy.global">NovaPolicy — governance</a></td>
                                    <td></td><td></td><td></td>
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
                    </div>
                </section>

                {/* Use Case Highlights (Four Levels) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>📊 Use case highlights</h2>
                    <p>
                        We demonstrate the ecosystem’s scalability and interoperability through four distinct, non‑overlapping levels: <strong> Onboarding & Control</strong>, <strong>Transactional Efficiency</strong>, <strong>Value Chain Coordination</strong>, and <strong>Systemic Transformation</strong>.<br />
                        Together these levels provide a complete view of how the Nova Ecosystem supports individual entry, simple exchanges, coordinated value chains, and complex systemic change across the circular economy.
                    </p>


                    {/* Level 1: Onboarding & Control */}
                    <h3>Level 1: Onboarding & Control (Foundational integration)</h3>
                    <p><em>Focus: onboarding, IAM, API setup, inter‑enabler/sector/worker/product integration, data aggregation, dashboards, compliance.</em></p>
                    <ul>
                        <li>[O1] User Onboarding — Individual registers and joins the ecosystem via Identity, creating a trusted profile.</li>
                        <li>[O2] API Key Generation — Developer generates API keys to integrate enabler/sector services securely.</li>
                        <li>[O3] Sustainability Dashboard — User views personal or organizational impact metrics aggregated across enablers.</li>
                        <li>[O4] Cross‑Sector Data Aggregation — DPP and LCA data ingested from multiple sectors for holistic insights.</li>
                        <li>[O5] Circular Marketplace Access — User discovers and connects to sector apps and workers through the central marketplace.</li>
                        <li>[O6] Community Governance — Contributors propose and vote on changes via NovaPolicy governance modules.</li>
                        <li>[O7] Multi‑Tenant Access Management — Organizations manage roles, teams, and permissions across apps.</li>
                        <li>[O8] Ecosystem‑Wide LCA Calculation — Automated life‑cycle assessment across products and sectors.</li>
                        <li>[O9] Urban Mining Coordination — Central app orchestrates urban mining projects across enablers and sectors.</li>
                        <li>[O10] Central Audit & Compliance Dashboard — Unified compliance and ESG dashboard spanning all enablers/sectors.</li>
                    </ul>


                    {/* Level 2: Easy (Transactional Efficiency) */}
                    <h3>Level 2: Easy (Transactional efficiency)</h3>
                    <p><em>Focus: simple, low‑friction transactions involving 1–2 stakeholders.</em></p>
                    <ul>
                        <li>[E1] The Waste Match — Bakery waste matched with a local insect farm via NovaHub.</li>
                        <li>[E2] Green Tutor — Circular design tutoring booked on NovaSkills, paid via NovaFin.</li>
                        <li>[E3] Ride to Factory — BMW employees carpool using NovaMobility, micro‑pay via NovaFin.</li>
                        <li>[E4] Citizen Sensor — River water testing uploaded via NovaWater; verified by NovaBalance.</li>
                        <li>[E5] Material Scout — Architect catalogs reusable bricks using AI vision; passported in NovaMaterial.</li>
                        <li>[E6] Ugly Veggie Box — Farm lists imperfect produce for direct sale on NovaMarkets.</li>
                        <li>[E7] Solar Log — Homeowner logs daily green energy with NovaEnergy; impact in NovaBalance.</li>
                        <li>[E8] Device Return — Clinic requests pickup via NovaHealth & NovaWaste.</li>
                        <li>[E9] Pollen Alert — Hyper‑local air quality notifications via NovaAir & NovaSapien.</li>
                        <li>[E10] Universal Bowl — Reusable takeout tracked by Identity; reverse logistics via NovaMobility.</li>
                    </ul>

                    {/* Level 3: Medium (Value Chain Coordination) */}
                    <h3>Level 3: Medium (Value chain coordination)</h3>
                    <p><em>Focus: B2B transactions, multi‑stakeholder coordination, compliance checks, simple audits.</em></p>
                    <ul>
                        <li>[M1] Startup Funding — NovaHub matches capital, mentorship, lab space.</li>
                        <li>[M2] Furniture Loop — Siemens chairs reused by Munich Re; logistics via NovaMobility.</li>
                        <li>[M3] Compliance Check — Textile importer certs validated by NovaPolicy + NovaSapien.</li>
                        <li>[M4] Smart Bin Route — Route optimization via NovaMobility & NovaSapien.</li>
                        <li>[M5] Fair Wage Audit — Split payments via NovaFin; NovaEquity badge on confirmation.</li>
                        <li>[M6] V2G Balancing — EV fleet sells capacity via NovaEnergy; settlement via NovaFin.</li>
                        <li>[M7] Plastic Passport — DPP for rPET via NovaMaterial & NovaPolicy.</li>
                        <li>[M8] Greywater Share — Data center heat/greywater to greenhouse via NovaInfra; audited in NovaBalance.</li>
                        <li>[M9] Corporate Refurb — Bank laptops refurbished, data‑wipe certified; resale via NovaMarkets.</li>
                        <li>[M10] Solvent Lease — Filtration via NovaWater; QA via NovaSapien.</li>
                    </ul>

                    {/* Level 4: Complex (Systemic Transformation) */}
                    <h3>Level 4: Complex (Systemic transformation)</h3>
                    <p><em>Focus: system‑of‑systems, real‑time AI optimization, policy‑as‑code, cross‑border compliance.</em></p>
                    <ul>
                        <li>[H1] City Challenge — Munich consortium (Agro, Waste, Logistics), grants via NovaFin, governance via NovaPolicy.</li>
                        <li>[H2] Building‑as‑Bank — Assets tracked for futures; LCA via NovaBalance; listing via NovaMarkets.</li>
                        <li>[H3] Fiber‑to‑Fiber — AI sorting via NovaSapien; chemical recycling via NovaMaterial; logistics via NovaMobility.</li>
                        <li>[H4] Circular Hospital — Pay‑per‑scan leasing via NovaFin; sterilization hub via NovaInfra.</li>
                        <li>[H5] Automated Carbon Trading — Sensors verify capture; credits via NovaMarkets; community dividend via NovaEquity.</li>
                        <li>[H6] Autonomous Logistics — DurasAGV swarm coordinated by NovaSapien; charging via NovaEnergy.</li>
                        <li>[H7] Algorithmic Governance — EU laws as code; gatekeeping via NovaMarkets; Identity and NovaMaterial compliance.</li>
                        <li>[H8] Urban Air Twin — Dynamic toll pricing via NovaFin; pollution data via NovaAir.</li>
                        <li>[H9] Global Green Corps — Remote ops via NovaInfra; fair pay audited via NovaEquity.</li>
                        <li>[H10] City‑Wide Loop — Unified cup deposit; washing via NovaWater; logistics via NovaMobility.</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}>
                        <Link to="/docs/usecases">👉 Explore the full elaboration of the use case matrix</Link>
                    </p>
                </section>

                {/* Optional: NovaHub Deep Dive (End-to-End Journey) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🧩 NovaHub deep dive</h2>
                    <p>
                        NovaHub is the Collaboration Engine — the “Project Wizard” where members post Needs, Offers, or Complex Problems.
                        It uses NovaSapien to decompose challenges into atomic steps and matchmake partners across the ecosystem.
                    </p>
                    <p>
                        Example journey: “Develop a new organic paint.” NovaHub breaks this into R&D, sourcing, compliance, and funding.
                        It scans the ecosystem (NovaMaterial, NovaPolicy, NovaFin) and assembles a plan with partners, budgets, and
                        compliance artifacts — delivering an end‑to‑end, auditable project flow.
                    </p>
                </section>

                {/* Collaboration & Legal */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🤝 Collaboration & legal</h2>
                    <p>
                        Contributions are governed by our <a href="https://github.com/nova-ecosystem/.github/blob/main/CONTRIBUTING.md">Contribution Guide</a> and
                        <a href="https://github.com/nova-ecosystem/.github/blob/main/CODE_OF_CONDUCT.md"> Code of Conduct</a>. Sponsorship agreements are managed via
                        <a href="https://circular.engineering"> Circular Engineering Nova GmbH</a>.
                    </p>
                </section>

                {/* Blog */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>📰 Latest updates</h2>
                    <p>
                        Check our <Link to="/blog">Blog</Link> for news, releases, and ecosystem stories.
                    </p>
                </section>
            </main>
        </Layout>
    );
}