import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@/components/ui/Box'; 
import Members from '@/data/members.json';

export const MemberCard = ({ role }) => {
    
    const filteredMembers = Members.filter(member => member.role && member.role.includes(role));
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full mt-8">
            
            {filteredMembers.map((member, index) => (
                <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => navigate(`/portfolio/${member.id}`)}
                >
                    <Box title={member.name}>
                        
                        {member.photo && (
                            <img 
                                src={member.photo.startsWith('http') ? member.photo : `/assets/member-profile-picture/${member.photo}`} 
                                alt={member.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 z-0" 
                            />
                        )}

                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#010B14]/80 to-[#010B14] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-20 flex flex-col items-center justify-end h-[320px] w-[280px] px-4 pb-4 text-center opacity-0 transition-all duration-500 group-hover:translate-y-[-10px] group-hover:opacity-100">
                            
                            <p className="text-sm font-bold text-white uppercase tracking-wider mb-1 font-[var(--font-family-title)]">
                                {member.name}
                            </p>
                            
                            {member.status && (
                                <p className="text-xs font-semibold text-[#00A8FF] uppercase tracking-widest mt-1 opacity-90">
                                    {member.status.toLowerCase() === "member" 
                                        ? "SRG 12th Generation - Member" 
                                        : member.status.toLowerCase() === "intern" 
                                            ? "SRG Intern" 
                                            : member.status.toLowerCase().includes("gen ")
                                                ? member.status
                                                : `SRG 12th Generation - ${member.status}`
                                    }
                                </p>
                            )}
                            
                        </div>

                    </Box>
                </div>
            ))}

        </div>
    );
};

export default MemberCard;