
import { Check, ExternalLink, Play, Globe, Video, Youtube } from "lucide-react";

const OnirixCase = () => {
  const contributions = [
    "Led a product-led growth (PLG) strategy that drove a 10x increase in ARR between 2020 and 2024.",
    "Designed and implemented GTM and pricing strategies that boosted ARPU 300% over the same period.",
    "Adapting product features and Revenue team strategies to get a 3,5x LTV increase.",
    "Led a cross-functional team of engineers and designers to build digital products and templates resulting in an average NPS of 80%+ since 2023.",
    "Creation of onboarding flows to accelerate activation and time-to-value, increasing free-to-paid conversion.",
    "Developed and implemented a comprehensive Scoring System to assess user acquisition quality, activation, and conversion.",
    "Introduced experimentation culture through A/B testing, resulting in improved feature adoption and retention KPIs.",
    "Support a comprehensive marketing strategy (SEO, SEM, events, webinars, demos), creating 100+ content pieces and attending 20+ corporate events."
  ];

  const contentExamples = [
    {
      title: "Training Modules for Formative Experiences",
      url: "https://drive.google.com/file/d/1PdQnkMLce4mBdwxcBBCODDcg9ScyVCjL/view?usp=share_link",
      type: "Loom Tutorial",
      icon: "loom"
    },
    {
      title: "Product Release Showcase",
      url: "https://drive.google.com/file/d/1bVD4h_BI3OH2kkxCjq-xOsjWtUQxNvDn/view?usp=share_link",
      type: "Loom Demo",
      icon: "loom"
    },
    {
      title: "Quick Tips (In-Product Videos)",
      url: "https://drive.google.com/file/d/1EbFlB1VYHbkl2sMngqvifgdZzomXFn33/view?usp=share_link",
      type: "Loom Tips",
      icon: "loom"
    },
    {
      title: "AI Assistant for WebAR Creation (Spanish version)",
      url: "https://www.youtube.com/watch?v=Bv79o8Wy1qo",
      type: "YouTube",
      icon: "youtube"
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "loom":
        return <Video className="w-6 h-6 text-primary" />;
      case "youtube":
        return <Youtube className="w-6 h-6 text-primary" />;
      default:
        return <Play className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="onirix" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Use-case: Onirix</h2>
          <p className="text-xl text-muted-foreground mb-6">Leading global Web AR platform transformation</p>
          
          {/* Onirix Website Link */}
          <div className="mb-8">
            <a
              href="https://www.onirix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Visit Onirix Platform</span>
              <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contributions */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {contributions.map((contribution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/10">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{contribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Block */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="p-6 rounded-lg border border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-foreground">Technical Documentation</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Responsible for the technical documentation of the product and its updating, as well as for the communication of the improvements included in each version deployment.
            </p>
            <a
              href="https://docs.onirix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Visit Documentation <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content Examples */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Content Examples</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contentExamples.map((content, index) => (
              <a
                key={index}
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {getIcon(content.icon)}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-1">{content.title}</h4>
                  <span className="text-sm text-muted-foreground">{content.type}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnirixCase;
