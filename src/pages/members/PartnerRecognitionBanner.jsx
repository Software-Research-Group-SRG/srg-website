import React from 'react';
import gfmicLogo from '../../assets/logos-partner/GfmicLogo.png'; 
import srgLogo from '../../assets/logos-partner/srgLogo.png'; 
import pupLogo from '../../assets/logos-partner/PupLogo.png'; 

function PartnerRecognitionBanner() {
    return (
        <div className="mt-20 relative flex flex-col items-center justify-center py-12 px-4">
            {/* Title */}
            <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-8 tracking-widest uppercase">
                OUR PARTNERS
            </h2>

            {/* The Ellipse Container */}
            <div 
                className="
                    mb-10
                    w-full 
                    max-w-[1400px] 
                    /* 1. Taller min-height for mobile/tablet to prevent top/bottom clipping, fixed height for desktop */
                    min-h-[280px] lg:min-h-[260px] lg:h-[260px]
                    flex items-center justify-center 
                    overflow-hidden
                    rounded-[100%] 
                    relative
                    mx-auto
                "
                style={{ 
                    backgroundColor: '#00162C', 
                    filter: 'drop-shadow(0px 0px 1px #3185FF)',
                    background: 'radial-gradient(circle, #012143 0%, #00162C 80%)',
                    boxShadow: 'inset 0 0 40px rgba(49, 133, 255, 0.2)'
                }}
            >
                {/* LOGOS GRID */}
                <div 
                    className="
                        flex flex-wrap items-center justify-center 
                        /* 2. Scaled Gaps: Tighter on tablet (md:gap-12) so they don't hit the curved edges! */
                        gap-8 md:gap-12 lg:gap-20 
                        px-6 py-10 lg:py-8
                    "
                    style={{ fontFamily: 'var(--font-family-title), serif' }}
                >
                    
                    {/* Partner 1 */}
                    {/* ADDED: transition-transform duration-300 hover:scale-110 cursor-pointer */}
                    <div className="flex flex-col items-center justify-center gap-3 w-28 lg:w-36 transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <div className="h-14 lg:h-16 flex items-center justify-center">
                            <img src={gfmicLogo} alt="GFMIC" className="max-h-full w-auto object-contain" />
                        </div>
                        <span className="text-[10px] lg:text-[13px] text-white font-medium text-center leading-tight">
                            GFMIC Inc.
                        </span>
                    </div>

                    {/* Partner 2 */}
                    <div className="flex flex-col items-center justify-center gap-3 w-28 lg:w-36 transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <div className="h-14 lg:h-16 flex items-center justify-center">
                            <img src={srgLogo} alt="SRG" className="max-h-full w-auto object-contain" />
                        </div>
                        <span className="text-[10px] lg:text-[13px] text-white font-medium text-center leading-tight">
                            Software Research Group
                        </span>
                    </div>

                    {/* Partner 3 */}
                    <div className="flex flex-col items-center justify-center gap-3 w-28 lg:w-36 transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <div className="h-14 lg:h-16 flex items-center justify-center">
                            <img src={pupLogo} alt="PUP" className="max-h-full w-auto object-contain" />
                        </div>
                        <span className="text-[10px] lg:text-[13px] text-white font-medium text-center leading-tight">
                            PUP - QC
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PartnerRecognitionBanner;