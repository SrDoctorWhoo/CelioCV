import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />

      {/* AQUI COMEÇAM OS BLOCOS NOVOS */}
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />

      {/* SEÇÕES QUE JÁ EXISTIAM */}
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
