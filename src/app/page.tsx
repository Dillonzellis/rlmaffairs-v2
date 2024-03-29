import { CTAHome } from "@/components/CTAHome";
import { Feat } from "@/components/Feat";
import { FullWidthFeat } from "@/components/FullWidthFeat";
import { HomeSlider } from "@/components/HomeSlider";
import { MarqueeSection } from "@/components/MarqueeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Section } from "@/components/Section";
import { SmallFeats } from "@/components/SmallFeats";
import { NavBar } from "@/components/nav/Navbar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

// TODO: responsive

export default function Home() {
  return (
    <main className="">
      <div>
        <NavBar />
      </div>
      <Image
        src="/home-hero-placeholder.jpg"
        alt="hero"
        width={1280}
        height={835}
      />

      <MaxWidthWrapper>
        {/* TODO: add leaves */}
        <Section>
          <div className="flex items-center gap-12">
            <div>
              <h1 className="pb-2 text-5xl">
                Welcome to{" "}
                <span className="text-brandingGold-400">RLM Affairs</span>
              </h1>
              <Button variant="link" className="gap-1.5 pl-0 text-xl" asChild>
                <a href="https://hello.dubsado.com/public/form/view/5afe45144f411345f6129204">
                  Book a Tour
                  <MoveRight className="h-6 w-6" />
                </a>
              </Button>
            </div>
            <Image src="/logo-gold.png" alt="logo" width={384} height={384} />
          </div>
        </Section>
        <Section>
          <SmallFeats />
        </Section>
        <Section>
          <CTAHome />
        </Section>
        <Section>
          <Feat
            imgLeft
            title="Venue Feature"
            content="Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an entire
            Gala every bloom is hand picked and sourced eco friendly. Our retail
            storefront offers modern & unique items keeping everyone in mind"
            btnLabel="Book a Tour"
            btnHref="/"
            imageSrc="/venue-feat.jpg"
            imageAlt=""
          />
        </Section>
      </MaxWidthWrapper>
      <Section>
        <FullWidthFeat />
      </Section>
      <Section>
        <MaxWidthWrapper>
          <Feat
            title="Renowned Catering"
            content="Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an entire
            Gala every bloom is hand picked and sourced eco friendly. Our retail
            storefront offers modern & unique items keeping everyone in mind"
            btnLabel="Book a Tour"
            btnHref="/"
            imageSrc="/catering-feat.jpg"
            imageAlt=""
          />
        </MaxWidthWrapper>
      </Section>
      <Section>
        <MaxWidthWrapper>
          <HomeSlider />
        </MaxWidthWrapper>
      </Section>
      <Section>
        <MarqueeSection />
      </Section>
    </main>
  );
}
