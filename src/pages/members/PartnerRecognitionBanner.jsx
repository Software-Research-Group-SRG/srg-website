import React from 'react';
import gfmicLogo from '../../assets/gfmicLogo.png'; 
import srgLogo from '../../assets/srgLogo.png'; 
import pupLogo from '../../assets/pupLogo.png'; 

function PartnerRecognitionBanner() {
    return (
        <div className="relative flex flex-col items-center justify-center py-12 px-4">
            {/* Title */}
            <h2 className="text-center text-2xl font-bold text-white mb-10 tracking-widest uppercase">
                OUR PARTNERS
            </h2>

            {/* The Ellipse Container */}
            <div 
                className="
                    mb-10
                    w-full 
                    max-w-[2400px] 
                    /* Reduced Heights: h-24 is 96px, h-48 is 192px */
                    h-24 md:h-48 
                    flex items-center justify-center 
                    overflow-hidden
                    rounded-[100%] 
                "
                style={{ 
                    backgroundColor: '#00162C', 
                    // Applying your requested drop-shadow style
                    filter: 'drop-shadow(0px 0px 1px #3185FF)',
                    background: 'radial-gradient(circle, #012143 0%, #00162C 80%)',
                    boxShadow: 'inset 0 0 40px rgba(49, 133, 255, 0.2)'
                }}
            >
                {/* LOGOS GRID - No rotation, just centering */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 px-10"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                
                >
                    
                    {/* Partner 1 */}
                    <div className="flex flex-col items-center gap-2">
                        <img src={gfmicLogo} alt="GFMIC" className="h-14 md:h-20 w-auto object-contain" />
                        <span className="text-[10px] md:text-sm text-white font-medium text-center">GFMIC Inc.</span>
                    </div>

                    {/* Partner 2 */}
                    <div className="flex flex-col items-center gap-2">
                        <img src={srgLogo} alt="SRG" className="h-14 md:h-20 w-auto object-contain" />
                        <span className="text-[10px] md:text-sm text-white font-medium text-center">
                            Software Research Group
                        </span>
                    </div>

                    {/* Partner 3 */}
                    <div className="flex flex-col items-center gap-2">
                        <img src={pupLogo} alt="PUP" className="h-14 md:h-20 w-auto object-contain" />
                        <span className="text-[10px] md:text-sm text-white font-medium text-center">PUP - QC</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PartnerRecognitionBanner;