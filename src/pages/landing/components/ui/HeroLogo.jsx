import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import srgLogo from "@/assets/srg-hero-icon.png";

export const HeroLogo = () => {

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const smoothRotateX = useSpring(rotateX, { damping: 15, stiffness: 150 });
    const smoothRotateY = useSpring(rotateY, { damping: 15, stiffness: 150 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;

            const x = (e.clientX - innerWidth / 2) / innerWidth;
            const y = (e.clientY - innerHeight / 2) / innerHeight;

            rotateX.set(-y * 25); 
            rotateY.set(x * 25);  
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            style={{ perspective: 1000 }}
        >
            <motion.img
                src={srgLogo}
                alt="Logo"
                className="w-[300px] md:w-[350px] select-none"
                style={{
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                }}
                whileHover={{ scale: 1.05 }} 
            />
        </motion.div>
    );
};