import React from 'react';
import PartnerLogos from '../../../data/PartnerRecognition.json';

function getLogoSrc(imagePath) {
    return `/assets/${imagePath}`;
}

function PartnerRecognitionBanner() {
    return (
        <div className="mt-20 relative flex flex-col items-center justify-center py-12 px-4">
            {/* Title */}
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 tracking-widest uppercase">
                OUR PARTNERS
            </h2>

            {/* Ellipse Wrapper*/}
            <div className="mb-10 w-full max-w-[700px] md:max-w-[1100px] lg:max-w-[1800px] relative mx-auto">

                <div
                    className="absolute inset-0 rounded-[40%] md:rounded-[50%] lg:rounded-[50%]"
                    style={{
                        backgroundColor: '#00162C',
                        filter: 'drop-shadow(0px 0px 1px var(--border-color))',
                        background: 'radial-gradient(circle, #012143 0%, #00162C 80%)',
                        boxShadow: 'inset 0 0 40px rgba(49, 133, 255, 0.2)',
                    }}
                />

                {/* LOGOS */}
                <div
                    className="
                        relative z-10 w-full
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        place-items-center
                        gap-6 md:gap-10 lg:gap-14
                        px-[15%] md:px-[18%] lg:px-[20%]
                        py-16 md:py-20 lg:py-16
                    "
                    style={{ fontFamily: 'var(--members-font-family)' }}
                >
                    {PartnerLogos.map((partner) => (
                        <div key={partner.id} className="group flex flex-col items-center justify-center gap-3 md:gap-4 w-24 md:w-36 lg:w-44 transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <div className="h-16 md:h-24 lg:h-28 flex items-center justify-center">
                                <img 
                                    src={getLogoSrc(partner.image)} 
                                    alt={partner.name} 
                                    className="max-h-full w-auto object-contain" 
                                />
                            </div>

                            <span className="text-[11px] md:text-[14px] lg:text-[18px] text-white font-medium text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartnerRecognitionBanner;