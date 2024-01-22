import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    src: "/v-hero-slide.jpg",
    alt: "",
  },
  {
    src: "/slide-2.jpg",
    alt: "",
  },
  {
    src: "/slide-3.jpg",
    alt: "",
  },
  {
    src: "/slide-4.jpg",
    alt: "",
  },
] as const;

type slidesType = (typeof slides)[number];

const SlideImage = ({ ...props }: slidesType) => {
  return (
    <Image
      {...props}
      width={1016}
      height={610}
      className="w-full rounded-md shadow-lg"
    />
  );
};

export const HomeSlider = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full"
    >
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={i}>
            <SlideImage {...slide} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext>Next</CarouselNext>
    </Carousel>
  );
};
