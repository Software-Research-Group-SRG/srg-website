import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CurvedCarousel from '../../components/ui/CurvedCarousel';
import projectsData from '../../data/projects.json';

// Use the first 4 projects from our JSON as the featured ones
const FEATURED_PROJECTS = projectsData;

function ProjectPlaceholderSlide({ project, isActive }) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden border-x-[3px] border-[#1e40af] bg-[radial-gradient(circle_at_top,_rgba(53,164,185,0.28),_transparent_55%),linear-gradient(135deg,_rgba(3,7,18,0.96),_rgba(15,23,42,0.92)_55%,_rgba(30,64,175,0.55))] px-8 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] transition-[filter,opacity,transform] duration-500 ${
        isActive
          ? 'opacity-100 saturate-100 brightness-100'
          : 'opacity-80 saturate-75 brightness-75'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(53,164,185,0.08)_45%,transparent_100%)]" />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#35A4B9]">
            Project Placeholder
          </span>
          <h3 className="mt-4 max-w-md text-2xl font-bold uppercase tracking-[0.12em] text-white md:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold tracking-[0.3em] text-white/70 md:flex">
          SRG
        </div>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap gap-3">
        <span className="rounded-full border border-[#35A4B9]/40 bg-[#35A4B9]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#7dd7e7]">
          Preview
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70">
          Reusable Card
        </span>
      </div>

      {isActive && (
        <div className="relative z-10 ml-auto hidden rounded-lg border-r-2 border-[#35A4B9] bg-black/30 p-4 text-right backdrop-blur-sm md:block">
          <div className="pr-3">
            <span className="text-[10px] uppercase tracking-widest text-[#35A4B9]">
              | Placeholder
            </span>
            <br />
            <span className="mt-1 block text-xs tracking-widest text-gray-200">
              READY FOR REAL CONTENT
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturedProjectsCarousel({ projects = FEATURED_PROJECTS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <section className="relative z-10 flex w-full flex-col items-center overflow-hidden bg-transparent py-12">
      <div className="z-40 mb-8 text-center">
        <h2
          className="text-4xl font-bold uppercase tracking-widest md:text-5xl lg:text-6xl"
          style={{
            color: 'var(--text-title2, #35A4B9)',
            fontFamily: 'var(--font-family-title, monospace)',
          }}
        >
          {activeProject.title}
        </h2>
      </div>

      <CurvedCarousel
        items={projects}
        className="mb-8 h-[350px] w-full sm:h-[450px] lg:h-[500px]"
        onActiveIndexChange={setActiveIndex}
        onSwiper={setSwiperInstance}
        renderSlide={(project, index) => (
          <ProjectPlaceholderSlide
            project={project}
            isActive={index === activeIndex}
          />
        )}
      />

      <div className="relative z-40 flex items-center justify-center gap-6 md:gap-12">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition-all hover:scale-105 hover:bg-white/10 md:h-12 md:w-12"
        >
          <ChevronLeft size={24} strokeWidth={2.5} className="ml-[-2px]" />
        </button>

        <button
          type="button"
          onClick={() => navigate(`/projects/${activeProject.id}`)}
          className="h-12 cursor-pointer rounded-2xl bg-[#2563EB] px-10 text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 hover:bg-blue-600 md:h-14 md:px-16"
          style={{ fontFamily: 'var(--font-family, sans-serif)' }}
        >
          View
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white transition-all hover:scale-105 hover:bg-white/10 md:h-12 md:w-12"
        >
          <ChevronRight size={24} strokeWidth={2.5} className="mr-[-2px]" />
        </button>
      </div>

      <div className="relative z-40 mt-8 w-full max-w-3xl px-4">
        <div className="rounded-2xl border border-white/5 bg-[#000814]/70 p-6 shadow-[0_0_40px_rgba(0,10,30,0.8)] backdrop-blur-xl md:p-8">
          <p className="line-clamp-3 text-center text-xs leading-relaxed text-gray-300 md:text-sm md:leading-loose">
            {activeProject.description}
          </p>
        </div>
      </div>

      <div className="z-40 mt-8 flex items-center justify-center gap-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'h-4 w-4 scale-110 bg-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                : 'h-3 w-3 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjectsCarousel;
