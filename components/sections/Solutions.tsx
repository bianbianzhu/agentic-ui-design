export default function Solutions() {
  const solutions = [
    "K-12 SCHOOLS",
    "HIGHER ED",
    "CORPORATE TRAINING",
    "TUTORING CENTERS",
    "ONLINE COURSES",
    "BOOT CAMPS",
  ];

  const marginClasses = ["", "ml-12", "-ml-8", "ml-10", "-ml-4", "ml-6"];

  return (
    <section className="bg-black text-white px-[3.3vw] py-24" id="solutions">
      <div className="text-base font-normal tracking-[0.2em] mb-16 uppercase">
        SOLUTIONS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1700px] mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`text-[5.5rem] font-normal tracking-tighter leading-tight ${marginClasses[index]}`}
          >
            {solution}
          </div>
        ))}
      </div>
    </section>
  );
}
