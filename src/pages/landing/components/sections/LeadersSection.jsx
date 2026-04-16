import React from "react";
import SectionLayout from "./SectionLayout";
import { LeaderBox } from "@/components/ui/LeaderBox";
import { LEADERS } from "../../utils/leaders";

function LeadersSection() {
    return (
        <SectionLayout
            subtitle="----// 003 - MEET THE LEADERS"
            description="Building student innovators. Instill excellence and real-world readiness."
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10"
        >
            {LEADERS.map((leader) => (
                <LeaderBox photo={leader.photo} name={leader.name} />
            ))}
        </SectionLayout>
    );
}

export default LeadersSection;
