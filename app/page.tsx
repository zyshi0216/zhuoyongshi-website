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
      "UAV Planning",
      "Swarm Intelligence",
      "Autonomous Systems",
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
      "Atmospheric Systems",
    ],
  },
];

const featuredResearch = [
  {
    category: "DIGITAL HEALTH",
    title: "Continuous Assessment Enables Adaptive Motor Rehabilitation",
    description:
      "Closed-loop wearable sensing and continuous motor assessment for personalized adaptive rehabilitation.",
  },
  {
    category: "HUMAN DIGITAL TWIN",
    title: "Asymmetric Sensor Topology for Motor Assessment",
    description:
      "Digital twins and virtual sensing for identifying efficient sensor configurations for human motion assessment.",
  },
  {
    category: "AUTONOMOUS SYSTEMS",
    title: "Turbulence Reconstruction and UAV Route Planning",
    description:
      "An observation-to-decision framework connecting environmental reconstruction with autonomous UAV navigation.",
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
    journal: "IEEE TAES",
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
          <a href="#research">Research</a>
          <a href="#featured">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#news">News</a>
          <a href="/cv.pdf">CV</a>
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
                src="/images/portrait-hero.jpg"
                alt="Zhuoyong Shi"
                width={700}
                height={900}
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

      {/* Research */}
      <section className="section researchSection" id="research">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">RESEARCH INTERESTS</p>
            <h2>
              Understanding dynamic systems through sensing, intelligence, and
              physical models.
            </h2>
          </div>

          <p className="sectionIntro">
            My research connects intelligent sensing with computational and
            physical models to characterize, understand, and optimize the
            dynamic states of humans, machines, and environments.
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
      <section className="section featuredSection" id="featured">
        <div className="simpleHeading">
          <p className="sectionLabel">FEATURED RESEARCH</p>
          <h2>Selected work across sensing, modeling, and intelligent systems.</h2>
        </div>

        <div className="featuredGrid">
          {featuredResearch.map((project, index) => (
            <article className="featuredCard" key={project.title}>
              <div className={`projectVisual projectVisual${index + 1}`}>
                <span>0{index + 1}</span>
              </div>

              <div className="projectContent">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
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
            PhD Researcher · Department of Chemistry
            <br />
            National University of Singapore
          </p>
        </div>

        <p>© 2026 Zhuoyong Shi</p>
      </footer>
    </main>
  );
}