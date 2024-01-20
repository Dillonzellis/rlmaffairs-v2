import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Feature = () => {
  return (
    <div className="grid grid-cols-12 items-center gap-12">
      <div className="col-span-8">
        <Image
          src="/venue-feat.jpg"
          alt="hero"
          width={787}
          height={574}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="col-span-4 space-y-4">
        <div className="text-5xl">Venue Feature</div>
        <p className="leading-8">
          Floral Showroom: RLM Affairs is a full-service florist serving North
          Georgia for 40 years. Our award winning designers offer exquisite
          attention to detail. Whether it’s a single rose or decor for an entire
          Gala every bloom is hand picked and sourced eco friendly. Our retail
          storefront offers modern & unique items keeping everyone in mind
        </p>
        <Button asChild>
          <Link href="/">Book a Tour</Link>
        </Button>
      </div>
    </div>
  );
};
