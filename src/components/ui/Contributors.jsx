import React from 'react';
import membersData from '../../data/members.json';

function Contributors({ contributors }) {
  if (!contributors || contributors.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8"
              style={{ border: '2px solid var(--text-title2)', color: 'var(--text-title2)' }}
            >
              <span className="text-xs font-bold">!</span>
            </div>
            <div className="min-w-0">
              <div className="h-3 w-28 rounded-full placeholder-shimmer mb-1.5" />
              <div className="h-2 w-20 rounded-full placeholder-shimmer opacity-60" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className={`grid gap-x-8 gap-y-6 ${contributors.length > 6 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2' : 'grid-cols-1'}`}>
        {contributors.map((contributor, idx) => {
          const member = membersData.find(m => m.id === contributor.memberId);
          if (!member) return null;

          return (
            <div key={idx} className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <span className="text-black text-3xl font-extrabold leading-none select-none -mt-0.5">
                  !
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <span className="text-white font-bold text-[18px] tracking-wide">
                  {member.name}
                </span>
                <span className="text-[#3185FF] font-medium text-[15px] tracking-wide">
                  {contributor.roles.join(' / ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contributors;
