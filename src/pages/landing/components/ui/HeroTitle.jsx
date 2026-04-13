import { AnimatedText } from "./AnimatedText";

export const HeroTitle = () => {
    return (
         <AnimatedText
            className="text-5xl md:text-6xl lg:text-7xl text-slate-200 mb-6 font-medium max-w-4xl"
            lines={[
                "Redefining the",
                "Boundaries of Software"
            ]}
        />
    );
};
