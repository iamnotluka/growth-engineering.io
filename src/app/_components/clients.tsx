import Image from "next/image";

type Client = {
  name: string;
  logoSrc?: string;
  width?: number;
  height?: number;
};

const clients: Client[] = [
  { name: "Oloe", logoSrc: "/oloelogo.png", width: 600, height: 150 },
  { name: "The Brothers Green", logoSrc: "/tbglogo.png", width: 500, height: 286 },
  { name: "Furmoo", logoSrc: "/furmoologo-tr.png", width: 200, height: 200 },
  { name: "BUYNZ MADE", logoSrc: "/buynzmade2.avif", width: 380, height: 220 },
  { name: "HP Academy", logoSrc: "/hpacademylogo-tr.png", width: 900, height: 900 },
  { name: "FitAZ", logoSrc: "/fitaz2-tr.png", width: 1200, height: 630 },
];

function ClientMark({ name, logoSrc, width, height }: Client) {
  if (logoSrc) {
    return (
      <span className="client-logo" aria-label={name}>
        <Image
          src={logoSrc}
          alt={name}
          width={width ?? 140}
          height={height ?? 32}
          className="client-logo-img"
        />
      </span>
    );
  }
  return <span className="client-wordmark">{name}</span>;
}

export function Clients() {
  return (
    <section className="clients" id="clients" aria-label="Brands we have worked with">
      <div className="container">
        <p className="clients-eyebrow">Trusted by eCommerce founders building real businesses</p>
        <div className="clients-row">
          {clients.map((c) => (
            <ClientMark key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
