import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import StoryTimeline from "@/components/sections/StoryTimeline";
import CaseStudyStudentPortal from "@/components/sections/CaseStudyStudentPortal";
import CaseStudyShineora from "@/components/sections/CaseStudyShineora";
import CaseStudyElize from "@/components/sections/CaseStudyElize";
import SkillsInteractive from "@/components/sections/SkillsInteractive";
import PerspectiveChoice from "@/components/sections/PerspectiveChoice";
import Certifications from "@/components/sections/Certifications";
import LeetCodeExperience from "@/components/sections/LeetCodeExperience";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      <Hero />
      <Experience />
      <StoryTimeline />
      <CaseStudyStudentPortal />
      <CaseStudyShineora />
      <CaseStudyElize />
      <SkillsInteractive />
      <PerspectiveChoice />
      <Certifications />
      <LeetCodeExperience />
      <CurrentlyBuilding />
      <Contact />
    </main>
  );
}
