export type SiteContent = {
  nav: {
    about: string;
    research: string;
    projects: string;
    publications: string;
    news: string;
    cv: string;
  };
  hero: {
    eyebrow: string;
    firstName: string;
    lastName: string;
    tagline: string;
    description: string;
    viewCV: string;
    scholar: string;
    orcid: string;
    github: string;
    labels: string[];
    bottom: string[];
  };
  about: {
    label: string;
    statement: [string, string, string];
    currentLabel: string;
    currentRole: string;
    currentInstitution: string;
    currentPeriod: string;
    backgroundLabel: string;
    backgroundField: string;
    backgroundDegrees: string;
    backgroundInstitutions: string;
    honorsLabel: string;
    honors: string[]; 
    lead: string;
    body: string;
    questionLabel: string;
    question: string;
  };
  research: {
    label: string;
    heading: string;
    intro: string;
    areas: Array<{
      number: string;
      title: string;
      subtitle: string;
      items: string[];
    }>;
  };
  featured: {
    label: string;
    heading: string;
    intro: string;
    projects: Array<{
      number: string;
      domain: string;
      status: string;
      title: string;
      keywords: string;
      description: string;
      highlight: string;
    }>;
  };
  publications: {
    label: string;
    heading: string;
    viewAll: string;
    items: Array<{
      year: string;
      journal: string;
      title: string;
    }>;
  };
  news: {
    label: string;
    heading: string;
    items: Array<{ date: string; text: string }>;
  };
  footer: {
    role: string;
    themes: string;
    copyright: string;
  };
};