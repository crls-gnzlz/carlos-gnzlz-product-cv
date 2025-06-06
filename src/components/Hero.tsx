
import { MapPin, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Carlos González
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Digital Product Leader – B2B SaaS & PLG Expert
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Barcelona</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a href="mailto:carlos.4g@gmail.com" className="hover:text-primary transition-colors">
                carlos.4g@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={20} />
              <a 
                href="https://www.linkedin.com/in/carlos-gnzlz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
