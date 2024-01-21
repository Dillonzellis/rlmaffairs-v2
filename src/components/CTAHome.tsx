import Image from "next/image";

const BorderDiv = () => {
  return (
    <div className="max-w-[112px] flex-1 border-t-2 border-gray-300"></div>
  );
};

export const CTAHome = () => {
  return (
    <div className="mx-auto text-center">
      <div className="text-5xl">Elevate Your Experience</div>
      <div className="flex items-center justify-center">
        <BorderDiv />
        <div className="mx-4">
          <Image src="/leaves-1.png" alt="" height={64} width={102} />
        </div>
        <BorderDiv />
      </div>
      <p className="mx-auto max-w-lg leading-8">
        Discover a realm where intricate design meets natural beauty. Every
        corner of RLM Affairs is meticulously crafted, ensuring your event is
        nothing short of extraordinary.
      </p>
    </div>
  );
};
