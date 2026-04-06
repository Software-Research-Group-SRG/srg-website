import { Rotate3D } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import sample from '../../assets/sample_v3.jpg'; // A high-tech sample image for your UI

function TeamMemberCard() {
    const navigate = useNavigate();

    return (
        <div className="group relative mt-5 h-90 w-70 cursor-pointer overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] border-[6px] border-[#3185FF] bg-[#010B14] flex flex-col items-center justify-center [transform:rotateY(0deg)] hover:transition-transform hover:duration-[2000ms] hover:ease-in-out hover:[transform:rotateY(360deg)]"
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            }}
        >
        
            {/* Centered Content */}
            <img 
                src={sample || 'https://via.placeholder.com/300'} // Fallback if image is missing
                alt="Team Member"
                className="h-full w-full object-cover" 
            />

            {/* Bottom Accent Shape */}
            <div className="absolute bottom-0 h-15 w-full bg-[#3185FF] rounded-tl-[2rem]" >
            </div>
        </div>
    );



}

export default TeamMemberCard;