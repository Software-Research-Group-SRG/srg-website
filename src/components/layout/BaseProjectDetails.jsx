import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCards from '../ui/ProjectCards';
import Contributors from '../ui/Contributors';
import FeaturesAndFunctionalities from '../ui/Feature&Functionalities';

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
        className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6"
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
              <h1
                className="mb-5 text-base font-bold uppercase tracking-[0.19em] sm:text-lg"
                style={{
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-family-title)',
                }}
              >
                Contributors:
              </h1>

              <Contributors contributors={project.contributors} />
            </motion.div>
            {/* END CONTRIBUTORS ──────────────────────────── */}


            {/* ── Features & Functionalities ──────────────────── */}
            <motion.div variants={fadeUp} custom={2}>
              <h1
                className="mb-6 text-base font-bold uppercase tracking-[0.19em] sm:text-lg"
                style={{
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-family-title)',
                }}
              >
                Features & Functionalities:
              </h1>

              <FeaturesAndFunctionalities features={project.features} />
            </motion.div>
            {/* END FEATURES ─────────────────────────────────── */}
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
          <div className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6">
            <div className="brand-divider glow-pulse my-4" />
          </div>

          <motion.section
            ref={otherProjectsRef}
            className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6"
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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate(`/projects/${proj.id}`);
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
