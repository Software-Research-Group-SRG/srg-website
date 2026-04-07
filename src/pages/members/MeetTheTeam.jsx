import React from "react";
import TeamMemberCard from "./TeamMemberCard";

function MeetTheTeam() {
    return (
        <div className="flex flex-col p-4 sm:p-8 lg:p-12"> 
            <h1 className="mt-5 mb-5 flex items-center justify-center text-4xl font-bold text-white ">MEET THE TEAM</h1>

            {/* Main Wrapper: Use flex-col and items-start to keep titles left-aligned */}
            {/* 1. Reduced outer padding/margin and gap to 0 since we will control spacing manually */}
            <div className="mx-auto flex w-full max-w-[1600px] flex-col p-4 sm:p-10">

                {/* Section Title Wrapper */}
                <div 
                    className="
                    flex 
                    items-center 
                    justify-center 
                    rounded-2xl
                    gap-5 
                    w-fit 
                    px-10 
                    py-4 
                    bg-[#011325]/50 
                    backdrop-blur-xl 
                    drop-shadow-futuristic-stroke
                    "
                    style={{
                    // Adds that deep, frosted-glass tactile feel seen in reference
                    boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.05)',
                    }}
                >
                    {/* The dashed lines - dimmed for effect */}
                    <span className="text-white/40 tracking-[0.2em]">
                    --------------------- //
                    </span>

                    {/* The Text - Bright white and tracking wide */}
                    <p 
                    className="text-sm font-medium uppercase text-white tracking-[0.3em]"
                    style={{
                        // Matches the high-tech font style in reference
                        fontFamily: 'var(--font-family-title)',
                        textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' // Subtle text glow
                    }}
                    >
                    <span className="font-bold">001</span> - PROJECT MANAGERS
                    </p>
                </div>

                {/* THE FIX: Using flex-wrap and justify-center instead of grid */}
                <div className="flex flex-wrap justify-center gap-10 w-full">
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                </div>

                {/* Section Title Wrapper */}
                <div className="mt-20 w-full mb-8">
                    <div className="border border-white/20 bg-[#011325] py-[12px] px-6 pr-[40px] w-fit shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <p className="text-xs tracking-[0.35em] uppercase text-white font-[var(--font-family-title)]">
                            <span className="opacity-40">------------- //</span>{' '}
                            <span className="font-bold">002 - SOFTWARE DEVELOPERS</span>
                        </p>
                    </div>
                </div>

                {/* THE FIX: Using flex-wrap and justify-center instead of grid */}
                <div className="flex flex-wrap justify-center gap-10 w-full">
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                    
                    {/* These will automatically wrap and center themselves below */}
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                </div>

                {/* Section Title Wrapper */}
                <div className="mt-20 w-full mb-8">
                    <div className="border border-white/20 bg-[#011325] py-[12px] px-6 pr-[40px] w-fit shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <p className="text-xs tracking-[0.35em] uppercase text-white font-[var(--font-family-title)]">
                            <span className="opacity-40">------------- //</span>{' '}
                            <span className="font-bold">003 - QUALITY ASSURANCE</span>
                        </p>
                    </div>
                </div>

                {/* THE FIX: Using flex-wrap and justify-center instead of grid */}
                <div className="flex flex-wrap justify-center gap-10 w-full">
                    <TeamMemberCard />
                    <TeamMemberCard />
                    <TeamMemberCard />
                </div>

                {/* Section Title Wrapper */}
                <div className="mt-20 w-full mb-8">
                    <div className="border border-white/20 bg-[#011325] py-[12px] px-6 pr-[40px] w-fit shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <p className="text-xs tracking-[0.35em] uppercase text-white font-[var(--font-family-title)]">
                            <span className="opacity-40">------------- //</span>{' '}
                            <span className="font-bold">004 - DOCUMENT ANALYST</span>
                        </p>
                    </div>
                </div>

                {/* THE FIX: Using flex-wrap and justify-center instead of grid */}
                <div className="flex flex-wrap justify-center gap-10 w-full">
                    <TeamMemberCard />
                </div>

            </div> 
        </div>
        
    );
}

export default MeetTheTeam;