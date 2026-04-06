import React from "react";
import TeamMemberCard from "./TeamMemberCard";

function MeetTheTeam() {
    return (
        <div className="flex flex-col p-4 sm:p-8 lg:p-12"> 
            <h1 className="mt-5 mb-5 flex items-center justify-center text-4xl font-bold text-white ">MEET THE TEAM</h1>

            {/* Main Wrapper: Use flex-col and items-start to keep titles left-aligned */}
            {/* 1. Reduced outer padding/margin and gap to 0 since we will control spacing manually */}
            <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center p-4 sm:p-10">

                {/* Section Title Wrapper */}
                <div className="w-full mb-8">
                    <div className="border border-white/20 bg-[#011325] py-[12px] px-6 pr-[40px] w-fit shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <p className="text-xs tracking-[0.35em] uppercase text-white font-[var(--font-family-title)]">
                            <span className="opacity-40">------------- //</span>{' '}
                            <span className="font-bold">001 - PROJECT MANAGERS</span>
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