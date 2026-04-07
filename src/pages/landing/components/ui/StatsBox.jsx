export const StatsBox = ({ label, icon, value }) => {
    return (
        <div
            key={label}
            className="flex flex-col justify-center px-4 py-2 min-w-[80px]"
            style={{
                border: "1.5px solid var(--border-color)",
                borderRadius: "6px",
            }}
        >
            <div className="flex items-center gap-1.5">
                {icon}
                <span className="text-xl font-bold text-white">{value}</span>
            </div>
            <span className="text-[10px] tracking-widest border-0 text-gray-400 uppercase mt-0.5">
                {label}
            </span>
        </div>
    );
}