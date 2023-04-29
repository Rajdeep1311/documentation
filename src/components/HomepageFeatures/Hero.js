import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 bg-hero-pattern bg-contain bg-no-repeat bg-bottom p-6 pb-0">
      <div className="flex flex-col items-center justify-center mx-auto max-w-prose">
        <p className="px-3 py-1 bg-slate-800 rounded-full z-10 lg:mb-3 mb-6">TCET Open Source</p>
        <h1 className="lg:text-7xl sm:text-6xl text-5xl text-center font-semibold z-10 lg:mb-6 mb-9">The Best Open Source Club</h1>
        <p className="sm:text-lg text-sm text-slate-400  text-center z-10 lg:mb-9 mb-12">
          Cras massa lectus lacinia urna nec felis facilisi a <br />
          interdum. Neque ipsum diam pharetra eu sed.
        </p>
        <button className="flex items-center justify-center gap-x-2 p-2 pl-4 md:mb-0 mb-3 border-b-2 border-indigo-700 shadow-1xl shadow-indigo-400 semibold rounded-full bg-indigo-600">
          View Projects
          <div className="bg-indigo-800 p-2 rounded-full">
            <img src={`/img/HeroImages/arrow-down.svg`} alt="arrow-down" />
          </div>
        </button>
      </div>
      <img src={`/img/HeroImages/hero-section-left.svg`} className="absolute lg:scale-100 sm:scale-75 scale-50 origin-left md:top-48 sm:top-44 top-28 left-0" alt="hero-section-left" />
      <img src={`/img/HeroImages/hero-section-center.svg`} className="mx-auto" alt="hero-section-center" />
      <img src={`/img/HeroImages/hero-section-right.svg`} className="absolute lg:scale-100 sm:scale-75 scale-50 origin-right md:top-56 sm:top-56 top-36 right-0" alt="hero-section-right" />
    </section>
  );
}
