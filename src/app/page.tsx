import { Approach } from "./_components/approach";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Manifesto } from "./_components/manifesto";
import { Method } from "./_components/method";
import { Nav } from "./_components/nav";
import { Principles } from "./_components/principles";
import { Problem } from "./_components/problem";
import { SiteFooter } from "./_components/site-footer";
import { Team } from "./_components/team";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Approach />
      <Manifesto />
      <Method />
      <Principles />
      <Team />
      <Contact />
      <SiteFooter />
    </>
  );
}
