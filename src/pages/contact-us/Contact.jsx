import React from "react";

import { HeroLogo } from "../landing/components/ui/HeroLogo";
import FlipContactCard from "./ContactUsCards";
import contactUs from '../../data/contactUs.json';

function Contact() {
    return (
        <div className="flex flex-col items-stretch w-full">
            {/* Main Image */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[750px] -mx-6 md:-mx-10 lg:-mx-16">
                <img src="/assets/srg-group-picture/SrgGroupPictures3.jpg" alt="Group" className="w-full h-full object-cover opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </div>

            {/* Logo Container */}
            <div className="relative -mt-16 md:-mt-32 xl:-mt-48 z-10 flex justify-center w-full">
                <div className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 flex items-center justify-center p-2">
                    <HeroLogo />
                </div>
            </div>

            <div className="flex flex-col items-center w-full">
                <h3 className="mt-10 text-4xl text-slate-100 mb-2 font-bold tracking-tight">
                    SOFTWARE RESEARCH GROUP
                </h3>

                <h4 className="text-xl text-slate-400 mb-12 font-medium">
                    Contact Us Through:
                </h4>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl px-6 pb-32 justify-items-center">
                    {contactUs.map((contact, index) => (
                        <FlipContactCard key={contact.id || index} contact={contact} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;