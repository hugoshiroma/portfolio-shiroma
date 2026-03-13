import Hero from "@/components/sections/Hero";
import PersonalInfo from "@/components/sections/PersonalInfo";
import JourneyTimeline from "@/components/sections/JourneyTimeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PersonalInfo />
      <JourneyTimeline />
    </div>
  );
}
