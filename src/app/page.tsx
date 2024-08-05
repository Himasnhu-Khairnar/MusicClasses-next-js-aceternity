import {FeaturedCourses}  from "@/components/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import {AnimationScrolling} from "@/components/AnimationScrolling";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinars from '@/components/Webinar'
import Instructors from "@/components/Instructors";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black/[0.97] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <AnimationScrolling/>
      <MovingCards/>
      <UpcomingWebinars/>
      <Instructors/>
     
    </main>
  );
}
