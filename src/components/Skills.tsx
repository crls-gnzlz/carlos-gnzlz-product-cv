
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Product Strategy",
      skills: ["GTM", "Opportunity Identification", "Long-term Vision", "Partnerships"]
    },
    {
      category: "Cross-functional Leadership",
      skills: ["Engineering Teams", "UX Teams", "Marketing", "Customer Success", "Sales"]
    },
    {
      category: "Agile Roadmap Planning",
      skills: ["JIRA", "Google Sheets", "Excel", "Kanban / Scrum boards", "Impact / effort matrix", "OKR alignment"]
    },
    {
      category: "Engagement & Activation",
      skills: ["KPI-driven", "NPS", "Onboarding completion", "PLG Tactics", "Scoring systems"]
    },
    {
      category: "Analytics",
      skills: ["Mixpanel", "Chartmogul", "Google Analytics", "Excel"]
    },
    {
      category: "Docs & Content",
      skills: ["Grav CMS", "Sendgrid for Onboarding", "Webinars", "Tutorials", "Presentations", "Loom"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Core Skills</h2>
          <p className="text-xl text-muted-foreground">Expertise across product management and growth disciplines</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
