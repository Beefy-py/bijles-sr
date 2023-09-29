import HeroComponent from "@/components/hero.component";
import FeaturesComponent from "@/components/features.component";
import CoursesComponent from "@/components/courses.component";

export default function Home() {
  return (
    <div className="body max-w-screen-2xl px-5 lg:px-10 xl:px-20">
      <HeroComponent />
      <FeaturesComponent />
      <CoursesComponent />
    </div>
  );
}
