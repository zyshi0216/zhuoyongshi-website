import Image from "next/image";
import type { SiteContent } from "@/data/types";

type Props = {
  content: SiteContent;
  locale: "en" | "zh";
};

export default function HomePage({ content, locale }: Props) {
  const otherLocaleHref = locale === "en" ? "/zh" : "/";
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">ZHUOYONG SHI</a>
        <div className="navLinks">
          <a href="#about">{content.nav.about}</a>
          <a href="#research">{content.nav.research}</a>
          <a href="#featured">{content.nav.projects}</a>
          <a href="#publications">{content.nav.publications}</a>
          <a href="#news">{content.nav.news}</a>
          <a href="/cv.pdf">{content.nav.cv}</a>
          <div className="languageSwitch">
            {locale === "en" ? (
              <>
                <span className="languageActive">EN</span>
                <span className="languageDivider">|</span>
                <a href={otherLocaleHref}>中文</a>
              </>
            ) : (
              <>
                <a href={otherLocaleHref}>EN</a>
                <span className="languageDivider">|</span>
                <span className="languageActive">中文</span>
              </>
            )}
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="heroContent">
          <div className="heroText">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.firstName} <span>{content.hero.lastName}</span></h1>
            <h2>{content.hero.tagline}</h2>
            <p className="heroDescription">{content.hero.description}</p>
            <div className="heroButtons">
              <a className="primaryButton" href="/cv.pdf">{content.hero.viewCV}</a>
              <a className="secondaryButton" href="#" target="_blank" rel="noreferrer">{content.hero.scholar}</a>
              <a className="secondaryButton" href="https://orcid.org/0000-0002-3496-7362" target="_blank" rel="noreferrer">{content.hero.orcid}</a>
              <a className="secondaryButton" href="https://github.com/zyshi0216" target="_blank" rel="noreferrer">{content.hero.github}</a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="portraitFrame">
              <div className="portraitGrid" />
              <Image src="/images/portrait-hero.png" alt="Zhuoyong Shi" width={900} height={1200} priority className="portrait" />
              <div className="visualLabel labelHuman"><span>01</span>{content.hero.labels[0]}</div>
              <div className="visualLabel labelMachine"><span>02</span>{content.hero.labels[1]}</div>
              <div className="visualLabel labelEnvironment"><span>03</span>{content.hero.labels[2]}</div>
            </div>
          </div>
        </div>
        <div className="heroBottom">
          {content.hero.bottom.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="aboutLeft">
          <p className="sectionLabel">{content.about.label}</p>
          <h2 className="aboutStatement">
            {content.about.statement[0]}<br />
            {content.about.statement[1]}<br />
            <span>{content.about.statement[2]}</span>
          </h2>
              <div className="aboutIdentity">
                <div className="aboutIdentityRow">
                  <span className="aboutMetaLabel">
                    {content.about.currentLabel}
                  </span>

                  <div className="aboutIdentityContent">
                    <strong>{content.about.currentRole}</strong>
                    <p>
                      {content.about.currentInstitution}
                      <span> · </span>
                      {content.about.currentPeriod}
                    </p>
                  </div>
                </div>

                <div className="aboutIdentityRow">
                  <span className="aboutMetaLabel">
                    {content.about.backgroundLabel}
                  </span>

                  <div className="aboutIdentityContent">
                    <strong>{content.about.backgroundField}</strong>
                    <p>{content.about.backgroundDegrees}</p>
                  </div>
                </div>

                <div className="aboutHonors">
                  <span className="aboutMetaLabel">
                    {content.about.honorsLabel}
                  </span>

                  <div className="honorsList">
                    {content.about.honors.map((honor) => (
                      <span key={honor}>{honor}</span>
                    ))}
                  </div>
                </div>
              </div>
        </div>

        <div className="aboutRight">
          <p className="aboutLead">{content.about.lead}</p>
          <p>{content.about.body}</p>
          <div className="aboutQuestion">
            <span>{content.about.questionLabel}</span>
            <p>{content.about.question}</p>
          </div>
        </div>
      </section>

      <section className="section researchSection" id="research">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">{content.research.label}</p>
            <h2>{content.research.heading}</h2>
          </div>
          <p className="sectionIntro">{content.research.intro}</p>
        </div>
        <div className="researchGrid">
          {content.research.areas.map((area) => (
            <article className="researchCard" key={area.number}>
              <div className="researchNumber">{area.number}</div>
              <p className="researchSubtitle">{area.subtitle}</p>
              <h3>{area.title}</h3>
              <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="cardArrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section featuredResearchSection" id="featured">
        <div className="featuredResearchHeading">
          <p className="sectionLabel">{content.featured.label}</p>
          <h2>{content.featured.heading}</h2>
          <p>{content.featured.intro}</p>
        </div>
        <div className="projectList">
          {content.featured.projects.map((project) => (
            <article className={`projectRow ${project.number === "01" ? "projectRowPrimary" : ""}`} key={project.number}>
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

      <section className="section publicationSection" id="publications">
        <div className="publicationHeader">
          <div>
            <p className="sectionLabel">{content.publications.label}</p>
            <h2>{content.publications.heading}</h2>
          </div>
          <a href="#">{content.publications.viewAll}</a>
        </div>
        <div className="publicationList">
          {content.publications.items.map((publication, index) => (
            <article className="publicationItem" key={publication.title}>
              <span className="publicationIndex">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{publication.title}</h3>
                <p>{publication.journal} · {publication.year}</p>
              </div>
              <span className="publicationArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section newsSection" id="news">
        <div>
          <p className="sectionLabel">{content.news.label}</p>
          <h2>{content.news.heading}</h2>
        </div>
        <div className="newsList">
          {content.news.items.map((item) => (
            <div className="newsItem" key={`${item.date}-${item.text}`}>
              <time>{item.date}</time>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>ZHUOYONG SHI</strong>
          <p>{content.footer.role}<br />{content.footer.themes}</p>
        </div>
        <p>{content.footer.copyright}</p>
      </footer>
    </main>
  );
}