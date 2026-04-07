import React from "react";
import SectionLayout from "./SectionLayout";
import { STATS } from "@/pages/landing/utils/stats.jsx";
import { StatsBox } from "../ui/StatsBox";
import { Button } from "../ui/Button";
import { HeroLogo } from "../ui/HeroLogo";
import { HeroSubtitle } from "../ui/HeroSubtitle";
import { HeroTitle } from "../ui/HeroTitle";

function HeroSection() {
    return (
        <SectionLayout
            subtitle="----// 001 - ABOUT US"
            className="flex flex-col lg:flex-row lg:items-start lg:gap-16"
        >
            {/* ── Left ── */}
            <div className="flex-1">
                <HeroTitle/>
                <HeroSubtitle/>

                {/* Stat boxes */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    {STATS.map((s) => (
                        <StatsBox
                            label={s.label}
                            icon={s.icon}
                            value={s.value}
                        />
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4 flex-wrap">
                    <Button
                        text={"KNOW MORE"}
                        url={"/members"}
                        className={"border-2 border-white hover:bg-white/10"}
                    />
                    <Button
                        text={"PROJECTS"}
                        url={"/projects"}
                        className={"bg-[#3185FF] hover:bg-blue-500"}
                    />
                </div>
            </div>

            {/* ── Right — Logo with hexagon rings ── */}
            <div className="mt-12 lg:mt-0 flex-shrink-0 flex flex-col items-center gap-6 relative">
                <HeroLogo />
            </div>
        </SectionLayout>
    );
}

export default HeroSection;
