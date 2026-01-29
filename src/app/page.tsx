import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <>
      {/* HERO pode ficar full */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
      <Navbar />
      <Hero /></div>

      {/* CONTAINER GLOBAL */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Highlights />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CTA />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
