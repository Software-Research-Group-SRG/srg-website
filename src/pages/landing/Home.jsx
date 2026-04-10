import React from "react";
import HeroSection from "./components/sections/HeroSection";
import RolesSection from "./components/sections/RolesSection";
import LeadersSection from "./components/sections/LeadersSection";
import GenerationsSection from "./components/sections/GenerationsSection";
import Scroll3DWrapper from "./components/ui/Scroll3DWrapper";
import { Divider } from "./components/ui/Divider";

function Home() {
    return (
        <div className="flex flex-col items-center w-full overflow-x-hidden">
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
