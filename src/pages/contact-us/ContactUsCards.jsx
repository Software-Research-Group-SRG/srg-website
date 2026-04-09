import React from "react";
import contactusbg from "../../assets/contact-us/bg-card-contactUs.png";
import { EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

import contactUs from '../../data/contactUs.json';

function FlipContactCard({ contact }) {
    const [isFlipped, setIsFlipped] = React.useState(false);

    // Helper to render the correct icon based on the name or a type key in JSON
    const renderIcon = (name, className = "w-20 h-20") => {
        switch (name) {
            case "Gmail":
            case "Email": return (
                <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 5.25V18.75C22.5 19.5783 21.8284 20.25 21 20.25H18V10.5L12 15L6 10.5V20.25H3C2.17157 20.25 1.5 19.5783 1.5 18.75V5.25C1.5 3.32183 3.6908 2.21447 5.25 3.375L6 3.9375L12 8.4375L18 3.9375L18.75 3.375C20.3092 2.21447 22.5 3.32183 22.5 5.25Z" fill="#EA4335" />
                    <path d="M22.5 5.25V18.75C22.5 19.5783 21.8284 20.25 21 20.25H18V10.5L22.5 5.25Z" fill="#34A853" />
                    <path d="M1.5 5.25V18.75C1.5 19.5783 2.17157 20.25 3 20.25H6V10.5L1.5 5.25Z" fill="#4285F4" />
                    <path d="M18 3.9375L18.75 3.375C20.3092 2.21447 22.5 3.32183 22.5 5.25L18 8.625V3.9375Z" fill="#FBBC05" />
                    <path d="M1.5 5.25C1.5 3.32183 3.6908 2.21447 5.25 3.375L6 3.9375V8.625L1.5 5.25Z" fill="#C5221F" />
                </svg>
            );
            case "Office": return <BuildingOfficeIcon className={className} />;
            case "Facebook": return (
                <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            );
            default: return null;
        }
    };

    return (
        <div
            className="w-85 h-99 [perspective:1000px] cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

                {/* FRONT SIDE */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-3xl shadow-lg border border-slate-200/10 ${contact.bgColor}`}>
                    <div className={contact.textColor}>
                        {renderIcon(contact.name, "w-20 h-20")}
                    </div>
                    <span className={`mt-4 text-2xl font-bold ${contact.textColor}`}>
                        {contact.name}
                    </span>
                </div>

                {/* BACK SIDE*/}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-50 rounded-3xl shadow-lg overflow-hidden flex flex-col">
                    {/* Blue/Graphic Header */}
                    <div className="h-1/2 w-full relative flex items-center justify-center">
                        {/* You can use a smaller version of groupPhoto or a gradient here */}
                        <img src={contactusbg} className="absolute inset-0 w-full h-full object-cover" alt="bg" />

                        {/* Floating Icon Circle */}
                        <div className={`absolute -bottom-8 p-3 rounded-full shadow-md z-10 ${contact.bgColor}`}>
                            <div className={`${contact.textColor} w-10 h-10`}>
                                {renderIcon(contact.name, "w-full h-full")}
                            </div>
                        </div>

                    </div>

                    {/* Content Area */}
                    <div className="mt-10 flex flex-col items-center flex-1 px-8 text-center">
                        <h3 className="text-blue-900 font-bold text-base break-all px-2 leading-tight">
                            {contact.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-2 font-medium">
                            {contact.subtitle}
                        </p>

                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                if (contact.link.startsWith('mailto:')) {
                                    window.location.href = contact.link;
                                } else {
                                    window.open(contact.link, '_blank', 'noreferrer');
                                }
                            }}
                            className="mt-auto mb-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full text-xs font-bold transition-colors shadow-lg shadow-blue-200 inline-block"
                        >
                            {contact.actionLabel}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FlipContactCard;
