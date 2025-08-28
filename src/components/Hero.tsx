
import { MapPin, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[50vh] pt-24 md:pt-20 flex items-center justify-center bg-white pb-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 animate-fade-in">
                Carlos González
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in">
                Digital Product Leader – B2B SaaS & PLG Expert
              </p>
              <div className="flex flex-col gap-4 text-muted-foreground animate-fade-in">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Barcelona</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:carlos.4g@gmail.com" className="hover:text-primary transition-colors">
                    carlos.4g@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={18} />
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
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg animate-fade-in">
                <img 
                  src="/lovable-uploads/768c694f-6a04-4b0c-aac6-57242a92c669.png" 
                  alt="Carlos González - Digital Product Leader"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
