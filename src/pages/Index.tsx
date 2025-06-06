
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import OnirixCase from "@/components/OnirixCase";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Achievements />
        <Skills />
        <OnirixCase />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
