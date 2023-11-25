import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import {
  educationData,
  experienceData,
  projectsData,
  skillsData,
  testimonialsData,
} from "./lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <!-- Introduction Section --> */}
      <IntroSection />

      {/* <!-- Education --> */}
      {educationData.length && <EducationSection />}

      {/* <!-- Experience (and Activities) --> */}
      {experienceData.length && <ExperienceSection />}

      {/* <!-- Testimonials / Awards / Recommendations --> */}
      {testimonialsData.length && <TestimonialsSection />}

      {/* Skills Section */}
      {skillsData.length && <SkillsSection />}

      {/* <!-- Portfolio (Projects?) --> */}
      {projectsData.length && <ProjectsSection />}

      {/* Contact (Footer) */}
      <ContactSection />
    </main>
  );
}
