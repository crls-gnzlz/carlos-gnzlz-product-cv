
const OnirixCase = () => {
  const metrics = [
    {
      title: "Business Model Transformation",
      value: "90%",
      description: "of revenue from licensing in 2024 (under 10% in 2020)"
    },
    {
      title: "ARR Growth",
      value: "10x",
      description: "ARR growth between 2020 and 2024"
    },
    {
      title: "Global Reach",
      value: "100+",
      description: "recurrent clients in 25+ countries"
    }
  ];

  const contributions = [
    "Drove 10x ARR growth (2020-2024)",
    "Led GTM and pricing strategies (ARPU from <100€ to 300€)",
    "Improved user activation and conversion (60%+ improvement)",
    "Managed scoring system (user quality tracking improved from <10% to 90%)",
    "NPS consistently >80% since 2023",
    "Led onboarding redesign and implemented A/B testing for adoption",
    "Created and maintained technical documentation (https://docs.onirix.com)",
    "Supported growth via content, events, SEO, webinars"
  ];

  const contentExamples = [
    {
      title: "AI Assistant for WebAR Creation",
      url: "https://www.youtube.com/watch?v=Bv79o8Wy1qo",
      type: "YouTube"
    },
    {
      title: "Training Modules for Formative Experiences",
      url: "https://www.loom.com/share/408304aa8e5b4983bcd27ac2270dc529?sid=fb4f1aef-dae2-4b06-bd5e-0a68f7200ff5",
      type: "Loom Tutorial"
    },
    {
      title: "Product Release Showcase",
      url: "https://www.loom.com/share/408304aa8e5b4983bcd27ac2270dc529?sid=3ce11d2d-bc8b-4446-bed0-471c38ba28fd",
      type: "Loom Demo"
    },
    {
      title: "Quick Tips (In-Product Videos)",
      url: "https://www.loom.com/share/f106f5763e4d41fea188d654fd4d1029?sid=3a7d9ce5-99cb-4a8e-a1a2-2894a7df2f8c",
      type: "Loom Tips"
    }
  ];

  return (
    <section id="onirix" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Use-case: Onirix</h2>
          <p className="text-xl text-muted-foreground mb-8">Leading Web AR platform transformation</p>
          
          {/* Product Video */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-lg p-8">
            <video 
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              poster="https://www.onirix.com/wp-content/themes/onirix-sixteen-child/images/video-poster.jpg"
            >
              <source src="https://www.onirix.com/wp-content/themes/onirix-sixteen-child/videos/video-home--industry.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Contributions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">My Contributions as Lead Product Manager</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {contributions.map((contribution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/10">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{contribution}</p>
              </div>
            ))}
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
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary">{content.type}</span>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{content.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnirixCase;
