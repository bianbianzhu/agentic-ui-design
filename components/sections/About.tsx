export default function About() {
  return (
    <section className="px-[3.3vw] py-24" id="about">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 mb-16 overflow-x-auto pb-8 justify-between">
          {/* Brand Colors */}
          <div className="flex gap-6 shrink-0">
            {/* Blue Glass Ball */}
            <div className="relative w-[165px] h-[165px] shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 via-blue-500/35 to-blue-700/50 backdrop-blur-md shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.3),inset_5px_5px_15px_rgba(255,255,255,0.2)]"></div>
              <div className="absolute top-[20%] left-[25%] w-[40px] h-[40px] rounded-full bg-white/30 blur-xl"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[120px] h-[20px] bg-blue-600/20 rounded-full blur-2xl"></div>
            </div>

            {/* Purple Glass Ball */}
            <div className="relative w-[165px] h-[165px] shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/40 via-purple-500/35 to-purple-700/50 backdrop-blur-md shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.3),inset_5px_5px_15px_rgba(255,255,255,0.2)]"></div>
              <div className="absolute top-[20%] left-[25%] w-[40px] h-[40px] rounded-full bg-white/30 blur-xl"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[120px] h-[20px] bg-purple-600/20 rounded-full blur-2xl"></div>
            </div>

            {/* Black Glass Ball */}
            <div className="relative w-[165px] h-[165px] shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600/40 via-gray-800/35 to-black/50 backdrop-blur-md shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.15)]"></div>
              <div className="absolute top-[20%] left-[25%] w-[40px] h-[40px] rounded-full bg-white/20 blur-xl"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[120px] h-[20px] bg-black/25 rounded-full blur-2xl"></div>
            </div>
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
