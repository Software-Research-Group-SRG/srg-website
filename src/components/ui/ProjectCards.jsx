import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCards({ project }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col overflow-hidden rounded-tl-[40px] rounded-br-[40px] border-[3px] border-[#3185FF] bg-black shadow-[0_0_20px_rgba(49,133,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(49,133,255,0.4)]"
    >
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b-[3px] border-[#3185FF] bg-[radial-gradient(circle_at_top,_rgba(53,164,185,0.28),_transparent_55%),linear-gradient(135deg,_rgba(3,7,18,0.96),_rgba(15,23,42,0.92)_55%,_rgba(30,64,175,0.55))] sm:h-56">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(53,164,185,0.08)_45%,transparent_100%)]" />
        <div className="relative z-10 flex w-full flex-col justify-between gap-4 px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.42em] text-[#35A4B9]">
              Project Placeholder
            </span>
            <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xs font-semibold tracking-[0.3em] text-white/70 sm:flex">
              SRG
            </div>
          </div>

          <div className="max-w-[14rem]">
            <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">
              {project.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[#35A4B9]/40 bg-[#35A4B9]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[#7dd7e7]">
              Preview
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/70">
              Reusable Card
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3
          className="mb-4 text-center text-xl font-bold sm:text-2xl"
          style={{ color: 'var(--text-title2, #35A4B9)' }}
        >
          {project.title}
        </h3>

        <p className="mb-8 text-center text-sm leading-relaxed text-gray-200 line-clamp-5">
          {project.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div className="flex w-[76px] flex-wrap gap-1.5">
            {Array.from({ length: project.teamSize }).map((_, index) => (
              <div
                key={index}
                className="h-5 w-5 rounded-full bg-[#D9D9D9] sm:h-6 sm:w-6"
              />
            ))}
          </div>

          <button
            onClick={() => {
              navigate(`/projects/${project.id}`);
            }}
            className="cursor-pointer rounded-full px-6 py-1.5 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-blue-600/30"
            style={{
              backgroundColor: 'rgba(49, 133, 255, 0.15)',
              boxShadow: 'inset 0 0 10px rgba(49, 133, 255, 0.2)',
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
