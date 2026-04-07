function SectionLayout({ subtitle, title, description, children, className = '' }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-25">
      {/* ── Header ── */}
      {subtitle && <p className="section-subtitle mb-5">{subtitle}</p>}
      {title && <h2 className="section-title mb-4">{title}</h2>}
      {description && (
        <p className="text-md text-gray-300 mb-10 max-w-xl">{description}</p>
      )}

      {/* ── Body ── */}
      <div className={className}>{children}</div>
    </section>
  );
}

export default SectionLayout;
