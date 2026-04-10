import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import CurvedCarousel from "../../../../components/ui/CurvedCarousel";
import { PhotoSlide } from "../ui/PhotoSlide";
import { SLIDES } from "../../utils/gallery";
import { Caption } from "../ui/Caption";
import CarouselNav from "../ui/CarouselNav";

function GenerationsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const carouselSlides = Array.from({ length: 3 }, (_, repeatIndex) =>
        SLIDES.map((slide) => ({
            ...slide,
            carouselKey: `${slide.id}-${repeatIndex}`,
        }))
    ).flat();

    return (
        <SectionLayout subtitle="----// 004 - SRG THROUGH GENERATIONS">
            {/* Curved Carousel */}
            <CurvedCarousel
                items={carouselSlides}
                className="h-[350px] w-full sm:h-[450px] lg:h-[500px]"
                onActiveIndexChange={(index) =>
                    setActiveIndex(index % SLIDES.length)
                }
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
            <Caption
                text={
                    "The Twelve Generation of Student Innovators, Cultivating Excellence, Leadership, and Real World Readiness."
                }
            />
        </SectionLayout>
    );
}

export default GenerationsSection;
