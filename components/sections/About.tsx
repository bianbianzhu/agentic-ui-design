export default function About() {
  return (
    <section className="px-[3.3vw] py-24" id="about">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 mb-16 overflow-x-auto pb-8 justify-between">
          {/* Brand Colors */}
          <div className="flex gap-6 shrink-0">
            <div className="w-[165px] h-[165px] rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shrink-0"></div>
            <div className="w-[165px] h-[165px] rounded-full bg-gradient-to-br from-purple-600 to-purple-400 shrink-0"></div>
            <div className="w-[165px] h-[165px] rounded-full bg-gradient-to-br from-black to-gray-700 shrink-0"></div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6 shrink-0 min-w-[200px] ml-auto">
            <div className="text-6xl font-light tracking-tight">10+</div>
            <div className="text-lg font-light text-gray-600">
              Years of Experience
            </div>
            <div className="text-6xl font-light tracking-tight">20+</div>
            <div className="text-lg font-light text-gray-600">Countries Served</div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6 shrink-0 min-w-[400px]">
            <div className="text-6xl font-light tracking-tight">500K+</div>
            <div className="text-lg font-light text-gray-600">Active Students</div>
            <div className="text-6xl font-light tracking-tight">10K+</div>
            <div className="text-lg font-light text-gray-600">Educators</div>
          </div>
        </div>

        <p className="text-[2.64rem] leading-[1.1] font-light max-w-[65vw] mt-16">
          We build intelligent learning platforms that adapt to every student&apos;s
          journey. Our technology combines AI-powered personalization with
          intuitive design to create meaningful educational experiences that
          drive real results.
        </p>
      </div>
    </section>
  );
}
