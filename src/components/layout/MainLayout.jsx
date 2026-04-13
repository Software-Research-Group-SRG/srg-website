import { motion } from 'framer-motion'
import Navbar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import NeonTrailCursor from '../ui/NeonTrailCursor'

import PrismBackground from '../ui/PrimsBackground'

export default function MainLayout({ children }) {
  return (
     <div className="relative min-h-screen flex flex-col">
      
      <PrismBackground />
        <div className="valo-scanlines" />
        <div className="valo-corner valo-corner-tl" />
        <div className="valo-corner valo-corner-tr" />
        <div className="valo-corner valo-corner-bl" />
        <div className="valo-corner valo-corner-br" />

  
      <Navbar />

        {/* --- Decorative Shapes (Using your specific colors) --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Top Left Ellipse */}
          <motion.div
              className="
                  absolute 
                  top-[5%] 
                  left-[5%] 
                  w-30 
                  h-50 
                  md:top-[8%] 
                  md:left-[12%] 
                  md:w-22 md:h-84 
                  rounded-[100%] 
                  rotate-[35deg]"
                    style={{ 
                        backgroundColor: 'var(--shape-primary)', 
                        filter: 'drop-shadow(0px 0px 1px var(--shape-border))' 
                    }}
          />

          {/* Right Middle Triangle */}
          <motion.div
              className="
                  absolute 
                  right-[5%] 
                  top-[40%] 
                  md:right-[10%] 
                  md:top-[45%] 
                  border-t-[50px] 
                  border-l-[95px] 
                  border-b-[50px] 
                  md:border-t-[45px] 
                  md:border-l-[65px] 
                  md:border-b-[45px] 
                  border-t-transparent 
                  border-b-transparent 
                  rotate-[-15deg]"
                    style={{ 
                    borderLeftColor: 'var(--shape-secondary)', 
                    filter: 'drop-shadow(0px 0px 1px var(--shape-border))'
                    }}
          />
             

          {/* Left Small Triangle */}
          <motion.div
              className="
                  absolute 
                  hidden 
                  sm:block 
                  left-[-10px] 
                  top-[55%] 
                  border-t-[70px] 
                  border-r-[85px] 
                  border-b-[50px] 
                  border-t-transparent 
                  border-b-transparent 
                  rotate-[10deg]"
                    style={{ 
                    borderRightColor: 'var(--shape-tertiary)',
                    filter: 'drop-shadow(0px 0px 1px var(--shape-border))'
                    }}
          />

          {/* Bottom Right Ellipse */}
          <motion.div
              className="
                  absolute 
                  bottom-[5%] 
                  right-[2%] 
                  w-24 
                  h-50 
                  md:bottom-[10%] 
                  md:right-[8%] 
                  md:w-26 md:h-82 
                  rounded-[100%] 
                  rotate-[-55deg]"
                    style={{ 
                        backgroundColor: 'var(--shape-secondary)', 
                        filter: 'drop-shadow(0px 0px 1px var(--shape-border))'
                    }}
          />
        </div>

      <div className="relative z-10 flex-1">
        {children}
      </div>

      <Footer />
      <NeonTrailCursor />

    </div>
  )
}