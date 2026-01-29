import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4">
        <Hero />
        <Highlights />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
