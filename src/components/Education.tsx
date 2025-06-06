
import { Award, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Awards</h2>
          <p className="text-xl text-muted-foreground">Academic foundation and recognition</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-foreground">MSc Computer Engineer</h4>
                <p className="text-muted-foreground">University of Oviedo (Spain)</p>
                <p className="text-sm text-muted-foreground">June 2011</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground">
                  <strong>Final thesis:</strong> Optimization problems
                </p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Awards</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-foreground">Best Tech-Based Business Project</h4>
                <p className="text-muted-foreground">CEEI – Neosentec</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground">Mobile for Good Award</h4>
                <p className="text-muted-foreground">Vodafone Foundation – Project Lazzus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
