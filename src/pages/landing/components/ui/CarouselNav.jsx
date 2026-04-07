function CarouselNav({ count, activeIndex, onPrev, onNext, onDotClick }) {
    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <button
                onClick={onPrev}
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 text-white hover:border-white transition"
                aria-label="Previous"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onDotClick(i)}
                        className={`rounded-full transition-all duration-300 ${
                            i === activeIndex ? "w-8 h-[3px] bg-white" : "w-6 h-[3px] bg-white/30"
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 text-white hover:border-white transition"
                aria-label="Next"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

export default CarouselNav;
