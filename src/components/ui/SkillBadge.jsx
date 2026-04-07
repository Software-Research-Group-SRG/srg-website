import React from 'react';
import { motion } from 'framer-motion';

function SkillBadge({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="flex items-center flex-wrap gap-3 mt-6">
      <span className="text-[1.2rem] font-[800] text-[var(--brand-white)] mr-2">
        Skills
      </span>
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="
            flex items-center justify-center 
            bg-[var(--text-title)] 
            text-[var(--text-title1)] 
            px-5 py-[7px] 
            rounded-full 
            text-[0.85rem] 
            font-bold 
            whitespace-nowrap 
            cursor-pointer
          "
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}

export default SkillBadge;
