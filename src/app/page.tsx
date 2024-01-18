import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { NavBar } from "@/components/nav/Navbar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

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
        <section className="py-12">
          <div className="flex items-center gap-12">
            <div>
              <h1 className="text-5xl pb-2">
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
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
