import React from "react";
import HeroSection from "./components/sections/HeroSection";
import RolesSection from "./components/sections/RolesSection";
import LeadersSection from "./components/sections/LeadersSection";
import GenerationsSection from "./components/sections/GenerationsSection";
import { Divider } from "./components/ui/Divider";
import Scroll3DWrapper from "./components/ui/Scroll3DWrapper";

function Home() {
    return (
        <div className="perspective-[1200px] flex flex-col items-center w-full">
            <HeroSection />

            <Divider />

            <Scroll3DWrapper>
                <RolesSection />
            </Scroll3DWrapper>

            <Divider />

            <Scroll3DWrapper>
                <LeadersSection />
            </Scroll3DWrapper>

            <Divider />

            <Scroll3DWrapper>
                <GenerationsSection />
            </Scroll3DWrapper>


        </div>
    );
}

export default Home;
