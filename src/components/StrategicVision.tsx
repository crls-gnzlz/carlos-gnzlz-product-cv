
const StrategicVision = () => {
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

  return (
    <section id="strategic-vision" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-medium text-foreground mb-4">Turning strategic vision into products that make a difference</h2>
        </div>

        {/* Video + Metrics Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Video Section */}
          <div className="bg-white rounded-lg p-8">
            <video
              className="w-full h-[450px] rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              style={{ border: 'none' }}
            >
              <source src="https://www.onirix.com/wp-content/themes/onirix-sixteen-child/videos/video-home--industry.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-muted-foreground text-sm mt-3 text-center">Onirix: Web AR SaaS platform</p>
          </div>

          {/* Metrics Section */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div key={index} className="p-6 rounded-lg border border-border bg-card">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
                <p className="text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicVision;
