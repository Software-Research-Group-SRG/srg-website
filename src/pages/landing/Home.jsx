import React from "react";
import HeroSection from "./components/sections/HeroSection";
import RolesSection from "./components/sections/RolesSection";
import LeadersSection from "./components/sections/LeadersSection";
import GenerationsSection from "./components/sections/GenerationsSection";
import { Divider } from "./components/ui/Divider";

function Home() {
    return (
        <div className="flex flex-col items-center w-full overflow-x-hidden">
            <HeroSection />
            <Divider />
            <RolesSection />
            <Divider />
            <LeadersSection />
            <Divider />
            <GenerationsSection />
        </div>
    );
}

export default Home;
