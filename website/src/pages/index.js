import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
    return (
        <Layout
            title="NovaEco"
            description="Open-source Digital Public Infrastructure for the circular economy"
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
                        <strong>NovaEco</strong> is the open‑source <strong>Digital Public Infrastructure</strong> for the circular economy.
                        It connects individuals and siloed sectors to <strong>foster innovation</strong>, measure impact, and <strong>collaborate</strong> within a federated system-of-systems.
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


                {/* Four-column Ecosystem Table */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🔎 Ecosystem overview</h2>
                    <p>
                        The ecosystem is anchored by <strong>four core services</strong> that provide unified identity, orchestration, and access management:
                    </p>
                    <ul>
                        <li><strong><a href="https://app.novaeco.tech">App</a></strong> — Mission Control for onboarding, discovery, and ecosystem management.</li>
                        <li><strong><a href="https://auth.novaeco.tech">Identity</a></strong> — Digital Passport & Trust Profile for unified login.</li>
                        <li><strong><a href="https://api.novaeco.tech">Gateway</a></strong> — API gateway for secure, managed access to all services.</li>
                        <li><strong><Link to="/docs/intro">Docs</Link></strong> — Comprehensive documentation hub for architecture, use cases, and developer guides.</li>
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
                                    <td title="Environmental audit engine"><a href="https://balance.novaeco.tech">NovaBalance</a></td>
                                    <td title="Regenerative agriculture"><a href="https://agriculture.novaeco.tech">NovaAgro</a></td>
                                    <td title="Calculates real-time environmental impact">LCACalc</td>
                                    <td title="Autonomous agricultural robot">DurasAGV</td>
                                </tr>
                                <tr>
                                    <td title="Social audit engine"><a href="https://equity.novaeco.tech">NovaEquity</a></td>
                                    <td title="Air quality monitoring"><a href="https://air.novaeco.tech">NovaAir</a></td>
                                    <td title="Ingests air quality sensor data">Quality</td>
                                    <td title="Innovation engine">NovaLab</td>
                                </tr>
                                <tr>
                                    <td title="Ledger for payments and ESG"><a href="https://finance.novaeco.tech">NovaFin</a></td>
                                    <td title="Construction lifecycles"><a href="https://build.novaeco.tech">NovaBuild</a></td>
                                    <td title="Batches ledger transactions">TradeSettlement</td>
                                    <td title="E-commerce resale plugin">RetailLoop</td>
                                </tr>
                                <tr>
                                    <td title="IoT registry and fleet command"><a href="https://infrastructure.novaeco.tech">NovaInfra</a></td>
                                    <td title="Chemical leasing"><a href="https://chemicals.novaeco.tech">NovaChem</a></td>
                                    <td title="Processes raw telemetry">IoTIngest</td>
                                    <td title="City waste dashboard">UrbanMiner</td>
                                </tr>
                                <tr>
                                    <td title="Logistics optimization"><a href="https://logistics.novaeco.tech">NovaLogistics</a></td>
                                    <td title="Renewable grid balancing"><a href="https://energy.novaeco.tech">NovaEnergy</a></td>
                                    <td title="Identifies species from audio">Bioacoustics</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td title="Digital Product Passports"><a href="https://materials.novaeco.tech">NovaMaterial</a></td>
                                    <td title="Distributed manufacturing"><a href="https://make.novaeco.tech">NovaMake</a></td>
                                    <td title="Verifies 3D printability">SlicerCheck</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td title="Shared AI models"><a href="https://mind.novaeco.tech">NovaMind</a></td>
                                    <td title="Biodiversity monitoring"><a href="https://nature.novaeco.tech">NovaNature</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td title="Policy-as-Code engine"><a href="https://policy.novaeco.tech">NovaPolicy</a></td>
                                    <td title="Reusable packaging"><a href="https://packaging.novaeco.tech">NovaPack</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td title="Labor verification"><a href="https://skills.novaeco.tech">NovaSkills</a></td>
                                    <td title="Recycling management"><a href="https://recycling.novaeco.tech">NovaRecycle</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td title="Circular marketplace"><a href="https://trade.novaeco.tech">NovaTrade</a></td>
                                    <td title="Product-as-a-Service"><a href="https://retail.novaeco.tech">NovaRetail</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td title="E-waste management"><a href="https://electronics.novaeco.tech">NovaTronix</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td title="Circular fashion"><a href="https://textiles.novaeco.tech">NovaTextile</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td title="Water management"><a href="https://water.novaeco.tech">NovaWater</a></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: '0.5rem', color: '#666' }}>
                            Note: This table represents the core pillars of the ecosystem. See documentation for full details.
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
                        <li><Link to="/docs/usecases/level-1-onboarding#o1-the-citizen-passport">[O1] The Citizen Passport</Link> — Resident registers via auth to access city recycling services.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o2-the-corporate-kyc">[O2] The Corporate KYC</Link> — Textile factory uploads ISO 14001 certs to NovaSkills.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o3-sensor-enrollment">[O3] Sensor Enrollment</Link> — Technician scans QR code to register air monitor in NovaInfra.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o4-material-declaration">[O4] Material Declaration</Link> — Supplier defines "Bio-Solvent" SKU in NovaMaterial.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o5-the-innovation-profile">[O5] The Innovation Profile</Link> — Startup creates profile in NovaLab to find funding.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o6-wallet-creation">[O6] Wallet Creation</Link> — Farm instantiates NovaTrade wallet for carbon payments.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o7-printer-capability">[O7] Printer Capability</Link> — FabLab registers 3D printer specs in NovaMake.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o8-retailer-plugin">[O8] Retailer Plugin</Link> — Shop installs RetailLoop for "One-Click Resale".</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o9-vehicle-registration">[O9] Vehicle Registration</Link> — Logistics firm adds electric van to NovaLogistics.</li>
                        <li><Link to="/docs/usecases/level-1-onboarding#o10-developer-access">[O10] Developer Access</Link> — Dev generates API Key in Gateway for custom app.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-1-onboarding">Level 1: Onboarding & Control</Link>
                    </p>

                    {/* Level 2: Easy (Transactional Efficiency) */}
                    <h3>Level 2: Easy (Transactional efficiency)</h3>
                    <p><em>Focus: simple, low‑friction transactions involving 1–2 stakeholders.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-2-easy#e1-the-waste-match">[E1] The Waste Match</Link> — Bakery lists coffee grounds on NovaTrade.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e2-print-job-request">[E2] Print Job Request</Link> — User uploads STL to NovaMake; SlicerCheck verifies.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e3-water-quality-alert">[E3] Water Quality Alert</Link> — NovaWater detects pH drop and alerts city.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e4-phone-repair-log">[E4] Phone Repair Log</Link> — Technician logs battery swap in NovaTronix.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e5-carbon-credit-buy">[E5] Carbon Credit Buy</Link> — Office buys nature credits via NovaTrade.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e6-the-crop-scan">[E6] The Crop Scan</Link> — DurasAGV scans field; NovaMind finds nitrogen deficiency.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e7-smart-bin-pickup">[E7] Smart Bin Pickup</Link> — Bin reports full; NovaRecycle requests pickup.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e8-tutor-booking">[E8] Tutor Booking</Link> — Student books circular design expert on NovaSkills.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e9-return-initiation">[E9] Return Initiation</Link> — Consumer clicks return on rented jacket via RetailLoop.</li>
                        <li><Link to="/docs/usecases/level-2-easy#e10-compliance-check">[E10] Compliance Check</Link> — NovaPolicy checks toy BOM against restricted list.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-2-easy">Level 2: Easy (Transactional Efficiency)</Link>
                    </p>

                    {/* Level 3: Medium (Value Chain Coordination) */}
                    <h3>Level 3: Medium (Value chain coordination)</h3>
                    <p><em>Focus: B2B transactions, multi‑stakeholder coordination, compliance checks, simple audits.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-3-medium#m1-the-circular-loop">[M1] The Circular Loop</Link> — NovaLab matches demolition site with road paver.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m2-fair-wage-audit">[M2] Fair Wage Audit</Link> — NovaFin payment triggers NovaEquity worker survey.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m3-grid-balancing">[M3] Grid Balancing</Link> — NovaEnergy commands NovaLogistics chargers to pause.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m4-lca-calculation">[M4] LCA Calculation</Link> — LCACalc recalculates footprint on material change.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m5-reverse-logistics">[M5] Reverse Logistics</Link> — NovaRetail batches returns; NovaLogistics optimizes route.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m6-biodiversity-audit">[M6] Biodiversity Audit</Link> — Bioacoustics worker verifies bird return for credit payout.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m7-chemical-leasing">[M7] Chemical Leasing</Link> — Car plant pays for degreasing service via NovaChem.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m8-urban-mining-map">[M8] Urban Mining Map</Link> — UrbanMiner aggregates city copper stock data.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m9-textile-sorting">[M9] Textile Sorting</Link> — Robot uses NovaMind vision to sort clothes by fiber.</li>
                        <li><Link to="/docs/usecases/level-3-medium#m10-green-concrete">[M10] Green Concrete</Link> — NovaBuild logs captured carbon in beam passport.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-3-medium">Level 3: Medium (Value Chain Coordination)</Link>
                    </p>

                    {/* Level 4: Complex (Systemic Transformation) */}
                    <h3>Level 4: Complex (Systemic transformation)</h3>
                    <p><em>Focus: system‑of‑systems, real‑time AI optimization, policy‑as‑code, cross‑border compliance.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/level-4-complex#c1-fiber-to-fiber">[C1] Fiber-to-Fiber</Link> — Old shirts collected, sorted, and recycled into new yarn.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c2-the-innovation-lab">[C2] The Innovation Lab</Link> — NovaLab guides startup through permits and funding.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c3-disaster-relief">[C3] Disaster Relief</Link> — NovaWater drought detection triggers insurance payout.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c4-automated-factory">[C4] Automated Factory</Link> — NovaMake order triggers AI optimization and printing.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c5-the-circular-hospital">[C5] The Circular Hospital</Link> — MRI leasing, renewable power, and magnet recovery.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c6-global-supply-chain">[C6] Global Supply Chain</Link> — Battery moves through borders with automated compliance.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c7-city-wide-loop">[C7] City-Wide Loop</Link> — UrbanMiner dashboard shows real-time city circularity.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c8-regenerative-beef">[C8] Regenerative Beef</Link> — Cattle grazing sequester carbon; farmers paid credits.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c9-building-as-bank">[C9] Building-as-Bank</Link> — Building materials tracked and traded as futures.</li>
                        <li><Link to="/docs/usecases/level-4-complex#c10-e-waste-mining">[C10] E-Waste Mining</Link> — Robots desolder valuable chips from old boards.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Explore the full elaboration of the use case matrix for <Link to="/docs/usecases/level-4-complex">Level 4: Complex (Systemic Transformation)</Link>
                    </p>
                </section>

                {/* Collaboration & Legal */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>🤝 Collaboration & legal</h2>
                    <p>
                        Contributions are governed by our <a href="https://github.com/novaeco-tech/.github/blob/main/CONTRIBUTING.md">Contribution Guide</a> and
                        <a href="https://github.com/novaeco-tech/.github/blob/main/CODE_OF_CONDUCT.md"> Code of Conduct</a>. Sponsorship agreements are managed via
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