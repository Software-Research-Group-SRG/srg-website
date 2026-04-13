import React from "react";
import { motion } from "framer-motion";
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
                <HeroTitle />
                <HeroSubtitle />

                {/* Stat boxes */}
                <motion.div
                    className="flex flex-wrap items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {STATS.map((s, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        >
                            <StatsBox
                                label={s.label}
                                icon={s.icon}
                                value={s.value}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTAs */}
                 <motion.div
                    className="flex gap-4 flex-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                >
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
                </motion.div>
            </div>

            {/* ── Right — Logo with hexagon rings ── */}
             <div className="lg:-mt-20 flex-shrink-0 flex flex-col items-center gap-6 relative w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 mx-auto lg:mx-0">
                <HeroLogo />
            </div>
        </SectionLayout>
    );
}

export default HeroSection;
