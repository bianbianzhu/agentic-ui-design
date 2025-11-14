export default function Features() {
  const features = [
    {
      number: "01",
      title: "Adaptive Learning Paths.",
      description:
        "Our AI-powered platform analyzes each student's learning style, pace, and comprehension to create personalized pathways. Real-time adjustments ensure optimal engagement and knowledge retention.",
    },
    {
      number: "02",
      title: "Real-Time Analytics.",
      description:
        "Comprehensive dashboards provide instant insights into student performance, engagement metrics, and learning outcomes. Make data-driven decisions to improve educational strategies.",
    },
    {
      number: "03",
      title: "Collaborative Workspace.",
      description:
        "Enable seamless collaboration between students and educators with integrated tools for discussions, assignments, and peer learning. Foster a connected learning community.",
    },
    {
      number: "04",
      title: "Content Library.",
      description:
        "Access thousands of curated lessons, interactive exercises, and multimedia resources. Our growing library covers all subjects and grade levels with expert-created content.",
    },
  ];

  return (
    <section className="px-[3.3vw] py-32" id="features">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-32">
        <div className="text-[3.5rem] font-normal tracking-wide">FEATURES</div>

        <div className="flex flex-col gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 py-12 border-t border-gray-300 ${
                index === features.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="text-4xl font-light max-w-[400px] shrink-0">
                {feature.number}. {feature.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 font-light max-w-[500px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
