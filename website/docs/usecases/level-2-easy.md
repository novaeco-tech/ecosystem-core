# Level 2: Easy (Transactional Efficiency)

**Focus:** Simple P2P/B2C transactions and data logging.

---

## [E1] The Waste Match

**Description** 
Bakery lists waste. NovaHub defines the resource requirement structure. NovaTrade executes the match and transfer.

**Challenges** 
- Small volume logistics  
- Freshness  

**Sustainability Problem** 
Diverts organic waste from landfill; provides cheap local feedstock.

**User Interaction** 
Bakery defines "Waste Stream Project" on NovaHub → Listing automatically published to NovaTrade → Insect Farm accepts offer on NovaTrade → NovaFin processes payment.

**Ecosystem Usage** 
NovaHub, NovaTrade, NovaWaste, NovaFin

---

## [E2] Green Tutor

**Description**  
Student offers "Circular Design" tutoring. Professional books session.

**Challenges**  
- Verifying tutor expertise  

**Sustainability Problem**  
Spreads circular knowledge; income for students.

**User Interaction**  
Student lists profile on NovaSkills → Pro books slot → Pays via NovaFin → Video link generated.

**Ecosystem Usage**  
NovaSkills, NovaFin, Identity

---

## [E3] Ride to Factory

**Description**  
BMW employees carpool to Dingolfing plant. Riders micro‑pay drivers.

**Challenges**  
- Trust (mitigated by corporate ID)  
- Critical mass  

**Sustainability Problem**  
Reduces Scope 3 emissions; optimizes vehicle usage.

**User Interaction**  
Employee opens NovaMobility → Finds ride → Scans QR code to join → Payment auto‑deducted.

**Ecosystem Usage**  
NovaMobility, NovaFin, Identity

---

## [E4] Citizen Sensor

**Description**  
Citizens test river water and upload data/photos.

**Challenges**  
- Data quality/verification  

**Sustainability Problem**  
Crowdsourced environmental monitoring; citizen engagement.

**User Interaction**  
User takes photo of test strip → Uploads to NovaWater → NovaSapien verifies reading → Data added to map.

**Ecosystem Usage**  
NovaWater, NovaBalance, NovaSapien

---

## [E5] Material Scout

**Description**  
Architect scans demolition site bricks to catalog them for reuse.

**Challenges**  
- Identifying material quality via vision  

**Sustainability Problem**  
Reuses high‑value construction materials; reduces virgin manufacturing.

**User Interaction**  
Architect points camera → NovaSapien identifies "Red Brick" → Creates asset in NovaBuild → Generates Passport.

**Ecosystem Usage**  
NovaBuild, NovaSapien, NovaMaterial

---

## [E6] Ugly Veggie Box

**Description**  
Farm sells "imperfect" produce directly to consumers.

**Challenges**  
- Last‑mile logistics  

**Sustainability Problem**  
Reduces food waste at source; supports local agro.

**User Interaction**  
Farm lists "5kg Box" on NovaAgro → Consumer buys on NovaTrade → NovaMobility schedules pickup.

**Ecosystem Usage**  
NovaAgro, NovaTrade, NovaMobility

---

## [E7] Solar Log

**Description**  
Homeowner logs solar production to blockchain.

**Challenges**  
- Hardware integration (inverter API)  

**Sustainability Problem**  
Verifiable green energy generation; prerequisite for carbon credits.

**User Interaction**  
Connects inverter to NovaEnergy → `novaenergy-worker` polls API daily → Writes record to NovaBalance.

**Ecosystem Usage**  
NovaEnergy, NovaBalance, Identity

---

## [E8] Device Return

**Description**  
Clinic requests pickup for used single‑use devices.

**Challenges**  
- Hygiene safety  
- Categorization  

**Sustainability Problem**  
Prevents incineration of recyclable medical plastics.

**User Interaction**  
Nurse scans bin QR in NovaHealth → NovaWaste gets pickup request → Route optimized.

**Ecosystem Usage**  
NovaHealth, NovaWaste, NovaMobility

---

## [E9] Pollen Alert

**Description**  
Hyper‑local air quality alerts for allergy sufferers.

**Challenges**  
- Sensor density  

**Sustainability Problem**  
Improves public health; highlights pollution hotspots.

**User Interaction**  
User sets "Asthma" profile in Identity → NovaAir detects high PM2.5 → Push notification sent.

**Ecosystem Usage**  
NovaAir, NovaSapien, Identity

---

## [E10] Universal Bowl

**Description**  
Reusable takeout bowl system with deposit.

**Challenges**  
- Return rate  
- Washing logistics  

**Sustainability Problem**  
Eliminates single‑use packaging waste.

**User Interaction**  
Customer scans bowl QR at cafe → Deposit deducted in NovaPack → Scans again at drop‑off bin → Deposit refunded.

**Ecosystem Usage**  
NovaPack, NovaMobility, Identity
