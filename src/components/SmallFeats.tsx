import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// TODO: fix styling of text bubbles

const featsData = [
  {
    title: "Visit us in Gainesville",
    btnLabel: "Book a Tour",
    btnHref:
      "https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204",
    isInternal: false,
    imageUrl: "/venue-feat-sm.jpg",
    imageAlt: "placeholder",
  },
  {
    title: "Renowned Catering",
    btnLabel: "Have a Taste",
    btnHref: "/catering",
    isInternal: true,
    imageUrl: "/catering-feat-sm.jpg",
    imageAlt: "placeholder",
  },
];

interface FeatProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  btnLabel: string;
  btnHref: string;
  isInternal: boolean;
  className?: string;
}

const Feat = ({
  title,
  imageUrl,
  imageAlt,
  btnLabel,
  btnHref,
  isInternal,
  className,
}: FeatProps) => {
  const LinkClass = cn(
    "absolute left-8 top-8 rounded-xl p-4 backdrop-blur-sm duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/30 hover:backdrop-blur-0",
    className,
  );

  return (
    <div className="relative">
      {isInternal ? (
        <Link href={btnHref} className={LinkClass}>
          <div className="text-lg font-light">{title}</div>
          <div className="flex items-center justify-start gap-1.5 hover:underline hover:underline-offset-4">
            <div className="text-xl font-medium">{btnLabel}</div>
            <MoveRight className="h-7 w-7" />
          </div>
        </Link>
      ) : (
        <a
          href={btnHref}
          className={LinkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-lg font-light">{title}</div>
          <div className="flex items-center justify-start gap-1.5 hover:underline hover:underline-offset-4">
            <div className="text-xl font-medium">{btnLabel}</div>
            <MoveRight className="h-7 w-7" />
          </div>
        </a>
      )}
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={556}
        height={446}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export const SmallFeats = () => {
  return (
    <div className="flex items-center justify-center gap-12">
      <Feat {...featsData[0]} className="bg-white text-black" />
      <Feat {...featsData[1]} className="bg-brandingGreen-400/90 text-white" />
    </div>
  );
};
