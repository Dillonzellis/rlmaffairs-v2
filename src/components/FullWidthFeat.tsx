import Image from "next/image";

export const FullWidthFeat = () => {
  return (
    <div className="relative">
      <Image src="/floral-feat.jpg" alt="floral" width={1282} height={724} />
      <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-6 rounded-xl bg-brandingGreen-400/80 px-6 py-10 text-slate-50 backdrop-blur">
        <div className="text-7xl">Floral Artist</div>
        <p className="max-w-lg text-lg leading-8">
          RLM Affairs is a full-service florist serving North Georgia for 40
          years. Our award winning designers offer exquisite attention to
          detail. Whether it’s a single rose or decor for an entire Gala every
          bloom is hand picked and sourced eco friendly.
        </p>
      </div>
    </div>
  );
};
