import React from 'react';
import ProjectCards from '../../components/ui/ProjectCards';

// Mock data using clean placeholders
const GRID_PROJECTS = [
  {
    id: 1,
    title: 'GFMIC Ecommerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a ullamcorper malesuada, nunc orci fermentum quam, vitae vehicula sapien elit in sapien.',
    teamSize: 5,
  },
  {
    id: 2,
    title: 'GFMIC Academy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a ullamcorper malesuada, nunc orci fermentum quam, vitae vehicula sapien elit in sapien.',
    teamSize: 5,
  },
  {
    id: 3,
    title: 'StewardFM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a ullamcorper malesuada, nunc orci fermentum quam, vitae vehicula sapien elit in sapien.',
    teamSize: 5,
  },
];

function ProjectGrid({ projects = GRID_PROJECTS }) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-12 relative z-20">
      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
