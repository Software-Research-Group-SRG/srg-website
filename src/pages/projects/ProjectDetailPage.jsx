import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BaseProjectDetails from '../../components/layout/BaseProjectDetails';
import allProjects from '../../data/projects.json';

/* ──────────────────────────────────────────────────────────────
   ProjectDetailPage
   Route: /projects/:projectId
   Reads the projectId from the URL, finds the matching project,
   and renders the BaseProjectDetails scaffold.
   ────────────────────────────────────────────────────────────── */

function ProjectDetailPage() {
  const { projectId } = useParams();
  const id = Number(projectId);

  const project = allProjects.find((p) => p.id === id);

  /* Redirect to /projects if product not found */
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  /* All projects except the current one → "Other Projects" grid */
  const otherProjects = allProjects.filter((p) => p.id !== id);

  return (
    <BaseProjectDetails
      project={project}
      otherProjects={otherProjects}
    />
  );
}

export default ProjectDetailPage;
