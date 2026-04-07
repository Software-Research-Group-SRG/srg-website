export const Caption = ({ text }) => {
    return (
        <p
            className="mt-10 text-center text-sm sm:text-base font-bold tracking-[0.18em] uppercase max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-main)" }}
        >
            {text}
        </p>
    );
}