
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">Ready to discuss your next product challenge</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {/* Email */}
            <a
              href="mailto:carlos.4g@gmail.com"
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground">carlos.4g@gmail.com</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/carlos-gnzlz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-muted-foreground">Connect with me professionally</p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Barcelona, Spain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <a href="mailto:carlos.4g@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
