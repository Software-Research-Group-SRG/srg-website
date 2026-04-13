import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Scroll3DWrapper({ children }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "end 20%"],
    });

    // Zoom in and out based on scroll position (NOTE: Adjust zoom levels as needed)
    const scale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.6, 1],
        [0.92, 1.10, 1, 1]
    );

    // smooth vertical movement
    const y = useTransform(scrollYProgress, [0, 1], [10, 0]);

    // parallax
    const innerY = useTransform(scrollYProgress, [0, 1], [20, 0]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                y,
                transformOrigin: "bottom center",
            }}
            className="w-full will-change-transform"
        >
            <motion.div style={{ y: innerY }}>
                {children}
            </motion.div>
        </motion.div>
    );
}