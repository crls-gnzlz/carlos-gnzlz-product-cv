
import { Globe, Users, TrendingUp } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Globe,
      title: "Global AR Platform Co-founder",
      description: "Co-founder of one of the lead platforms in Web AR (augmented reality) in the global market, used in more than 120 countries, with recurrent customers in more than 25."
    },
    {
      icon: Users,
      title: "Massive User Engagement",
      description: "Drove global user engagement with nearly 80k AR experiences created and over 3M consumed worldwide, optimizing activation and retention through personalized onboarding and product education."
    },
    {
      icon: TrendingUp,
      title: "Product-Led Growth",
      description: "Leading and implementing a product-led growth (PLG) strategy to transition from a service-based company to a product-driven business with a 90%+ revenue based on recurrent subscriptions."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Key Achievements</h2>
          <p className="text-xl text-muted-foreground">Transforming businesses through innovative product leadership</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <achievement.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
