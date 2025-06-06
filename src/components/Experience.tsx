
const Experience = () => {
  const experiences = [
    {
      company: "Onirix",
      period: "2019 – Present",
      role: "Co-founder & Lead Product Manager",
      description: "Leading product strategy and growth for a Web AR platform. Key contributions include 10x ARR growth, global expansion to 25+ countries, and successful PLG implementation.",
      highlights: [
        "Co-founded leading Web AR platform",
        "Drove 10x ARR growth (2020-2024)",
        "Implemented PLG strategy achieving 90%+ recurring revenue",
        "Global reach: 100+ clients in 25+ countries"
      ]
    },
    {
      company: "Neosentec",
      period: "2014 – 2018",
      role: "Co-founder, Innovation & Operations Manager",
      description: "Focused on wearable tech, AR, and client solutions. Led innovation initiatives and operational excellence.",
      highlights: [
        "Co-founded wearable tech company",
        "Specialized in AR and emerging technologies",
        "Managed client solutions and operations",
        "Drove innovation strategy"
      ]
    },
    {
      company: "Sngular",
      period: "2012 – 2015",
      role: "Software Developer",
      description: "Full-stack development with focus on back-end and front-end technologies.",
      highlights: [
        "Back-end development",
        "Front-end development",
        "Full-stack solutions",
        "Technical implementation"
      ]
    },
    {
      company: "Cajastur & ASAC",
      period: "2010 – 2011",
      role: "Junior Developer",
      description: "Front-end development and database management.",
      highlights: [
        "Front-end development",
        "Database management",
        "Early career development",
        "Technical foundations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">Professional journey from developer to product leader</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {exp.period.split(' ')[0]}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-primary mb-3">{exp.company}</h4>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
