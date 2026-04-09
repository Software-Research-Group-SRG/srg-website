export const LeaderBox = ({ photo, name }) => {
    return (
        <div key={name} className="flex flex-col items-center gap-3">
            <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center placeholder-shimmer border-4 border-[#3185FF]">
                {photo ? (
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span
                        className="text-md tracking-widest opacity-40 uppercase"
                        style={{ color: "var(--text-title2)" }}
                    >
                        Photo
                    </span>
                )}
            </div>
            <div className="text-center">
                <p className="text-md font-semibold text-slate-200 leading-tight">
                    {name}
                </p>
            </div>
        </div>
    );
};
