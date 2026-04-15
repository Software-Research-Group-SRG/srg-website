import React from 'react';
import BaseModal from './BaseModal';

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    // Use a placeholder if no image exists
    const imageSrc = project.image ? `/assets/member-project/${project.image}` : null;

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title={project.name || "Project Details"}>
            <div className="flex flex-col gap-5">
                {/* Image Section */}
                {imageSrc ? (
                    <div className="w-full h-48 sm:h-64 rounded-[15px] overflow-hidden border-[3px] border-[var(--border-color)] shadow-[0_0_15px_var(--img-shadow-border)]">
                        <img src={imageSrc} alt={project.name} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <div className="w-full h-48 sm:h-64 rounded-[15px] overflow-hidden border-[3px] border-[var(--border-color)] shadow-[0_0_15px_var(--img-shadow-border)] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(53,164,185,0.28),_transparent_55%)]">
                        <div className="text-[var(--text-main)] text-xl font-bold opacity-50">No Image Available</div>
                    </div>
                )}

                {/* Role Details */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--text-title2)] mb-1">Role</h3>
                    <p className="text-[0.9rem] text-gray-200 font-medium">
                        {project.role && project.role.filter(Boolean).length > 0 
                            ? project.role.filter(Boolean).join(', ') 
                            : 'Front End Developer'
                        }
                    </p>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--text-title2)] mb-1">Description</h3>
                    <ul className="list-disc pl-5 text-[0.9rem] leading-relaxed text-gray-200 space-y-1">
                        {project.description && project.description.length > 0 ? (
                            project.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))
                        ) : (
                            <li>Description of the project roles goes here.</li>
                        )}
                    </ul>
                </div>

                {/* Action Link */}
                <div className="mt-4 flex justify-end">
                    {project.link ? (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-[var(--border-color)] text-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-[0_0_10px_var(--border-color)] uppercase tracking-wider text-sm"
                        >
                            Visit Website
                        </a>
                    ) : (
                        <span className="bg-transparent border-2 border-gray-600 text-gray-500 px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm cursor-not-allowed">
                            No Link Available
                        </span>
                    )}
                </div>
            </div>
        </BaseModal>
    );
};

export default ProjectModal;
