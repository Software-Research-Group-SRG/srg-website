import React from "react";
import SectionLayout from "./SectionLayout";
import { ROLES } from "@/pages/landing/utils/roles.js";
import { RoleBox } from "../ui/RoleBox";

function RolesSection() {
    return (
        <SectionLayout
            subtitle="----// 002 - ROLES"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
        >
            {ROLES.map((role) => (
                <RoleBox key={role.title} title={role.title} description={role.description} />
            ))}
        </SectionLayout>
    );
}

export default RolesSection;
