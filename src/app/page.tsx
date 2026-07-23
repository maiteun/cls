import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Curriculum from "@/components/Curriculum";
import Motivation from "@/components/Motivation";
import Recruit from "@/components/Recruit";
import Taskbar from "@/components/Taskbar";

export default function Home() {
  return (
    <main className="pb-10">
      <Hero />
      <TargetAudience />
      <Curriculum />
      <Motivation />
      <Recruit />
      <Taskbar />
    </main>
  );
}
