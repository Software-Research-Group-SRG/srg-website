import React from 'react';
import SectionTitle from './components/SectionTitle';
import { MemberCard } from './components/TeamMemberCard';
import PartnerRecognitionBanner from './components/PartnerRecognitionBanner';


function Page() {
  return (
    <div className="m-10 flex flex-col"> 
        <div> 
            <h1 className="mb-10 flex items-center justify-center text-4xl font-bold text-white uppercase">Meet the Team</h1>
        </div>

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