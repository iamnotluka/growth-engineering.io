import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { Trust } from "./_components/trust";
import { Problem } from "./_components/problem";
import { Approach } from "./_components/approach";
import { Manifesto } from "./_components/manifesto";
import { Method } from "./_components/method";
import { Principles } from "./_components/principles";
import { Team } from "./_components/team";
import { Contact } from "./_components/contact";
import { SiteFooter } from "./_components/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Trust />
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
