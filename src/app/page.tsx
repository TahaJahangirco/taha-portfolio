import { Background } from "@/components/portfolio/background";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { Services } from "@/components/portfolio/services";
import { Work } from "@/components/portfolio/work";
import { Process } from "@/components/portfolio/process";
import { Stack } from "@/components/portfolio/stack";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col grain">
      <Background />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
