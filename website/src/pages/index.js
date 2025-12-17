import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
    // Helper style for the tooltip trigger
    const tooltipStyle = {
        cursor: 'help',
        borderBottom: '1px dotted #999',
        display: 'inline-block'
    };

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
                            to="https://admin.novaeco.tech"
                            style={{ marginLeft: '0.75rem' }}
                        >
                            Launch Admin
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
                        <li><strong><a href="https://api.novaeco.tech">Gateway</a></strong> — Multiplexed API gateway (REST/gRPC) for secure access.</li>
                        <li><strong><a href="https://auth.novaeco.tech">Auth</a></strong> — Internal Token Verifier & Trust Anchor.</li>
                        <li><strong><a href="https://id.novaeco.tech">Identity</a></strong> — Public Identity Provider (Keycloak) & SSO.</li>
                        <li><strong><Link to="/docs/intro">Docs</Link></strong> — Comprehensive documentation hub and knowledge base.</li>
                    </ul>
                    <p>
                        It is designed as a <strong>System‑of‑Systems</strong>: interconnected <strong>Horizontal Enablers</strong>, <strong>Vertical Sectors</strong>, <strong>Workers</strong>, and <strong>Products</strong>. <br />
                        <small><em>(Hover over descriptions for full details)</em></small>
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
                                {/* Row 1 */}
                                <tr>
                                    <td><a href="https://admin.novaeco.tech">NovaAdmin</a> <small style={tooltipStyle} title="Mission Control dashboard for onboarding, discovery, and ecosystem management.">Mission Control</small></td>
                                    <td><a href="https://agriculture.novaeco.tech">NovaAgro</a> <small style={tooltipStyle} title="Regenerative agriculture management and sustainable food system tracking.">Regen-Ag & Food</small></td>
                                    <td><a href="https://lca.balance.novaeco.tech">LCACalc</a> <small style={tooltipStyle} title="Calculates real-time environmental impact from material BOMs.">Real-time Impact Calc</small></td>
                                    <td><a href="https://duras-agv.novaeco.tech">DurasAGV</a> <small style={tooltipStyle} title="Autonomous agricultural robot for regenerative farming tasks.">Auto-Farming Robot</small></td>
                                </tr>
                                {/* Row 2 */}
                                <tr>
                                    <td><a href="https://balance.novaeco.tech">NovaBalance</a> <small style={tooltipStyle} title="Environmental audit engine tracking carbon, water, and mass flows.">Tracks Carbon, Water</small></td>
                                    <td><a href="https://air.novaeco.tech">NovaAir</a> <small style={tooltipStyle} title="Air quality monitoring and carbon capture credit verification.">Quality & Carbon Credits</small></td>
                                    <td><a href="https://quality.air.novaeco.tech">Quality</a> <small style={tooltipStyle} title="Ingests and normalizes data from air quality sensors.">Sensor Data Normalizer</small></td>
                                    <td><a href="https://lab.novaeco.tech">NovaLab</a> <small style={tooltipStyle} title="Innovation engine for designing and launching circular projects.">Circular Project Launchpad</small></td>
                                </tr>
                                {/* Row 3 */}
                                <tr>
                                    <td><a href="https://equity.novaeco.tech">NovaEquity</a> <small style={tooltipStyle} title="Social audit engine tracking fair wages and labor rights.">Fair Wage & Rights</small></td>
                                    <td><a href="https://build.novaeco.tech">NovaBuild</a> <small style={tooltipStyle} title="Management of construction lifecycles and material banks.">Construction & Materials</small></td>
                                    <td><a href="https://settle.finance.novaeco.tech">TradeSettlement</a> <small style={tooltipStyle} title="Asynchronously batches and commits transactions to the ledger.">Batch Ledger Commits</small></td>
                                    <td><a href="https://retail-loop.novaeco.tech">RetailLoop</a> <small style={tooltipStyle} title="E-commerce plugin for resale and product take-back.">Resale & Take-back Plugin</small></td>
                                </tr>
                                {/* Row 4 */}
                                <tr>
                                    <td><a href="https://finance.novaeco.tech">NovaFin</a> <small style={tooltipStyle} title="Ledger for payments, staking, and ESG token settlements.">Payments & ESG Ledger</small></td>
                                    <td><a href="https://chemicals.novaeco.tech">NovaChem</a> <small style={tooltipStyle} title="Chemical leasing models and hazardous material tracking.">Leasing & Hazmat</small></td>
                                    <td><a href="https://ingest.infrastructure.novaeco.tech">IoTIngest</a> <small style={tooltipStyle} title="High-throughput processor for raw telemetry from sensors.">Raw Telemetry Processor</small></td>
                                    <td><a href="https://urban-miner.novaeco.tech">UrbanMiner</a> <small style={tooltipStyle} title="Dashboard for city councils to map municipal waste streams.">City Waste Mapper</small></td>
                                </tr>
                                {/* Row 5 */}
                                <tr>
                                    <td><a href="https://infrastructure.novaeco.tech">NovaInfra</a> <small style={tooltipStyle} title="Registry for IoT devices and fleet management command.">IoT Fleet Registry</small></td>
                                    <td><a href="https://energy.novaeco.tech">NovaEnergy</a> <small style={tooltipStyle} title="Renewable grid balancing and vehicle-to-grid energy coordination.">Grid & V2G Balance</small></td>
                                    <td><a href="https://bio.nature.novaeco.tech">Bioacoustics</a> <small style={tooltipStyle} title="Identifies species from audio streams using AI models.">AI Species ID</small></td>
                                    <td><a href="https://slicer.make.novaeco.tech">SlicerCheck</a> <small style={tooltipStyle} title="Verifies 3D model printability for manufacturing jobs.">Printability Verification</small></td>
                                </tr>
                                {/* Row 6 */}
                                <tr>
                                    <td><a href="https://logistics.novaeco.tech">NovaLogistics</a> <small style={tooltipStyle} title="Optimization engine for reverse logistics and circular transport.">Reverse Logistics</small></td>
                                    <td><a href="https://make.novaeco.tech">NovaMake</a> <small style={tooltipStyle} title="Distributed manufacturing via 3D printing and CNC networks.">Distributed 3D/CNC</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 7 */}
                                <tr>
                                    <td><a href="https://materials.novaeco.tech">NovaMaterial</a> <small style={tooltipStyle} title="Engine for Digital Product Passports and material lineage.">Passports & Lineage</small></td>
                                    <td><a href="https://nature.novaeco.tech">NovaNature</a> <small style={tooltipStyle} title="Biodiversity monitoring and reforestation project management.">Biodiversity & Forests</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 8 */}
                                <tr>
                                    <td><a href="https://mind.novaeco.tech">NovaMind</a> <small style={tooltipStyle} title="Shared AI models and inference engine for all sectors.">Shared AI Inference</small></td>
                                    <td><a href="https://packaging.novaeco.tech">NovaPack</a> <small style={tooltipStyle} title="Reusable packaging systems and deposit return schemes.">Reuse & Deposit</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 9 */}
                                <tr>
                                    <td><a href="https://policy.novaeco.tech">NovaPolicy</a> <small style={tooltipStyle} title="Policy-as-Code engine for automated regulatory compliance checks.">Automated Compliance</small></td>
                                    <td><a href="https://recycling.novaeco.tech">NovaRecycle</a> <small style={tooltipStyle} title="Management of recycling centers and urban mining recovery.">Centers & Recovery</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 10 */}
                                <tr>
                                    <td><a href="https://skills.novaeco.tech">NovaSkills</a> <small style={tooltipStyle} title="Verification system for human labor certifications and degrees.">Labor & Verification</small></td>
                                    <td><a href="https://retail.novaeco.tech">NovaRetail</a> <small style={tooltipStyle} title="Product-as-a-Service management and consumer take-back schemes.">PaaS & Take-back</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 11 */}
                                <tr>
                                    <td><a href="https://trade.novaeco.tech">NovaTrade</a> <small style={tooltipStyle} title="Marketplace for matching orders and discovering circular assets.">Asset Marketplace</small></td>
                                    <td><a href="https://electronics.novaeco.tech">NovaTronix</a> <small style={tooltipStyle} title="E-waste management and electronics repair documentation.">E-Waste & Repair</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 12 */}
                                <tr>
                                    <td></td>
                                    <td><a href="https://textiles.novaeco.tech">NovaTextile</a> <small style={tooltipStyle} title="Circular fashion management and fiber-to-fiber recycling loops.">Fashion & Fiber Loops</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* Row 13 */}
                                <tr>
                                    <td></td>
                                    <td><a href="https://water.novaeco.tech">NovaWater</a> <small style={tooltipStyle} title="Management of industrial water cycles and treatment systems.">Industrial Water Cycles</small></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            👉 Explore the full <Link to="/docs/architecture/overview">Architecture Overview</Link> for detailed descriptions and interactions.
                        </p>
                    </div>
                </section>

                {/* Use Case Highlights (Four Tiers) */}
                <section style={{ padding: '2rem 4rem' }}>
                    <h2>📊 Use case highlights</h2>
                    <p>
                        We demonstrate scalability through four tiers: <strong>Onboarding</strong>, <strong>Efficiency</strong>, <strong>Coordination</strong>, and <strong>Transformation</strong>.
                    </p>
                    
                    
                    <h3>Tier 1: Onboarding And Control (Foundational integration)</h3>
                    <p><em>Focus: onboarding, IAM, API setup, integration.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o1-the-citizen-passport">[O1] The Citizen Passport</Link> — <span style={tooltipStyle} title="Residents securely register using NovaAuth to gain unified, single-sign-on access to municipal recycling centers and smart bins, while simultaneously tracking their personal waste reduction impact to earn civic rewards and potential local tax deductions based on verified sustainable behaviors.">Unified Resident Digital Identity Granting Secure Access to City Recycling Services</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o2-the-corporate-kyc">[O2] The Corporate KYC</Link> — <span style={tooltipStyle} title="A textile manufacturing facility digitally uploads valid ISO 14001 certifications directly to the NovaSkills registry to establish a trusted corporate identity, automatically passing Know-Your-Business verification checks required to bid on government contracts and participate in the regulated circular supply chain.">Textile Factory Establishs Trusted Status by Uploading Verified ISO Certifications</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o3-sensor-enrollment">[O3] Sensor Enrollment</Link> — <span style={tooltipStyle} title="Field technicians scan a cryptographically secure QR code to instantly register an air quality monitor into the NovaInfra registry, establishing immutable device identity, ownership provenance, and the authorized data streams required for the sensor to begin broadcasting telemetry to the network.">Technician Rapidly Enrolls IoT Sensor Identity via Secure QR Code Scanning</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o4-material-declaration">[O4] Material Declaration</Link> — <span style={tooltipStyle} title="Chemical suppliers introduce a new Bio-Solvent SKU into NovaMaterial, meticulously defining its chemical composition, safety data sheets (SDS), and environmental attributes to ensure downstream manufacturers have instant access to compliance data and handling instructions within the Digital Product Passport.">Supplier Formally Declares New Bio-Solvent Material Properties and Safety Data</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o5-the-innovation-profile">[O5] The Innovation Profile</Link> — <span style={tooltipStyle} title="An eco-innovation startup creates a verified NovaLab profile to showcase their specific technology readiness level (TRL) and impact metrics, using this trusted data to attract impact investment, secure government grants, and find pilot partners within the federated ecosystem.">Green Startup Builds Verified Profile to Attract Circular Funding and Grants</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o6-wallet-creation">[O6] Wallet Creation</Link> — <span style={tooltipStyle} title="Agricultural operators instantiate a secure, multi-signature NovaTrade wallet to receive automated, smart-contract-based payments for sequestered carbon and ecosystem services, ensuring financial transparency and immediate settlement once soil sensors verify the environmental impact.">Regenerative Farm Initializes Secure Wallet for Automated Carbon Credit Payments</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o7-printer-capability">[O7] Printer Capability</Link> — <span style={tooltipStyle} title="A local fabrication laboratory logs the specific technical capabilities, nozzle sizes, and material compatibilities of their 3D printers into NovaMake, allowing the machine to be discovered and automatically booked for distributed manufacturing jobs that match its precise hardware profile.">FabLab Registers 3D Printer Specs and Capabilities for Distributed Manufacturing</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o8-retailer-plugin">[O8] Retailer Plugin</Link> — <span style={tooltipStyle} title="Fashion retailers integrate the RetailLoop plugin into their e-commerce storefronts to instantly enable 'one-click resale' options for customers, automatically connecting past purchase history to the circular marketplace and generating digital twins for items entering the second-hand economy.">Retail Shop Installs Plugin for One-Click Resale and Inventory Connection</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o9-vehicle-registration">[O9] Vehicle Registration</Link> — <span style={tooltipStyle} title="A transport company registers their electric delivery vans into NovaLogistics, defining specific cargo capacity, battery range, and charging speeds, enabling the system to prioritize their fleet for zero-emission delivery routes and urban low-emission zone access.">Logistics Firm Onboards Electric Fleet Details for Zero-Emission Delivery Routing</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o10-developer-access">[O10] Developer Access</Link> — <span style={tooltipStyle} title="Third-party developers provision secure, scoped API keys through the Gateway to build custom circular economy applications, dashboards, or integrations on top of NovaEco infrastructure, granting them controlled access to specific data streams and orchestration capabilities.">Developer Generates Secure API Keys for Building Custom Circular Applications</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o11-legacy-erp-link">[O11] Legacy ERP Link</Link> — <span style={tooltipStyle} title="Manufacturing plants bridge their existing, on-premise SAP or Oracle ERP systems with the NovaEco Gateway to automate data synchronization regarding inventory and production, allowing them to participate in the ecosystem without the cost and disruption of replacing legacy software.">Factory Connects Legacy ERP System to NovaEco Gateway for Sync</span></li>
                        <li><Link to="/docs/usecases/tier-1-onboarding-and-control#o12-biogas-cert-upload">[O12] Biogas Cert Upload</Link> — <span style={tooltipStyle} title="Biogas facilities upload verified renewable energy certificates (RECs) and production logs to NovaEnergy, proving the origin and sustainability of their green gas production, which allows them to trade premium energy credits on the open market.">Energy Producer Uploads Green Gas Certification Documents for Renewable Verification</span></li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Full matrix: <Link to="/docs/usecases/tier-1-onboarding-and-control">Tier 1: Onboarding And Control</Link>
                    </p>

                    <h3>Tier 2: Transactional Efficiency</h3>
                    <p><em>Focus: simple, low‑friction transactions.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t1-the-waste-match">[T1] The Waste Match</Link> — <span style={tooltipStyle} title="A local bakery lists surplus organic coffee grounds on the NovaTrade marketplace, making them immediately available for mushroom farmers or composters to collect, thereby diverting waste from landfills and creating a new value stream for a byproduct.">Bakery Lists Excess Coffee Grounds for Local Trade and Reuse</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t2-print-job-request">[T2] Print Job Request</Link> — <span style={tooltipStyle} title="A maker uploads a 3D model (STL) to NovaMake, where SlicerCheck algorithms automatically analyze the file to verify structural integrity, wall thickness, and printability, ensuring the distributed manufacturing job will succeed before production begins.">User Uploads STL File for Automated Print Verification and Analysis</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t3-water-quality-alert">[T3] Water Quality Alert</Link> — <span style={tooltipStyle} title="NovaWater IoT sensors identify a sudden, anomalous drop in pH levels in the industrial output, triggering immediate automated alerts to city management and the factory floor to prevent contamination of the municipal water supply.">System Detects Critical Drop in Water pH and Alerts Staff</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t4-phone-repair-log">[T4] Phone Repair Log</Link> — <span style={tooltipStyle} title="Repair specialists record the specific battery serial number swap in NovaTronix, updating the device's immutable digital history to reflect the extended lifespan and validating the repair for future warranty or resale value.">Technician Logs Smartphone Battery Replacement in Digital Product History</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t5-carbon-credit-buy">[T5] Carbon Credit Buy</Link> — <span style={tooltipStyle} title="A corporate sustainability officer purchases verified, tokenized nature restoration credits directly through NovaTrade to offset operational residual emissions, ensuring full transparency and traceability of where the funds are allocated.">Corporate Office Purchases Verified Nature Credits via Circular Marketplace</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t6-the-crop-scan">[T6] The Crop Scan</Link> — <span style={tooltipStyle} title="The DurasAGV robot patrols fields using advanced spectral cameras, sending data to the NovaMind inference engine to detect specific nitrogen deficiencies in real-time, allowing for precision fertilizer application rather than blanket spraying.">Autonomous Robot Scans Crops to Diagnose Nitrogen Deficiency via AI</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t7-smart-bin-pickup">[T7] Smart Bin Pickup</Link> — <span style={tooltipStyle} title="IoT-enabled public waste bins transmit real-time volume data to NovaRecycle, automatically triggering a pickup request only when the container reaches capacity, optimizing fleet fuel usage and reducing unnecessary collection trips.">Smart Bin Automatically Requests Pickup Only When Capacity Is Reached</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t8-tutor-booking">[T8] Tutor Booking</Link> — <span style={tooltipStyle} title="A university student browses the NovaSkills directory to find and book a one-on-one mentorship session with a verified expert in circular product design, facilitating knowledge transfer and specialized education.">Student Books Mentorship Session with Circular Product Design Expert</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t9-return-initiation">[T9] Return Initiation</Link> — <span style={tooltipStyle} title="A customer uses the RetailLoop consumer interface to signal the end of a rental period for a garment, instantly generating a pre-paid return shipping label and notifying the warehouse to expect the item.">Consumer Initiates Return for Rented Jacket via Retail Loop App</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t10-compliance-check">[T10] Compliance Check</Link> — <span style={tooltipStyle} title="The NovaPolicy engine automatically scans the digital Bill of Materials (BOM) for a new toy design against global restricted substance lists (e.g., REACH, RoHS) to ensure safety compliance before manufacturing begins.">Policy Engine Checks Toy Materials Against Global Safety Restricted Lists</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t11-tool-share-rent">[T11] Tool Share Rent</Link> — <span style={tooltipStyle} title="Residents utilize the NovaRetail peer-to-peer sharing interface to borrow a high-quality power drill from a neighbor for a short duration, significantly reducing the need for new tool purchases and fostering community resource efficiency.">Neighbor Rents Power Drill via Peer-to-Peer Sharing Network Application</span></li>
                        <li><Link to="/docs/usecases/tier-2-transactional-efficiency#t12-compost-drop-off">[T12] Compost Drop-off</Link> — <span style={tooltipStyle} title="A community member scans a location-specific QR code at the local garden compost site to log their organic waste contribution, earning verified eco-credits that can be redeemed for local services or goods.">Resident Logs Community Compost Drop-off to Earn Verified Rewards</span></li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Full matrix: <Link to="/docs/usecases/tier-2-transactional-efficiency">Tier 2: Transactional Efficiency</Link>
                    </p>

                    <h3>Tier 3: Value Chain C1oordination</h3>
                    <p><em>Focus: B2B coordination and simple audits.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c1-the-circular-loop">[C1] The Circular Loop</Link> — <span style={tooltipStyle} title="NovaLab matching algorithms identify available crushed concrete from a registered demolition site and automatically pair it with a nearby road paving project that requires aggregate material, closing the construction waste loop locally.">Matching Demolition Debris with Road Paving Projects for Local Reuse</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c2-fair-wage-audit">[C2] Fair Wage Audit</Link> — <span style={tooltipStyle} title="The release of supply chain funds via NovaFin automatically triggers a NovaEquity SMS survey to workers' phones, cryptographically verifying that they received their fair share of wages before the next payment tranche is unlocked.">Payment Release Triggers Automated Fair Wage Verification Survey to Workers</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c3-grid-balancing">[C3] Grid Balancing</Link> — <span style={tooltipStyle} title="During peak electricity demand hours, the NovaEnergy grid balancing engine sends a signal to NovaLogistics to temporarily pause charging for parked EV fleets, acting as a virtual power plant to stabilize the grid.">Grid Balancing Engine Pauses Electric Fleet Charging During Peak Demand</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c4-lca-calculation">[C4] LCA Calculation</Link> — <span style={tooltipStyle} title="When a product designer swaps a material in the digital BOM, LCACalc immediately recalculates the total environmental impact score based on the new specifications, allowing for real-time eco-design optimization decisions.">Engine Recalculates Carbon Footprint Instantly Upon Material BOM Change</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c5-reverse-logistics">[C5] Reverse Logistics</Link> — <span style={tooltipStyle} title="NovaRetail aggregates multiple consumer returns into a single regional batch, while NovaLogistics calculates the most fuel-efficient route for collection vehicles to pick up the consolidated goods, reducing carbon emissions from reverse logistics.">Optimizing Collection Routes for Batched Retail Return Logistics Efficiency</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c6-biodiversity-audit">[C6] Biodiversity Audit</Link> — <span style={tooltipStyle} title="Deployed Bioacoustics microphones capture forest soundscapes, which are analyzed by AI models to confirm the return of specific indicator bird species, triggering the unlocking of conditional biodiversity credit payments to the landowner.">Audio Analysis Verifies Bird Species Return to Unlock Biodiversity Credits</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c7-chemical-leasing">[C7] Chemical Leasing</Link> — <span style={tooltipStyle} title="Instead of buying solvents as a consumable, a car factory pays a monthly service fee via NovaChem for degreasing performance, incentivizing the supplier to recover and recycle the chemicals rather than selling more volume.">Automotive Plant Pays for Chemical Degreasing Service Instead of Solvent</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c8-urban-mining-map">[C8] Urban Mining Map</Link> — <span style={tooltipStyle} title="UrbanMiner pulls data from various demolition permits and infrastructure databases to create a visual heat map of available copper resources embedded within the city, guiding urban mining and material recovery efforts.">Aggregating Data to Map City-Wide Copper Stocks for Urban Mining</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c9-textile-sorting">[C9] Textile Sorting</Link> — <span style={tooltipStyle} title="An industrial sorting robot utilizes NovaMind computer vision to identify garment fabric types at high speed and automatically diverts them into pure fiber streams (e.g., 100% cotton vs. poly-blends) for effective recycling.">Robotic System Sorts Clothing by Fiber Composition Using Computer Vision</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c10-green-concrete">[C10] Green Concrete</Link> — <span style={tooltipStyle} title="NovaBuild creates an immutable blockchain log for green concrete beams, recording the exact amount of sequestered carbon inside the structure to serve as a permanent record for future carbon audits and building valuations.">Construction Log Records Carbon Captured in Concrete for Future Audits</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c11-battery-health-log">[C11] Battery Health Log</Link> — <span style={tooltipStyle} title="Connected EVs periodically transmit detailed battery degradation, charging cycles, and health metrics to the Digital Product Passport, allowing recyclers to instantly assess the battery's potential for second-life stationary storage applications.">Electric Vehicle Logs Battery State-of-Health Data for Second-Life Assessment</span></li>
                        <li><Link to="/docs/usecases/tier-3-value-chain-coordination#c12-packaging-deposit">[C12] Packaging Deposit</Link> — <span style={tooltipStyle} title="Retailers scan returned reusable containers, and the system reconciles the deposit tokens with the NovaPack ledger to automate the financial reimbursement transaction between the consumer, retailer, and packaging provider.">Supermarket Reconciles Deposit Return Scheme Tokens for Automated Reimbursement</span></li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Full matrix: <Link to="/docs/usecases/tier-3-value-chain-coordination">Tier 3: Value Chain Coordination</Link>
                    </p>

                    <h3>Tier 4: Systemic Transformation)</h3>
                    <p><em>Focus: system‑of‑systems and AI optimization.</em></p>
                    <ul>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s1-fiber-to-fiber">[S1] Fiber-to-Fiber</Link> — <span style={tooltipStyle} title="A complete circular journey where discarded shirts are collected, sorted, chemically separated, and re-spun into virgin-quality yarn, which is then used for new garment production, closing the loop entirely within the textile sector.">Full Loop Recycling from Old Shirt Collection to New Yarn Spinning</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s2-the-innovation-lab">[S2] The Innovation Lab</Link> — <span style={tooltipStyle} title="The NovaLab ecosystem acts as a concierge, proactively guiding circular startups through complex regulatory permitting processes and matching them with appropriate public and private funding sources based on their maturity and impact potential.">Lab Guides Startups Through Complex Regulatory Permitting and Funding Channels</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s3-disaster-relief">[S3] Disaster Relief</Link> — <span style={tooltipStyle} title="Satellite and ground sensor data confirming severe drought conditions via NovaWater Oracle executes a smart contract to release crop insurance funds to farmers instantly, bypassing weeks of bureaucratic claims processing during a crisis.">Drought Detection Automatically Triggers Parametric Insurance Payouts to Farmers</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s4-automated-factory">[S4] Automated Factory</Link> — <span style={tooltipStyle} title="An incoming customer order automatically triggers NovaMind to optimize the design topology for material efficiency, which is then sent directly to networked NovaMake printers for on-demand production without human intervention.">Order Triggers Autonomous AI Topology Optimization and 3D Printing Production</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s5-the-circular-hospital">[S5] The Circular Hospital</Link> — <span style={tooltipStyle} title="A hospital operates on a full-service circular model, leasing MRI machines to ensure upgrades, using locally sourced renewable power, and ensuring rare earth magnets are recovered by the manufacturer at the equipment's end-of-life.">Circular Hospital Manages Equipment Leasing, Renewable Power, and Recovery</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s6-global-supply-chain">[S6] Global Supply Chain</Link> — <span style={tooltipStyle} title="Battery shipments move seamlessly across international borders as the Digital Product Passport automatically proves compliance with EU battery regulations and recycling standards, reducing customs delays and ensuring global traceability.">Automated Supply Chain Compliance Checks Across International Border Crossings</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s7-city-wide-loop">[S7] City-Wide Loop</Link> — <span style={tooltipStyle} title="City councils view a live UrbanMiner dashboard showing real-time, aggregated metrics on waste reduction, material recovery rates, and circular economic activity, enabling data-driven policy adjustments and urban planning.">Dashboard Visualizes Real-Time Circularity Metrics for City-Wide Planning</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s8-regenerative-beef">[S8] Regenerative Beef</Link> — <span style={tooltipStyle} title="Cattle are managed via rotational grazing patterns that sequester soil carbon, verifiable data which is then used to pay farmers via carbon credit markets, making ecosystem restoration a core part of the business model.">Regenerative Grazing Sequesters Carbon for Farmer Credit Payments</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s9-building-as-bank">[S9] Building-as-Bank</Link> — <span style={tooltipStyle} title="Investors trade futures contracts based on the residual value of steel and timber currently in use in standing buildings, effectively treating the city's built environment as a material bank for future resource extraction.">Trading Building Materials as Future Financial Assets in Material Bank</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s10-e-waste-mining">[S10] E-Waste Mining</Link> — <span style={tooltipStyle} title="Advanced robotics systems utilize computer vision to identify and desolder high-value microchips from discarded circuit boards, testing them for functionality and preparing them for reuse in new electronics products.">Robotic Systems Salvage Valuable Chips from E-Waste for Reuse</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s11-heat-exchange-loop">[S11] Heat Exchange Loop</Link> — <span style={tooltipStyle} title="A systemic energy exchange where waste heat generated by a local data center is piped directly to nearby agricultural greenhouses to reduce heating costs, creating a symbiotic relationship between digital and food sectors.">Industrial Symbiosis Exchange: Data Center Heat Warms Nearby Greenhouses</span></li>
                        <li><Link to="/docs/usecases/tier-4-systemic-transformation#s12-ocean-plastic-cleanup">[S12] Ocean Plastic Cleanup</Link> — <span style={tooltipStyle} title="A swarm of autonomous drones identifies floating plastic patches using aerial imagery and coordinates collection vessels to harvest the waste, which is then processed and tracked as recycled feedstock.">Autonomous Drone Fleet Coordinates Ocean Plastic Harvest and Collection</span></li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        👉 Full matrix: <Link to="/docs/usecases/tier-4-systemic-transformation">Tier 4: Systemic Transformation</Link>
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