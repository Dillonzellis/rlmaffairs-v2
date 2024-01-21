import Image from "next/image";
import Marquee from "react-fast-marquee";

const awards = [
  { src: "/knot-2020.png", alt: "" },
  { src: "/knot-2021.png", alt: "" },
  { src: "/knot-2022.png", alt: "" },
  { src: "/wedding-wire-2023.png", alt: "" },
];

export const MarqueeSection = () => {
  return (
    <div>
      <div className="mx-auto max-w-[800px] text-center text-3xl capitalize">
        were proud to partner with leading organizations and receive top
        industry accolades
      </div>
      <Image
        src="/leaves-1.png"
        alt=""
        width={140}
        height={88}
        className="mx-auto"
      />
      <Marquee pauseOnHover pauseOnClick>
        <div className="flex justify-center gap-8">
          {awards.map((award, idx) => (
            <Image
              key={idx}
              src={award.src}
              alt={award.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
