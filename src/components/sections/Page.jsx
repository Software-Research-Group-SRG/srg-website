// import React from "react";
// import groupPhoto from "../../assets/srg-group-picture/SrgGroupPictures3.jpg";
// import { HeroLogo } from "../landing/components/ui/HeroLogo";
// import { Box } from '@/components/ui/Box';
// import { EnvelopeIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

// function FlipContactCard({ contact }) {
//     const [isFlipped, setIsFlipped] = React.useState(false);

//     return (
//         <div 
//             className="group cursor-pointer [perspective:1000px]"
//             onClick={() => setIsFlipped(!isFlipped)}
//         >
//             <div className={`relative transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
//                 {/* ---------- Front Face ---------- */}
//                 <div className="[backface-visibility:hidden]">
//                     <Box title={contact.name}>
//                         {/* Static Background with Centered Icon for Front */}
//                         <div className={`absolute inset-0 h-[320px] w-[280px] ${contact.bgColor} flex flex-col items-center justify-center z-0`}>
//                             {contact.icon}
//                             {/* Wait, adding the name in text as well just in case they want a simple front look */}
//                             <span className="mt-4 text-3xl font-bold text-white tracking-widest">{contact.name}</span>
//                         </div>
//                         {/* Hidden tall element to enforce correct height in Box if absolute isn't enough */}
//                         <div className="h-[320px] w-[280px] opacity-0 relative z-[-1]" />
//                     </Box>
//                 </div>

//                 {/* ---------- Back Face ---------- */}
//                 <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
//                     <Box title={""}>
//                         {/* Background color behind gradient */}
//                         <div className={`absolute inset-0 h-full w-full ${contact.bgColor} z-0 flex items-center justify-center opacity-50`}>
//                            {contact.icon}
//                         </div>

//                         {/* Revealed Detailed Content */}
//                         <div className="relative z-20 flex flex-col items-center justify-end h-[320px] w-[280px] px-4 pb-4 text-center">
//                             <p className="text-2xl font-bold text-blue-400 uppercase tracking-wider mb-4 font-[var(--font-family-title)]">
//                                 {contact.name}
//                             </p>
//                             <p className="text-base font-bold text-white mb-1">
//                                 {contact.title}
//                             </p>
//                             {contact.subtitle && (
//                                 <p className="text-sm font-semibold text-gray-400 mb-4">
//                                     {contact.subtitle}
//                                 </p>
//                             )}
//                             <button 
//                                 className="mt-2 px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full shadow-md transition-colors"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                 }}
//                             >
//                                 {contact.actionLabel}
//                             </button>
//                         </div>
//                     </Box>
//                 </div>
                
//             </div>
//         </div>
//     );
// }

// function Contact() {
//     const contacts = [
//         {
//             name: "Gmail",
//             icon: <EnvelopeIcon className="w-20 h-20 text-white" />,
//             title: "SRG_PUPQC@gmail.com",
//             subtitle: "[Di ko alam]",
//             actionLabel: "Send Mail",
//             bgColor: "bg-red-500"
//         },
//         {
//             name: "Facebook",
//             icon: (
//                 <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                 </svg>
//             ),
//             title: "Software Research Group PUPQC",
//             subtitle: "",
//             actionLabel: "Visit Us",
//             bgColor: "bg-blue-600"
//         },
//         {
//             name: "Office",
//             icon: <BuildingOfficeIcon className="w-20 h-20 text-white" />,
//             title: "Office Address",
//             subtitle: "[Di ko alam PUPQC nalang]",
//             actionLabel: "Maps",
//             bgColor: "bg-slate-700"
//         }
//     ];

//     return (
//         <div className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
//             {/* Main Image Container */}
//             <div className="w-full relative">
//                 <img src={groupPhoto} alt="Company Logo" className="w-full object-cover" />
//             </div>

//             {/* Floating Logo Container */}
//             <div className="relative -mt-16 md:-mt-32 xl:-mt-48 z-10 flex justify-center w-full">
//                 <div className="w-32 md:w-64 xl:w-96 overflow-hidden flex items-center justify-center p-2">
//                     <HeroLogo />
//                 </div>
//             </div>

//             <h3 className="mt-10 text-4xl text-slate-100 mb-6 font-medium">
//                 <span>SOFTWARE RESEARCH GROUP</span>
//             </h3>

//             <h4 className="text-2xl text-slate-50 mb-6 font-medium">
//                 <span>Contact Us Through:</span>
//             </h4>

//             {/* Hover Cards Using Box */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-8 px-6 pb-20 justify-items-center">
//                 {contacts.map((contact, index) => (
//                     <FlipContactCard key={index} contact={contact} />
//                 ))}
//             </div>   
            
//         </div>
//     );
// }

// export default Contact;