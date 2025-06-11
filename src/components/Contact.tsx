
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <footer id="contact" className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Contact Info Column */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary-foreground mb-6">Let's Connect</h2>
            
            <div className="grid gap-4 max-w-md">
              {/* Email */}
              <a
                href="mailto:carlos.4g@gmail.com"
                className="group p-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-foreground">Email</h3>
                    <p className="text-primary-foreground/80 text-sm">carlos.4g@gmail.com</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/carlos-gnzlz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <Linkedin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-foreground">LinkedIn</h3>
                    <p className="text-primary-foreground/80 text-sm">Connect with me professionally</p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/crls-gnzlz"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <Github size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-foreground">GitHub</h3>
                    <p className="text-primary-foreground/80 text-sm">Check out my projects</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Column */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <p className="text-primary-foreground/90 mb-4">Ready to discuss your next product challenge?</p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="mailto:carlos.4g@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
