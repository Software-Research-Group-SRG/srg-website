import { motion } from "framer-motion";

// Fade in animation for sections(NOTE: NOT YET USED, WILL BE USED IN FUTURE SECTIONS)
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function FadeInStagger({ children, className = "" }) {
    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                      <motion.div key={i} variants={item}>
                          {child}
                      </motion.div>
                  ))
                : children}
        </motion.div>
    );
}