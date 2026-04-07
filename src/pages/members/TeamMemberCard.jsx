import { Rotate3D } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import sample from '../../assets/sample.jpg'; // A high-tech sample image for your UI


function TeamMemberCard() {
    const navigate = useNavigate();

    // return (
    //     <motion.div
    //     // 1. ROTATION LOGIC:
    //     // While hovering, we spin to 360.
    //     whileHover={{ 
    //         rotateY: 360, 
    //         scale: 1.05,
    //         transition: { duration: 1.2, ease: "easeInOut" } 
    //     }}
    //     // When NOT hovering, we return to 0 with 0 duration so it doesn't "rewind"
    //     animate={{ rotateY: 0 }}
    //     transition={{ duration: 0 }} 

    //     className="relative mt-5 flex h-80 w-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-br-[2rem] rounded-tl-[2rem] border-[6px] border-[#3185FF] bg-[#010B14]"
    //     style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    //     >
        
    //      {/* Centered Content */}

    //         <img
    //             src={sample || 'https://via.placeholder.com/300'} // Fallback if image is missing
    //             alt="Team Member"
    //             className="h-full w-full object-cover"
    //         />

    //     {/* Bottom Accent Shape (The Blue Tab) */}
    //     <div 
    //         className="absolute bottom-0 z-10 h-15 w-full bg-[#3185FF] rounded-tl-[2.5rem]" 
    //     />
    //     </motion.div>
    // );

    return (
        <div className="group relative mt-5 h-[360px] w-[280px] cursor-pointer overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] border-[6px] border-[#3185FF] bg-[#010B14] flex flex-col items-center justify-center">
    
            {/* 1. The Image - Use group-hover for the scale so it feels smoother */}
            <img 
                src={'https://via.placeholder.com/300'} 
                alt="Team Member"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
            />

            {/* 2. The Hover Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-black/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* 3. Bottom Accent Shape - Increased z-index to stay on top of the gradient */}
            <div className="absolute bottom-0 z-20 h-15 w-full bg-[#3185FF] rounded-tl-[2rem] transition-transform duration-300 group-hover:translate-y-1" />

            {/* 4. Optional: Add Member Name/Info here with z-30 to make it pop over the gradient */}
            <div className="z-50 w-full text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-lg font-bold">John Doe</p>
                {/* <p className="text-sm">Software Developer</p> */}
            </div>
        </div>
    );



}

export default TeamMemberCard;