import { Navbar } from "@/components/navbar";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function CVPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <Navbar />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
