import type { SiteContent } from "./types";

export const englishContent: SiteContent = {
  nav: {
    about: "About",
    research: "Research",
    projects: "Projects",
    publications: "Publications",
    news: "News",
    cv: "CV",
  },
  hero: {
    eyebrow: "PHD RESEARCHER · NATIONAL UNIVERSITY OF SINGAPORE",
    firstName: "ZHUOYONG",
    lastName: "SHI",
    tagline: "Intelligent sensing and physical modeling for humans, machines, and environments.",
    description: "Bridging sensing, machine intelligence, and physical models to understand and optimize dynamic systems across digital health, autonomous machines, and complex environments.",
    viewCV: "View CV",
    scholar: "Google Scholar",
    orcid: "ORCID",
    github: "GitHub",
    labels: ["HUMAN", "MACHINE", "ENVIRONMENT"],
    bottom: ["INTELLIGENT SENSING", "PHYSICAL MODELING", "MACHINE INTELLIGENCE"],
  },
  about: {
    label: "ABOUT",
    statement: ["Sensing the physical world.", "Modeling its dynamics.", "Enabling intelligent decisions."],
    currentLabel: "CURRENT",
    currentRole: "PhD Researcher",
    currentInstitution: "National University of Singapore",
    currentPeriod: "2025 — Present",

    backgroundLabel: "BACKGROUND",
    backgroundField: "Electronic Science & Technology",
    backgroundDegrees: "2022 BEng · 2025 MEng",
    backgroundInstitutions: "",

    honorsLabel: "HONORS",
    honors: [
      "National Scholarship ×2",
      "BaoGang Outstanding Student Scholarship",
      "Outstanding Graduate",
      "Distinguished Graduate",
    ],
    lead: "Zhuoyong Shi is a PhD researcher at the National University of Singapore, working at the intersection of intelligent sensing, machine intelligence, and physical modeling.",
    body: "His research focuses on sensing and computational approaches for understanding and interacting with dynamic physical systems. His current work spans wearable sensing and digital health, human motion assessment and adaptive rehabilitation, autonomous UAV systems, environmental reconstruction, and intelligent atmospheric water harvesting.",
    questionLabel: "RESEARCH QUESTION",
    question: "How can physical systems be sensed, modeled, and understood well enough to enable intelligent and adaptive decision-making?",
  },
  research: {
    label: "RESEARCH FRAMEWORK",
    heading: "Understanding dynamic systems through sensing, intelligence, and physical models.",
    intro: "My research connects intelligent sensing with computational and physical models to characterize, understand, and optimize dynamic states across three interacting domains.",
    areas: [
      { number: "01", title: "HUMAN", subtitle: "Human Intelligence", items: ["Wearable Sensing", "Motor Assessment", "Adaptive Rehabilitation", "Human Digital Twin"] },
      { number: "02", title: "MACHINE", subtitle: "Machine Intelligence", items: ["Autonomous UAVs", "Swarm Intelligence", "Trajectory Planning", "Intelligent Decision Making"] },
      { number: "03", title: "ENVIRONMENT", subtitle: "Environmental Intelligence", items: ["Environmental Sensing", "Turbulence Reconstruction", "Physical Modeling", "Atmospheric Water Harvesting"] },
    ],
  },
  featured: {
    label: "FEATURED RESEARCH",
    heading: "Selected research directions",
    intro: "Research across human health, autonomous machines, and physical environments connected by sensing, modeling, and intelligence.",
    projects: [
      { number: "01", domain: "HUMAN", status: "ONGOING RESEARCH", title: "Continuous Assessment Enables Adaptive Motor Rehabilitation", keywords: "Wearable Sensing · Parkinson's Disease · Closed-loop Rehabilitation", description: "Integrating continuous motor assessment into rehabilitation interactions to enable personalized and adaptive training. Multimodal sensing captures changes in motor performance over repeated sessions, allowing rehabilitation tasks to respond dynamically to individual capability and progress.", highlight: "ASSESSMENT → ADAPTATION → REHABILITATION" },
      { number: "02", domain: "HUMAN", status: "ONGOING RESEARCH", title: "Digital Twins for Efficient Human Motion Sensing", keywords: "Human Digital Twin · Virtual Sensing · Sensor Topology · Motor Assessment", description: "Exploring how digital twins and virtual sensors can reduce physical sensing requirements while preserving clinically relevant motor information. Large-scale topology screening is used to identify efficient asymmetric sensor configurations for human motion assessment.", highlight: "70,000+ SENSOR CONFIGURATIONS" },
      { number: "03", domain: "MACHINE × ENVIRONMENT", status: "MEASUREMENT · 2026", title: "From Environmental Observation to Autonomous Decision", keywords: "Turbulence Sensing · Environmental Reconstruction · UAV Route Planning", description: "Connecting environmental perception with autonomous decision-making for low-altitude UAV operations. The framework reconstructs complex turbulence fields from observations and propagates environmental information downstream to route planning.", highlight: "OBSERVATION → RECONSTRUCTION → DECISION" },
      { number: "04", domain: "ENVIRONMENT", status: "ONGOING RESEARCH", title: "Intelligent Atmospheric Water Harvesting", keywords: "Environmental Sensing · Condensation · Adaptive Control · Embedded Systems", description: "Developing a sensing-driven atmospheric water harvesting system that responds to changing environmental conditions. Distributed environmental and surface measurements provide the physical basis for adaptive condensation and system control.", highlight: "SENSING → PHYSICS → ADAPTIVE CONTROL" },
    ],
  },
  publications: {
    label: "SELECTED PUBLICATIONS",
    heading: "Research outputs",
    viewAll: "View all publications →",
    items: [
      { year: "2026", journal: "Measurement", title: "An Observation-to-Decision Framework for Low-Altitude Turbulence Reconstruction and UAV Route Planning" },
      { year: "2024", journal: "IEEE Sensors Journal", title: "Design of Motor Skill Recognition and Hierarchical Evaluation System for Table Tennis Players" },
      { year: "2024", journal: "IEEE Sensors Journal", title: "Design of UAV Flight State Recognition System for Multi-Sensor Data Fusion" },
      { year: "2023", journal: "IEEE Transactions on Aerospace and Electronic Systems", title: "UAV Trajectory Prediction Based on Flight State Recognition" },
    ],
  },
  news: {
    label: "LATEST NEWS",
    heading: "Updates",
    items: [
      { date: "2026.09", text: "Invited to serve on the reviewer panel of CMC." },
      { date: "2026.08", text: "Our work on turbulence reconstruction and UAV route planning was accepted by Measurement." },
      { date: "2025.08", text: "Started PhD research at the National University of Singapore." },
    ],
  },
  footer: {
    role: "PhD Researcher · National University of Singapore",
    themes: "Intelligent Sensing · Physical Modeling · Machine Intelligence",
    copyright: "© 2026 Zhuoyong Shi",
  },
};