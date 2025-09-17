
import HeroHeadline from "@/components/HeroHeadline";
import AboutPage from "./about/page";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceGrid from "@/components/ExperienceGrid";
import TechStackSection from "@/components/TechStackCard";
import RecentProjects from "@/components/Projects";
import TestimonialsJayden from "@/components/Testimonials";
import FAQJaydenDark from "@/components/Faq-Page";
import LetsChatPage from "./lets-chat/page";
import ContactFormCard from "@/components/ContactFormCard";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 sm:gap-20 md:gap-24">
      {/* Home Section */}
      <div id="home" className="scroll-mt-24 mb-16 max-[550px]:mb-10 max-[550px]:border-2 max-[550px]:border-orange-400 max-[550px]:rounded-xl max-[550px]:mx-1">
        <HeroHeadline />
      </div>

      {/* About Me Section */}
      <div id="about" className="scroll-mt-24 mb-16 max-[550px]:mb-10">
        <AboutPage />
      </div>

      {/* My Education Section */}
      <div id="education" className="scroll-mt-24 mb-16 max-[550px]:mb-10">
        <EducationTimeline />
      </div>

      {/* My Experience Section */}
      <div id="experience" className="scroll-mt-24 mb-16 max-[550px]:mb-10">
        <ExperienceGrid />
      </div>

      {/* My Techstack Section */}
      <div id="techstack" className="scroll-mt-24 mb-16 max-[550px]:mb-10">
        <TechStackSection />
      </div>

      {/* My Approach Section */}
      {/* <div id="approach" className="scroll-mt-24 mb-24">
        <section className="relative isolate overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-24">
          <h1 className="bg-clip-text text-center text-[72px] font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500 mb-8">My Approach</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl text-center mb-8">I believe in a user-centered, iterative process—combining creativity, empathy, and technical skill to deliver impactful digital experiences.</p>
          <ul className="list-disc text-white/80 text-lg max-w-2xl mx-auto space-y-4 pl-6">
            <li>Empathize with users and stakeholders</li>
            <li>Prototype and iterate quickly</li>
            <li>Focus on accessibility and performance</li>
            <li>Collaborate transparently</li>
            <li>Deliver clean, maintainable code</li>
          </ul>
        </section>
      </div> */}

      {/* My Projects Section */}
      <div id="projects" className="scroll-mt-24 mb-24">
        <RecentProjects />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="scroll-mt-24 mb-24">
        <TestimonialsJayden />
      </div>

      {/* FAQ Section */}
  <div id="faq" className="scroll-mt-24 mb-24 max-[550px]:mb-6">
        <FAQJaydenDark />
      </div>

      {/* Chat Section
      <div id="chat" className="scroll-mt-24 mb-24">
        <LetsChatPage /> */}
      {/* </div> */}

      {/* Contact Section */}
      <div id="contact" className="scroll-mt-24 mb-24">
  <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] max-[550px]:w-[98vw] max-[550px]:max-w-none max-[550px]:mx-auto max-[550px]:mr-2 px-6 py-8 md:py-6">
          <div className="mx-auto w-full max-w-4xl">
            <div className="relative overflow-visible rounded-[28px] border border-white/12 bg-white/[0.045] p-6 md:p-10 backdrop-blur-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,.6)]">
              <h1 className="text-center text-[72px] max-[550px]:text-4xl font-rajdhani tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-500">
                Contact Me
              </h1>
              <p className="mt-3 mx-auto max-w-3xl text-center text-white/75">
                Based in Stockholm (CET/CEST). I usually reply within 24 hours.
              </p>
              <div className="mt-10">
                <ContactFormCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}