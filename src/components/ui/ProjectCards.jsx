import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCards({ project }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col overflow-hidden rounded-tl-[40px] rounded-br-[40px] border-[3px] border-[#3185FF] bg-black shadow-[0_0_20px_rgba(49,133,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(49,133,255,0.4)]"
    >
      <div className="relative flex h-48 w-full overflow-hidden border-b-[3px] border-[#3185FF] bg-slate-950 sm:h-56">
        {project.images && project.images.length > 0 && (
          <img
            src={`/assets/project-cover-picture/${project.images[0]}`}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        
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
