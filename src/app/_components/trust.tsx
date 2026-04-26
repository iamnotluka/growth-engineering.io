import Image from "next/image";

const brands = [
  { name: "The Brothers Green", src: "/logos/brothers-green.png", width: 500, height: 286 },
  { name: "OLOE", src: "/logos/oloe.png", width: 600, height: 150 },
  { name: "Moo Moos", src: "/logos/moo.png", width: 200, height: 200 },
  { name: "HP High Performance Academy", src: "/logos/hp-academy.png", width: 518, height: 338 },
  { name: "transform. by FITAZ", src: "/logos/transform.png", width: 1875, height: 503 },
  { name: "GWOP", src: "/logos/gwop.png", width: 512, height: 134 },
];

export function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <p className="trust-eyebrow reveal">Trusted by operators</p>
        <p className="trust-sub reveal">
          We work with brands rebuilding the numbers behind real revenue and real product.
        </p>
        <ul className="trust-logos reveal">
          {brands.map((brand) => (
            <li key={brand.name} className="trust-logo">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
