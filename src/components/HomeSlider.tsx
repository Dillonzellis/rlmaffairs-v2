import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// TODO: add more slides

const SlideImage = () => {
  return (
    <Image
      src="/v-hero-slide.jpg"
      alt=""
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
        <CarouselItem>
          <SlideImage />
        </CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
        <CarouselItem>Slide 4</CarouselItem>
      </CarouselContent>
      <CarouselNext>Next</CarouselNext>
    </Carousel>
  );
};
