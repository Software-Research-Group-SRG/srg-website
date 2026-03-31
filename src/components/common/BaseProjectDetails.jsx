import React, { useRef, useEffect, useCallback } from 'react';
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
  const otherProjectsRef = useRef(null);
  const isSnapping = useRef(false);

  /* ── Snap-scroll: auto-scroll to "Other Projects" when ~25% visible ── */
  useEffect(() => {
    const section = otherProjectsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        /* Only snap when scrolling DOWN and section is partially visible */
        if (entry.isIntersecting && !isSnapping.current) {
          isSnapping.current = true;
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          /* Reset the flag after the smooth scroll finishes */
          setTimeout(() => { isSnapping.current = false; }, 800);
        }
      },
      {
        threshold: 0.15,   /* triggers when 15% of the section is visible */
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
                  CONTRIBUTORS COMPONENT
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              {!project.contributors || project.contributors.length === 0 ? (
                /* SHOW SKELETON IF NO DATA */
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-10">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8"
                        style={{ border: '2px solid var(--text-title2)', color: 'var(--text-title2)' }}
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
              ) : (
                /* SHOW ACTUAL COMPONENT IF DATA EXISTS */
                <div className="rounded-lg border border-dashed border-teal-500/50 bg-teal-500/5 p-4 text-center">
                  <span className="font-mono text-xs text-teal-400">
                    {'<ContributorsList contributors={project.contributors} />'}
                  </span>
                  <p className="mt-2 text-xs text-gray-400">
                    ({project.contributors.length} contributors loaded. Build component to replace this box.)
                  </p>
                </div>
              )}
              {/* END CONTRIBUTORS ──────────────────────────── */}
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
                  FEATURES & FUNCTIONALITIES COMPONENT
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              {!project.features || project.features.length === 0 ? (
                /* SHOW SKELETON IF NO DATA */
                <div className="flex flex-col gap-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                        style={{ border: '1.5px solid var(--border-teal)', color: 'var(--text-title2)' }}
                      >
                        <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="h-3 w-40 rounded-full placeholder-shimmer mb-2" />
                        <div className="h-2.5 w-full rounded-full placeholder-shimmer opacity-50 mb-1" />
                        <div className="h-2.5 rounded-full placeholder-shimmer opacity-50" style={{ width: `${50 + Math.random() * 30}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* SHOW ACTUAL COMPONENT IF DATA EXISTS */
                <div className="rounded-lg border border-dashed border-teal-500/50 bg-teal-500/5 p-4 text-center">
                  <span className="font-mono text-xs text-teal-400">
                    {'<FeaturesAndFunctionalities features={project.features} />'}
                  </span>
                  <p className="mt-2 text-xs text-gray-400">
                    ({project.features.length} features loaded. Build component to replace this box.)
                  </p>
                </div>
              )}
              {/* END FEATURES ─────────────────────────────────── */}
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
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeUp}
              custom={1}
            >
              {project.description.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-gray-200 sm:leading-loose"
                  style={{
                    fontSize: 'var(--fs-body)',
                    textAlign: 'justify',
                  }}
                >
                  {paragraph.trim()}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════
          DIVIDER + OTHER PROJECTS
          ═══════════════════════════════════════════════════════ */}
      {otherProjects.length > 0 && (
        <>
          {/* ── Divider Line ── */}
          <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="brand-divider glow-pulse my-4" />
          </div>

          <motion.section
            ref={otherProjectsRef}
            className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-10"
            style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
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
        </>
      )}
    </article>
  );
}

export default BaseProjectDetails;
