import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import CurvedCarousel from "../../../../components/ui/CurvedCarousel";
import { PhotoSlide } from "../ui/PhotoSlide";
import { SLIDES } from "../../utils/gallery";
import { Caption } from "../ui/Caption";
import { AnimatedText } from "../ui/AnimatedText";
import CarouselNav from "../ui/CarouselNav";

function GenerationsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <SectionLayout subtitle="----// 004 - SRG THROUGH GENERATIONS">

           <div className="mt-16 md:mt-16">

           {/* Curved Carousel */}
            <CurvedCarousel
                items={SLIDES}
                className="h-[350px] w-full sm:h-[450px] lg:h-[500px]"
                onActiveIndexChange={setActiveIndex}
                onSwiper={setSwiperInstance}
                renderSlide={(item, index) => (
                    <PhotoSlide
                        item={item}
                        isActive={SLIDES[activeIndex]?.id === item.id}
                    />
                )}
            />

            {/* Navigation */}
            <CarouselNav
                    count={SLIDES.length}
                    activeIndex={activeIndex}
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                    onDotClick={(i) => swiperInstance?.slideToLoop(i)}
                />

                {/* Caption */}
                <AnimatedText
                    lines={[
                        "The Twelve Generation of Student Innovators,",
                        "Cultivating Excellence, Leadership,",
                        "and Real World Readiness."
                    ]}
                    className="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-6"
                />

            </div>

        </SectionLayout>
    );
}

export default GenerationsSection;
