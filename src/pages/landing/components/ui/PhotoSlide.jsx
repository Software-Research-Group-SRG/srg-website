export const PhotoSlide = ({ item, isActive }) => {
    return (
        <div
            className={`relative w-full h-full overflow-hidden rounded-xl transition-all duration-500 ${
                isActive
                    ? "opacity-100 brightness-100"
                    : "opacity-50 brightness-60"
            }`}
        >
            {item.src ? (
                <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center placeholder-shimmer">
                    <span
                        className="text-sm uppercase tracking-[0.3em] opacity-40"
                        style={{ color: "var(--text-title2)" }}
                    >
                        {item.label}
                    </span>
                </div>
            )}
        </div>
    );
}