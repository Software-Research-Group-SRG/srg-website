import { motion } from "framer-motion";

export const AnimatedText = ({ lines = [], className = "" }) => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const line = {
    hidden: {
      y: "120%",
    },
    show: {
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }} 
        className={className}
    >
      {lines.map((text, i) => (
        <div key={i} className="overflow-hidden">

          <motion.div variants={line} className="relative inline-block">

            <span className="text-white">
              {text}
            </span>

            <motion.span
              className="absolute inset-0"
              initial={{
                backgroundPosition: "100% 0%",
                opacity: 0,
              }}
              animate={{
                backgroundPosition: "0% 0%",
                opacity: [0, 1, 0], 
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, rgba(49,133,255,0.8) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </motion.span>

          </motion.div>

        </div>
      ))}
    </motion.div>
  );
};