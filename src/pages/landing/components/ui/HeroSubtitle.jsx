import { AnimatedText } from './AnimatedText';

export const HeroSubtitle = () => {
    return (
        <AnimatedText
            className="text-lg leading-relaxed text-gray-300 max-w-5xl mb-5"
            lines={[
                "The Software Research Group is an elite collective of innovators,",
                "engineers, and visionaries committed to pushing the frontiers of technology.",
                "We operate at the intersection of research and real-world application.",
                "From scalable architectures to cutting-edge cybersecurity frameworks,",
                "our multidisciplinary teams design systems that transform industries."
            ]}
        />
    );
};
