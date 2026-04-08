import React from 'react';

const SectionHeader = ({ id = "", title = "", className = "" }) => {
    return (
        <div className={`mb-15 w-full ${className}` }>
            <div 
            className="
                flex 
                items-center 
                justify-center 
                rounded-2xl
                gap-3 sm:gap-5 
                w-fit 
                px-6 sm:px-10 
                py-3 sm:py-4 
                bg-[#011325]/50 
                backdrop-blur-xl 
                drop-shadow-futuristic-stroke
            "
            style={{
                boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.05)',
            }}
            >

            <span className="text-white/40 tracking-[0.2em] hidden sm:block whitespace-nowrap">
                --------------------- //
            </span>

            <p 
                className="text-[10px] sm:text-sm font-medium uppercase text-white tracking-[0.15em] sm:tracking-[0.3em] whitespace-nowrap"
                style={{
                    fontFamily: 'var(--font-family-title)',
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' 
                }}
            >
                <span className="font-bold">{id}</span> - {title}
            </p>
            </div>
        </div>
    );
};

export default SectionHeader;