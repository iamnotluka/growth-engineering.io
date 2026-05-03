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

const FAQ = [
  {
    q: "What is our real LTV?",
    a: "We model lifetime value from your own order history — cohort-by-cohort, not generic benchmarks — so the number you plan against reflects how your customers actually behave.",
  },
  {
    q: "What CAC can we actually afford?",
    a: "We derive a defensible CAC ceiling from contribution margin, repeat behaviour and payback tolerance, then express it as a number you can hand to your media team.",
  },
  {
    q: "Can this business scale profitably?",
    a: "We model the unit economics end-to-end and stress-test what happens when you push spend, so you know whether scale compounds profit or erodes it.",
  },
  {
    q: "Are our margins strong enough to grow?",
    a: "We pull contribution margin apart by product, channel and cohort to show where margin is real, where it's leaking, and what has to change before you scale.",
  },
  {
    q: "Will cash flow break if we push harder?",
    a: "We model cash conversion alongside the P&L so the growth plan accounts for inventory, payment terms and working capital — not just revenue and profit.",
  },
  {
    q: "What is the next biggest lever?",
    a: "We rank constraints by the profit they unlock, so the next dollar and the next hour go to the lever with the highest expected return on your specific business.",
  },
  {
    q: "What should we stop focusing on for now?",
    a: "We name the things that look like progress but don't move the numbers, so you can stop spending energy on them and concentrate on what compounds.",
  },
];

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
      areaServed: [
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
      ],
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
        { "@id": `${SITE_URL}#luka` },
        { "@id": `${SITE_URL}#james` },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#luka`,
      name: "Luka Zoric",
      jobTitle: "Co-founder · Analysis & systems",
      url: "https://www.zoricl.io/",
      worksFor: { "@id": `${SITE_URL}#org` },
      sameAs: [
        "https://www.linkedin.com/in/luka-zoric/",
        "https://www.zoricl.io/",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#james`,
      name: "James Forsyth",
      jobTitle: "Co-founder · Operations & marketing",
      url: "https://www.jamesroux.co/",
      worksFor: { "@id": `${SITE_URL}#org` },
      sameAs: [
        "https://www.linkedin.com/in/jamesforsythnz/",
        "https://www.jamesroux.co/",
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#sprint`,
      name: "Profit Clarity Sprint",
      serviceType: "eCommerce profitability advisory",
      provider: { "@id": `${SITE_URL}#org` },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "DTC eCommerce founders, $1M–$5M+ revenue",
      },
      description:
        "A 12-week fixed-fee diagnostic for eCommerce founders. We assess the unit economics, diagnose what's limiting profitable scale, and direct the work with a plan you can run.",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
