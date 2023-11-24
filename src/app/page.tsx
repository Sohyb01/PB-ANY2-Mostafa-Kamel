import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>
      {/* <!-- Introduction Section --> */}
      <IntroSection />

      {/* <!-- Portfolio (Projects?) --> */}
      <ProjectsSection />

      {/* <!-- Education --> */}
      <EducationSection />

      {/* <!-- Experience (and Activities) --> */}
      <ExperienceSection />

      {/* <!-- Testimonials (Recommendations?) --> */}
      <TestimonialsSection />
    </main>
  );
}
