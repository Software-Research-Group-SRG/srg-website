import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '@/components/ui/Pagination';
import SkillBadge from '@/components/ui/SkillBadge';
import ProjectModal from '@/components/ui/ProjectModal';

// Data imports
import membersData from '@/data/members.json';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/individualProjects.json';

// Local Custom Component to display Individual Projects aligning with ProjectCards.jsx visual
function IndividualProjectCard({ project, onClick }) {
    return (
        <div 
            onClick={onClick}
            className="flex flex-col h-full overflow-hidden rounded-[20px] border-[3px] border-[#3185FF] bg-black shadow-[0_0_20px_rgba(49,133,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(49,133,255,0.8)] relative cursor-pointer group"
        >
            
            {/* Image Box Match */}
            <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b-[3px] border-[#3185FF] bg-[radial-gradient(circle_at_top,_rgba(53,164,185,0.28),_transparent_55%),linear-gradient(135deg,_rgba(3,7,18,0.96),_rgba(15,23,42,0.92)_55%,_rgba(30,64,175,0.55))] sm:h-48 shrink-0">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(53,164,185,0.08)_45%,transparent_100%)]" />
                
                {project.images && project.images.length > 0 ? (
                    <img src={`/assets/project-cover-picture/${project.images[0]}`} alt={project.name} className="w-full h-full object-cover relative z-10" />
                ) : (
                    <div className="text-[#35A4B9] text-center relative z-10 flex flex-col items-center justify-center">
                        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto text-black font-bold text-3xl">!</div>
                    </div>
                )}
            </div>

            {/* Content matching the layout image */}
            <div className="flex flex-col flex-1 p-6 z-10 relative">
                <h3 className="text-[1.1rem] font-bold text-[var(--text-title2,#35A4B9)] mb-1 text-center sm:text-left tracking-wider">
                    {project.name || "Project Name"}
                </h3>
                
                <div className="text-[0.8rem] font-semibold text-white mb-4 text-center sm:text-left">
                    Role: <span className="font-normal text-gray-300">
                        {project.role && project.role.filter(Boolean).length > 0 
                            ? project.role.filter(Boolean).join(', ') 
                            : 'Front End Developer'
                        }
                    </span>
                </div>

                <ul className="list-disc pl-5 text-[0.85rem] leading-relaxed text-gray-200 space-y-1">
                    {project.description && project.description.length > 0 ? (
                        project.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))
                    ) : (
                        <li>Description of the project roles goes here.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

function BaseProfileDetails() {
  const navigate = useNavigate();   
  
  // Optional: Read from URL params if this route is updated to /profile/:id in the future
  const { id } = useParams();
  
  // Settings
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Sets project items to 2 per page natively
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Data Fetching and Fallback (default to shanella for exact match to screenshot behavior if no id is appended to route)
  const memberId = id || "shanella-cagulang";
  const member = useMemo(() => membersData.find(m => m.id === memberId) || membersData[0], [memberId]);
  
  const memberExperiences = useMemo(() => experienceData.find(e => e.id === member?.id)?.experiences || [], [member]);
  const memberProjects = useMemo(() => projectsData.find(p => p.id === member?.id)?.projects || [], [member]);

  // Pagination Logic Processing
  const totalPages = Math.ceil(memberProjects.length / itemsPerPage) || 1;
  const currentProjects = memberProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
      setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newLimit) => {
      setItemsPerPage(newLimit);
      setCurrentPage(1); // Reset to first page
  };
  
  // Fail-Safe Return Early
  if (!member) {
      return <div className="text-white text-center py-20 font-bold">Member Profile Not Found.</div>;
  }

  return (
    <article className="max-w-[1600px] mx-auto sm:px-4 py-7 text-[var(--text-title1)]">
        <button className="back-button" onClick={() => navigate(-1)}>
            Back
        </button>

        {/* Header Section */}
        <header className="
            relative overflow-hidden 
            mt-8 p-5 
            backdrop-blur-sm 
            border-4 border-[var(--border-color)] 
            rounded-[30px_0px_30px_0px] 
            shadow-[0_0_20px_var(--border-color)]
        ">
            <div className='flex items-center'>
                <img 
                    src={member.photo || "https://via.placeholder.com/150"} 
                    alt={member.name} 
                    className="
                        w-[130px] h-[130px] 
                        rounded-[25px_4px_25px_4px] 
                        mr-[25px] 
                        object-cover 
                        border-2 border-[var(--border-color)] 
                        shadow-[0_0_15px_var(--img-shadow-border)] 
                        brightness-110 contrast-110
                    "
                />

                <div className='flex flex-col'>
                    <div className="text-[1.2rem] font-medium leading-[1.2] mt-5">
                        <h1 style={{color: 'var(--text-main)' }} className="uppercase">
                            {member.name}
                        </h1>

                        <h2 style={{color: 'var(--text-title2)' }}>
                            {member.status === "intern" ? "SRG Intern" : "SRG 12th Generation - Member"}
                        </h2>

                        <p style={{color: 'var(--text-main)'}}>
                            Bachelor of Science in Information Technology
                        </p>
                    </div>

                    {/* Map Skills Component via Resuable UI File */}
                    <SkillBadge skills={member.skills} />
                </div>
            </div>
        </header>

        {/* This is the main content of profile details */}
        <div className="
            relative overflow-hidden 
            mt-8 p-5 
            backdrop-blur-sm 
            border-4 border-[var(--border-color)] 
            rounded-[30px_0px_30px_0px] 
            shadow-[0_0_20px_var(--border-color)]
            flex flex-col gap-6
        ">

            {/* ABOUT CONTENT */}
            <div className="flex items-start md:items-center gap-8 w-full py-4 border-b border-[var(--border-color)] border-opacity-30">
                {/* Left Side: The Label */}
                <h2 className="w-[150px] text-[1.2rem] font-bold text-[var(--text-main)] shrink-0 hidden md:block">
                    ABOUT
                </h2>

                {/* Right Side: The Content */}
                <div className="
                    flex-1 
                    text-[0.95rem] 
                    font-medium
                    leading-relaxed 
                    text-white 
                    opacity-95
                    relative 
                    overflow-hidden 
                    p-6 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    <h2 className="text-[1.2rem] font-bold text-[var(--text-main)] mb-3 block md:hidden">ABOUT</h2>
                    {member.about || "Third-year Bachelor of Science in Information Technology student with hands-on experience in frontend web development..."}
                </div>
            </div>

            {/* EXPERIENCE CONTENT */}
            <div className="flex items-start md:items-center gap-8 w-full py-4 border-b border-[var(--border-color)] border-opacity-30">
                {/* Left Side: The Label */}
                <h2 className="w-[150px] text-[1.2rem] font-bold text-[var(--text-main)] shrink-0 hidden md:block">
                    EXPERIENCE
                </h2>

                {/* Right Side: The Content */}
                <div className="
                    flex-1 
                    relative 
                    overflow-hidden 
                    p-6 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    <h2 className="text-[1.2rem] font-bold text-[var(--text-main)] mb-3 block md:hidden">EXPERIENCE</h2>
                    <div className="flex flex-col gap-6">
                        {memberExperiences.length > 0 ? (
                            memberExperiences.map((exp, index) => (
                                <div key={index} className="flex flex-col">
                                    <h3 className="text-[1.05rem] font-bold text-white mb-1">
                                        {exp.position || "Position Placeholder"}
                                    </h3>
                                    <p className="text-[0.9rem] font-bold text-[var(--text-main)] opacity-95">
                                        {exp.company || "Company Placeholder"} <span className="opacity-70 font-normal">| {exp.dateFrom || "Start Date"} – {exp.dateTo || "Present"}</span>
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="italic opacity-70 text-white">No experiences listed yet.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* PROJECTS CONTENT */}
            <div className="flex items-start md:items-center gap-8 w-full py-4">
                {/* Left Side: The Label */}
                <h2 className="w-[150px] text-[1.2rem] font-bold text-[var(--text-main)] shrink-0 hidden md:block pt-3">
                    PROJECTS
                </h2>

                {/* Right Side: The Content Wrapper */}
                <div className="
                    flex-1 
                    relative 
                    overflow-hidden 
                    p-6 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    <h2 className="text-[1.2rem] font-bold text-[var(--text-main)] mb-6 block md:hidden">PROJECTS</h2>
                    
                    {/* Render Filtered / Paginated Projects using local Custom Layout Matching the Spec */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                        {currentProjects.length > 0 ? (
                            currentProjects.map((proj, idx) => (
                                <IndividualProjectCard key={idx} project={proj} onClick={() => setSelectedProject(proj)} />
                            ))
                        ) : (
                            <p className="col-span-full italic opacity-70 text-white text-center">No projects to display.</p>
                        )}
                    </div>

                    {/* Client Side Pagination Element */}
                    <div className="flex justify-center border-t border-[var(--border-color)] border-opacity-50 pt-5 mt-auto">
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange} 
                            itemsPerPage={itemsPerPage}
                            onItemsPerPageChange={handleItemsPerPageChange}
                            itemsPerPageOptions={[1, 2, 4, 6]}
                        />
                    </div>
                </div>
            </div>

        </div>

        {/* Project Modal */}
        <ProjectModal 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            project={selectedProject} 
        />
    </article>
  );
}

export default BaseProfileDetails;