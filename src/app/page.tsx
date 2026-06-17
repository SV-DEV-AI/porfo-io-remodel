import Hero from "@/components/sections/Hero";
import StoryTimeline from "@/components/sections/StoryTimeline";
import CaseStudyShineora from "@/components/sections/CaseStudyShineora";
import CaseStudyElize from "@/components/sections/CaseStudyElize";
import SkillsInteractive from "@/components/sections/SkillsInteractive";
import PerspectiveChoice from "@/components/sections/PerspectiveChoice";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <Hero />
      <StoryTimeline />
      <CaseStudyShineora />
      <CaseStudyElize />
      <SkillsInteractive />
      <PerspectiveChoice />
      <Contact />
    </main>
  );
}
