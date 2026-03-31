import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCards from '../ui/ProjectCards';

/* ──────────────────────────────────────────────────────────────
   BaseProjectDetails
   Reusable layout scaffold for every project's detail view.

   Props:
   ─ project        : { id, title, subtitle, description, image, teamSize, … }
   ─ otherProjects  : array of project objects for the "Other Projects" grid
   ────────────────────────────────────────────────────────────── */

/* Framer-Motion shared entrance variant */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' },
  }),
};

function BaseProjectDetails({ project, otherProjects = [] }) {
  const navigate = useNavigate();

  return (
    <article className="relative z-10 flex w-full flex-col items-center">
      {/* ═══════════════════════════════════════════════════════
          MAIN SECTION — Single Continuous Two-Column Layout
          Desktop:  Left (title, contributors, features) | Right (image, description)
          Mobile:   Image → Description → Contributors → Features (stacked)
          ═══════════════════════════════════════════════════════ */}
      <motion.section
        className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-10"
        style={{
          paddingTop: 'var(--space-section)',
          paddingBottom: 'var(--space-section)',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* ─────────────────────────────────────────────────────
              LEFT COLUMN — Title, Contributors, Features
              On mobile: order-2 (appears after image + description)
              ───────────────────────────────────────────────────── */}
          <div className="order-2 flex w-full flex-col lg:order-1 lg:w-[40%]">
            {/* ── Title ──────────────────────────────────────── */}
            <motion.div className="mb-8" variants={fadeUp} custom={0}>
              <h1 className="project-title mb-1">
                {project.title}
              </h1>
              <p
                className="text-xs tracking-[0.35em] opacity-80 sm:text-sm"
                style={{
                  color: 'var(--text-title)',
                  fontFamily: 'var(--font-family-title)',
                }}
              >
                <span className="opacity-60">------------- //</span>{' '}
                {project.subtitle ?? 'PROJECT'}
              </p>
            </motion.div>

            {/* ── Contributors ───────────────────────────────── */}
            <motion.div className="mb-10" variants={fadeUp} custom={1}>
              <h2
                className="mb-5 text-base font-bold uppercase tracking-[0.18em] sm:text-lg"
                style={{
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-family-title)',
                }}
              >
                Contributors:
              </h2>

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  PLACEHOLDER — Contributors Component
                  Replace the block below with:
                  <ContributorsList contributors={project.contributors} />
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-10">
                {Array.from({ length: project.teamSize ?? 4 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {/* Icon circle */}
                    <div
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8"
                      style={{
                        border: '2px solid var(--text-title2)',
                        color: 'var(--text-title2)',
                      }}
                    >
                      <span className="text-xs font-bold">!</span>
                    </div>
                    <div className="min-w-0">
                      <div className="h-3 w-28 rounded-full placeholder-shimmer mb-1.5" />
                      <div className="h-2 w-20 rounded-full placeholder-shimmer opacity-60" />
                    </div>
                  </div>
                ))}
              </div>
              {/* END PLACEHOLDER ────────────────────────────── */}
            </motion.div>

            {/* ── Features & Functionalities ──────────────────── */}
            <motion.div variants={fadeUp} custom={2}>
              <h2
                className="mb-6 text-base font-bold uppercase tracking-[0.15em] sm:text-lg"
                style={{
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-family-title)',
                }}
              >
                Features & Functionalities:
              </h2>

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  PLACEHOLDER — Features & Functionalities Component
                  Replace the block below with:
                  <FeaturesAndFunctionalities features={project.features} />
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex flex-col gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {/* Feature icon placeholder */}
                    <div
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                      style={{
                        border: '1.5px solid var(--border-teal)',
                        color: 'var(--text-title2)',
                      }}
                    >
                      <svg
                        className="h-4 w-4 opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="h-3 w-40 rounded-full placeholder-shimmer mb-2" />
                      <div className="h-2.5 w-full rounded-full placeholder-shimmer opacity-50 mb-1" />
                      <div
                        className="h-2.5 rounded-full placeholder-shimmer opacity-50"
                        style={{ width: `${50 + Math.random() * 30}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* END PLACEHOLDER ──────────────────────────────── */}
            </motion.div>
          </div>

          {/* ─────────────────────────────────────────────────────
              RIGHT COLUMN — Project Image + Description
              On mobile: order-1 (appears first)
              ───────────────────────────────────────────────────── */}
          <div className="order-1 mb-8 flex w-full flex-col lg:order-2 lg:mb-0 lg:w-[60%]">
            {/* ── Project Image ──────────────────────────────── */}
            <motion.div
              className="group relative mb-8 overflow-hidden rounded-xl"
              style={{ border: '2px solid var(--border-accent)' }}
              variants={fadeUp}
              custom={0}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                /* Placeholder when no image is provided */
                <div className="flex aspect-video w-full items-center justify-center placeholder-shimmer">
                  <span
                    className="text-sm uppercase tracking-[0.3em] opacity-40"
                    style={{ color: 'var(--text-title2)' }}
                  >
                    Project Preview
                  </span>
                </div>
              )}
            </motion.div>

            {/* ── Description ────────────────────────────────── */}
            <motion.div variants={fadeUp} custom={1}>
              <p
                className="leading-relaxed text-gray-200 sm:leading-loose"
                style={{
                  fontSize: 'var(--fs-body)',
                  textAlign: 'justify',
                }}
              >
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════
          OTHER PROJECTS — 3-column grid (keep as-is)
          ═══════════════════════════════════════════════════════ */}
      {otherProjects.length > 0 && (
        <motion.section
          className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-10"
          style={{ paddingBottom: 'var(--space-section)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          <motion.div className="mb-10 text-center" variants={fadeUp} custom={0}>
            <h2
              className="section-title"
              style={{ fontFamily: 'var(--font-family-title)' }}
            >
              Other Projects
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
            variants={fadeUp}
            custom={1}
          >
            {otherProjects.map((proj) => (
              <div
                key={proj.id}
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/projects/${proj.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ProjectCards project={proj} />
              </div>
            ))}
          </motion.div>
        </motion.section>
      )}
    </article>
  );
}

export default BaseProjectDetails;
