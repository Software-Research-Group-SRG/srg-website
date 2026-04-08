import React from 'react';
import MeetTheTeam from './MeetTheTeam';
import SectionTitle from './SectionTitle';
import { MemberCard } from './TeamMemberCard';
import PartnerRecognitionBanner from './PartnerRecognitionBanner';


function Page() {
  return (
    <div className="m-10 flex flex-col sm:p-8 lg:p-12"> 
        <MeetTheTeam />
        
        {/* FIXED: Changed back to flex-col. This keeps the Titles stacked neatly on top of each other. */}
        <div className="flex flex-col gap-12 px-4 sm:px-8 lg:px-12 py-12">
            
            <div>
                <SectionTitle id="001" title="Project Managers" />
                <MemberCard role="Project Manager" />
            </div>
            
            <div>
                <SectionTitle id="002" title="Software Developers" />
                <MemberCard role="Software Developer" />
            </div>
            
            <div>
                <SectionTitle id="003" title="Quality Assurance" />
                <MemberCard role="Quality Assurance" />
            </div>
            
            <div>
                <SectionTitle id="004" title="Document Analyst" />
                <MemberCard role="Document Analyst" />
            </div>

        </div>

        <PartnerRecognitionBanner />
    </div>
  );
}

export default Page;