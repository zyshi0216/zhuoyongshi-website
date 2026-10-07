import Image from "next/image";

const researchAreas = [
  {
    number: "01",
    title: "HUMAN",
    subtitle: "Human Intelligence",
    items: [
      "Wearable Sensing",
      "Motor Assessment",
      "Adaptive Rehabilitation",
      "Human Digital Twin",
    ],
  },
  {
    number: "02",
    title: "MACHINE",
    subtitle: "Machine Intelligence",
    items: [
      "Autonomous UAVs",
      "Swarm Intelligence",
      "Trajectory Planning",
      "Intelligent Decision Making",
    ],
  },
  {
    number: "03",
    title: "ENVIRONMENT",
    subtitle: "Environmental Intelligence",
    items: [
      "Environmental Sensing",
      "Turbulence Reconstruction",
      "Physical Modeling",
      "Atmospheric Water Harvesting",
    ],
  },
];

const projects = [
  {
    number: "01",
    domain: "HUMAN",
    status: "ONGOING RESEARCH",
    title: "Continuous Assessment Enables Adaptive Motor Rehabilitation",
    keywords:
      "Wearable Sensing · Parkinson's Disease · Closed-loop Rehabilitation",
    description:
      "Integrating continuous motor assessment into rehabilitation interactions to enable personalized and adaptive training. Multimodal sensing captures changes in motor performance over repeated sessions, allowing rehabilitation tasks to respond dynamically to individual capability and progress.",
    highlight: "ASSESSMENT → ADAPTATION → REHABILITATION",
  },
  {
    number: "02",
    domain: "HUMAN",
    status: "ONGOING RESEARCH",
    title: "Digital Twins for Efficient Human Motion Sensing",
    keywords:
      "Human Digital Twin · Virtual Sensing · Sensor Topology · Motor Assessment",
    description:
      "Exploring how digital twins and virtual sensors can reduce physical sensing requirements while preserving clinically relevant motor information. Large-scale topology screening is used to identify efficient asymmetric sensor configurations for human motion assessment.",
    highlight: "70,000+ SENSOR CONFIGURATIONS",
  },
  {
    number: "03",
    domain: "MACHINE × ENVIRONMENT",
    status: "MEASUREMENT · 2026",
    title: "From Environmental Observation to Autonomous Decision",
    keywords:
      "Turbulence Sensing · Environmental Reconstruction · UAV Route Planning",
    description:
      "Connecting environmental perception with autonomous decision-making for low-altitude UAV operations. The framework reconstructs complex turbulence fields from observations and propagates environmental information downstream to route planning.",
    highlight: "OBSERVATION → RECONSTRUCTION → DECISION",
  },
  {
    number: "04",
    domain: "ENVIRONMENT",
    status: "ONGOING RESEARCH",
    title: "Intelligent Atmospheric Water Harvesting",
    keywords:
      "Environmental Sensing · Condensation · Adaptive Control · Embedded Systems",
    description:
      "Developing a sensing-driven atmospheric water harvesting system that responds to changing environmental conditions. Distributed environmental and surface measurements provide the physical basis for adaptive condensation and system control.",
    highlight: "SENSING → PHYSICS → ADAPTIVE CONTROL",
  },
];

const publications = [
  {
    year: "2026",
    journal: "Measurement",
    title:
      "An Observation-to-Decision Framework for Low-Altitude Turbulence Reconstruction and UAV Route Planning",
  },
  {
    year: "2024",
    journal: "IEEE Sensors Journal",
    title:
      "Design of Motor Skill Recognition and Hierarchical Evaluation System for Table Tennis Players",
  },
  {
    year: "2024",
    journal: "IEEE Sensors Journal",
    title:
      "Design of UAV Flight State Recognition System for Multi-Sensor Data Fusion",
  },
  {
    year: "2023",
    journal: "IEEE Transactions on Aerospace and Electronic Systems",
    title: "UAV Trajectory Prediction Based on Flight State Recognition",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="#">
          ZHUOYONG SHI
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#featured">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#news">News</a>
          <a href="/cv.pdf">CV</a>

          <div className="languageSwitch">
            <span className="languageActive">EN</span>
            <span className="languageDivider">|</span>
            <a href="/zh">中文</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="heroContent">
          <div className="heroText">
            <p className="eyebrow">
              PHD RESEARCHER · NATIONAL UNIVERSITY OF SINGAPORE
            </p>

            <h1>
              ZHUOYONG <span>SHI</span>
            </h1>

            <h2>
              Intelligent sensing and physical modeling for humans, machines,
              and environments.
            </h2>

            <p className="heroDescription">
              Bridging sensing, machine intelligence, and physical models to
              understand and optimize dynamic systems across digital health,
              autonomous machines, and complex environments.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href="/cv.pdf">
                View CV
              </a>

              <a
                className="secondaryButton"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>

              <a
                className="secondaryButton"
                href="https://orcid.org/0000-0002-3496-7362"
                target="_blank"
                rel="noreferrer"
              >
                ORCID
              </a>

              <a
                className="secondaryButton"
                href="https://github.com/zyshi0216"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="portraitFrame">
              <div className="portraitGrid" />

              <Image
                src="/images/portrait-hero.png"
                alt="Zhuoyong Shi"
                width={900}
                height={1200}
                priority
                className="portrait"
              />

              <div className="visualLabel labelHuman">
                <span>01</span>
                HUMAN
              </div>

              <div className="visualLabel labelMachine">
                <span>02</span>
                MACHINE
              </div>

              <div className="visualLabel labelEnvironment">
                <span>03</span>
                ENVIRONMENT
              </div>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>INTELLIGENT SENSING</span>
          <span>PHYSICAL MODELING</span>
          <span>MACHINE INTELLIGENCE</span>
        </div>
      </section>

      {/* About */}
<section className="section aboutSection" id="about">
  <div className="aboutLeft">
    <p className="sectionLabel">ABOUT</p>

    <h2 className="aboutStatement">
      Sensing the physical world.
      <br />
      Modeling its dynamics.
      <br />
      <span>Enabling intelligent decisions.</span>
    </h2>

    <div className="aboutIdentity">
      <div>
        <span className="aboutMetaLabel">CURRENT</span>
        <strong>PhD Researcher</strong>
        <p>National University of Singapore</p>
        <small>2025 — Present</small>
      </div>

      <div>
        <span className="aboutMetaLabel">BACKGROUND</span>
        <strong>Electronic Science & Technology</strong>
        <p>BEng · MEng</p>
        <small>Northwestern Polytechnical University & Xian Jiaotong University of City College</small>
      </div>
    </div>
  </div>

  <div className="aboutRight">
    <p className="aboutLead">
      Zhuoyong Shi is a PhD researcher at the National University of
      Singapore, working at the intersection of intelligent sensing,
      machine intelligence, and physical modeling.
    </p>

    <p>
      His research focuses on sensing and computational approaches for
      understanding and interacting with dynamic physical systems. His
      current work spans wearable sensing and digital health, human motion
      assessment and adaptive rehabilitation, autonomous UAV systems,
      environmental reconstruction, and intelligent atmospheric water
      harvesting.
    </p>

    <div className="aboutQuestion">
      <span>RESEARCH QUESTION</span>

      <p>
        How can physical systems be sensed, modeled, and understood well
        enough to enable intelligent and adaptive decision-making?
      </p>
    </div>
  </div>
</section>


      {/* Research */}
      <section className="section researchSection" id="research">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">RESEARCH FRAMEWORK</p>
            <h2>
              Understanding dynamic systems through sensing, intelligence, and
              physical models.
            </h2>
          </div>

          <p className="sectionIntro">
            My research connects intelligent sensing with computational and
            physical models to characterize, understand, and optimize dynamic
            states across three interacting domains.
          </p>
        </div>

        <div className="researchGrid">
          {researchAreas.map((area) => (
            <article className="researchCard" key={area.title}>
              <div className="researchNumber">{area.number}</div>
              <p className="researchSubtitle">{area.subtitle}</p>
              <h3>{area.title}</h3>

              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="cardArrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section className="section featuredResearchSection" id="featured">
        <div className="featuredResearchHeading">
          <p className="sectionLabel">FEATURED RESEARCH</p>
          <h2>Selected research directions</h2>
          <p>
            Research across human health, autonomous machines, and physical
            environments connected by sensing, modeling, and intelligence.
          </p>
        </div>

        <div className="projectList">
          {projects.map((project) => (
            <article
              className={`projectRow ${
                project.number === "01" ? "projectRowPrimary" : ""
              }`}
              key={project.number}
            >
              <div className="projectMeta">
                <span>{project.number}</span>
                <p>{project.domain}</p>
              </div>

              <div className="projectMain">
                <div className="projectStatus">{project.status}</div>

                <h3>{project.title}</h3>

                <p className="projectKeywords">{project.keywords}</p>

                <p className="projectDescription">{project.description}</p>

                <div className="projectHighlight">{project.highlight}</div>
              </div>

              <div className="projectArrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="section publicationSection" id="publications">
        <div className="publicationHeader">
          <div>
            <p className="sectionLabel">SELECTED PUBLICATIONS</p>
            <h2>Research outputs</h2>
          </div>

          <a href="#">View all publications →</a>
        </div>

        <div className="publicationList">
          {publications.map((publication, index) => (
            <article className="publicationItem" key={publication.title}>
              <span className="publicationIndex">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{publication.title}</h3>
                <p>
                  {publication.journal} · {publication.year}
                </p>
              </div>

              <span className="publicationArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="section newsSection" id="news">
        <div>
          <p className="sectionLabel">LATEST NEWS</p>
          <h2>Updates</h2>
        </div>

        <div className="newsList">
          <div className="newsItem">
            <time>2026.09</time>
            <p>Invited to serve on the reviewer panel of CMC.</p>
          </div>

          <div className="newsItem">
            <time>2026.08</time>
            <p>
              Our work on turbulence reconstruction and UAV route planning was
              accepted by Measurement.
            </p>
          </div>

          <div className="newsItem">
            <time>2025.08</time>
            <p>
              Started PhD research at the National University of Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <strong>ZHUOYONG SHI</strong>
          <p>
            PhD Researcher · National University of Singapore
            <br />
            Intelligent Sensing · Physical Modeling · Machine Intelligence
          </p>
        </div>

        <p>© 2026 Zhuoyong Shi</p>
      </footer>
    </main>
  );
}