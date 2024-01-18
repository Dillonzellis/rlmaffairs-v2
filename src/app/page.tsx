import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { NavBar } from "@/components/nav/Navbar";

export default function Home() {
  return (
    <main className="">
      <div>
        <div>
          <NavBar />
        </div>
        <Image
          src="/home-hero-placeholder.jpg"
          alt="hero"
          width={1280}
          height={835}
        />
      </div>
    </main>
  );
}
