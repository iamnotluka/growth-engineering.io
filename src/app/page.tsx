import { Approach } from "./_components/approach";
import { CaseStudies } from "./_components/case-studies";
import { Clients } from "./_components/clients";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Manifesto } from "./_components/manifesto";
import { Method } from "./_components/method";
import { Nav } from "./_components/nav";
import { Partners } from "./_components/partners";
import { Principles } from "./_components/principles";
import { Problem } from "./_components/problem";
import { Questions } from "./_components/questions";
import { SiteFooter } from "./_components/site-footer";
import { Team } from "./_components/team";
// import { Testimonials } from "./_components/testimonials";

const SITE_URL = "https://growth-engineering.io";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#org`,
      name: "growth-engineering.io",
      url: SITE_URL,
      description:
        "Advisory for eCommerce founders. We read the numbers behind your business, find what's limiting profitable scale, and give you a plan you can run.",
      areaServed: { "@type": "Country", name: "Australia" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/icon.svg`,
      knowsAbout: [
        "eCommerce growth",
        "DTC unit economics",
        "Customer acquisition cost",
        "Lifetime value modelling",
        "Profitability analysis",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Luka",
          jobTitle: "Co-founder · Analysis & systems",
        },
        {
          "@type": "Person",
          name: "James",
          jobTitle: "Co-founder · Operations & marketing",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "growth-engineering.io",
      publisher: { "@id": `${SITE_URL}#org` },
      inLanguage: "en-AU",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <Hero />
      <Clients />
      <Problem />
      <Questions />
      <Approach />
      <CaseStudies />
      <Manifesto />
      <Method />
      <Principles />
      {/* <Testimonials /> */}
      <Team />
      <Contact />
      <Partners />
      <SiteFooter />
    </>
  );
}
