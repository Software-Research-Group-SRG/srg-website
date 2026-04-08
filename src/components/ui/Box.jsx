export const Box = ({children, title}) => {
    return (
        <div
            key={title}
            // ADDED: "relative" and "overflow-hidden"
            className="relative overflow-hidden border-4 border-[#3185FF] rounded-tl-4xl rounded-br-4xl flex flex-col justify-between"
        >
            {children}
            <div className="bg-[#3185FF] h-10 rounded-br-3xl rounded-tl-4xl relative z-10"></div>
        </div>
    );
}