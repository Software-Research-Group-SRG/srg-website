import React from 'react';
import SearchProjects from './SearchProjects';
import ProjectsCarousel from './ProjectsCarousel';
import ProjectGrid from './ProjectGrid';
function Page() {
  return (
    <>
      <SearchProjects />
      <ProjectsCarousel />
      <ProjectGrid />
    </>
  );
}

export default Page;
