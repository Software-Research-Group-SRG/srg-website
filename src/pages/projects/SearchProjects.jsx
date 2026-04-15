import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import allProjects from '../../data/projects.json';

const SEARCH_PROJECTS = allProjects;


function SearchProjects({ projects = SEARCH_PROJECTS }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  
  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return projects;
    return projects.filter((project) =>
      project.title.toLowerCase().includes(normalized)
    );
  }, [projects, query]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16 px-4">
      
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white tracking-[0.1em] mb-3"
          style={{ fontFamily: 'var(--font-family-title, sans-serif)' }}
        >
          OUR PROJECTS
        </h2>
        <div 
          className="flex items-center justify-center text-xs md:text-sm tracking-widest font-mono"
          style={{ color: 'var(--text-title, #3185FF)' }}
        >
          <span className="opacity-80">------------- //</span>
          <span className="ml-2 uppercase">004 - CHECK ALL PROJECT</span>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center w-full max-w-2xl gap-4 z-10">
        
        {/* Search Bar */}
        <div className="flex-1 flex items-center bg-[#f2f1f6] rounded-full px-5 py-3">
          {/* Hamburger Menu Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-500 mr-3 shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects..."
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none w-full"
          />

          {/* Search Glass Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-500 ml-3 shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>

      {/* Results Area */}
      <div className="w-full max-w-2xl mt-6 h-10 overflow-y-auto"> 
        {query && (
          <div className="flex flex-wrap gap-2 justify-center py-2">
            {filteredProjects.map((project) => (
              <span 
                key={project.id} 
                className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => navigate(`/projects/${project.id}`)}
              > 
                {project.title}
              </span>
            ))}
            {!filteredProjects.length && (
              <span className="text-gray-400 text-sm">No projects found.</span>
            )}
          </div>
        )}
      </div>

    </section>
  );
}

export default SearchProjects;