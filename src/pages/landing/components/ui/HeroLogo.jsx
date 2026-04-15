import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
const SrgLogo1 = "/srgLogo.png";

export const HeroLogo = () => {
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Logic
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const smoothRotateX = useSpring(rotateX, { damping: 20, stiffness: 200 });
    const smoothRotateY = useSpring(rotateY, { damping: 20, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / innerWidth;
            const y = (e.clientY - innerHeight / 2) / innerHeight;
            rotateX.set(-y * 20);
            rotateY.set(x * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [rotateX, rotateY]);

    // hexagon 
    const roundedHex = "M270,30 L430,123 Q450,135 450,160 L450,340 Q450,365 430,377 L270,470 Q250,480 230,470 L70,377 Q50,365 50,340 L50,160 Q50,135 70,123 L230,30 Q250,20 270,30 Z";

    // speeds for hover 
    const duration1 = isHovered ? 8 : 25;
    const duration2 = isHovered ? 12 : 40;

    return (
        <div
            style={{ perspective: 1200 }}
            className="relative flex items-center justify-center pt-0 pb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.svg
                viewBox="0 0 500 500"
                className="w-[300px] md:w-[480px] select-none"
                style={{
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                    transformStyle: "preserve-3d",
                    overflow: "visible"
                }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
            >
                {/* Orbital Hexagonal Frames */}
                <motion.g 
                    style={{ transform: "translateZ(10px)" }}
                    animate={{ scale: isHovered ? 1 : 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.path
                        key={`hex1-${isHovered}`}
                        d={roundedHex}
                        fill="none"
                        stroke={isHovered ? "#E0F2FE" : "#3185FF"}
                        strokeWidth={isHovered ? "1.5" : "4"}
                        strokeLinejoin="round"
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: 360,
                            filter: isHovered
                                ? "drop-shadow(0 0 4px #fff) drop-shadow(0 0 25px #3185FF) drop-shadow(0 0 120px #3185FF)"
                                : "drop-shadow(0 0 0px #3185FF)",
                            strokeOpacity: isHovered ? 1 : 0.6
                        }}
                        transition={{
                            rotate: { duration: duration1, repeat: Infinity, ease: "linear" },
                            default: { duration: 0.4 }
                        }}
                    />
                    <motion.path
                        key={`hex2-${isHovered}`}
                        d={roundedHex}
                        fill="none"
                        stroke={isHovered ? "#E0F2FE" : "#3185FF"}
                        strokeWidth={isHovered ? "1.5" : "4"}
                        strokeLinejoin="round"
                        initial={{ rotate: 360 }}
                        animate={{
                            rotate: 0,
                            filter: isHovered
                                ? "drop-shadow(0 0 3px #fff) drop-shadow(0 0 20px #3185FF) drop-shadow(0 0 90px #3185FF)"
                                : "drop-shadow(0 0 0px #3185FF)",
                            strokeOpacity: isHovered ? 1 : 0.4
                        }}
                        transition={{
                            rotate: { duration: duration2, repeat: Infinity, ease: "linear" },
                            default: { duration: 0.4 }
                        }}
                    />
                </motion.g>

                {/* Main Image in the center */}
                <g style={{ transform: "translateZ(80px)" }}>
                    <motion.image
                        href={SrgLogo1}
                        x="100" y="100"
                        width="300" height="300"
                        className="select-none pointer-events-none"
                        animate={{
                            y: [-5, 5, -5],
                            filter: isHovered
                                ? "drop-shadow(0 0 15px rgba(49, 133, 255, 0.6))"
                                : "drop-shadow(0 20px 30px rgba(0,0,0,0.3))"
                        }}
                        transition={{
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            filter: { duration: 0.4 }
                        }}
                    />
                </g>
            </motion.svg>
        </div>
    );
};