import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function BaseProfileDetails() {
  const navigate = useNavigate();   

  return (
    <article className="max-w-[1600px] mx-auto sm:px-4 py-7 text-[var(--text-title1)]">
        <button className="back-button" onClick={() => navigate(-1)}>
            Back
        </button>


        {/* Header */}
        <header className="
            relative overflow-hidden 
            mt-8 p-5 
            backdrop-blur-sm 
            border-4 border-[var(--border-color)] 
            rounded-[30px_0px_30px_0px] 
            shadow-[0_0_20px_var(--border-color)]
        ">

            <div className='flex items-center'>
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    className="
                        w-[130px] h-[130px] 
                        rounded-[25px_4px_25px_4px] 
                        mr-[25px] 
                        object-cover 
                        border-2 border-[var(--border-color)] 
                        shadow-[0_0_15px_var(--img-shadow-border)] 
                        brightness-110 contrast-110
                    "
                />

                <div className='flex flex-col'>
                    <div className="text-[1.2rem] font-medium leading-[1.2] mt-5">

                        <h1 style={{color: 'var(--text-main)' }}>
                            SHANELLA A. CAGULANG
                        </h1>

                        <h2 style={{color: 'var(--text-title2)' }}>
                            SRG 12th Generation - Overall Leader
                        </h2>

                        <p style={{color: 'var(--text-main)'}}>
                            Bachelor of Science in Information Technology
                        </p>
                    </div>

                    {/* Skills Section Wrapper */}
                    <div className="flex items-center flex-wrap gap-3 mt-6">
                    
                        <span className="text-[1.2rem] font-[800] text-[var(--brand-white)] mr-2">
                            Skills
                        </span>

                        {/* The Loop */}
                        {['Frontend Developer', 'Web Developer', 'Mobile Application Developer', 'UI/UX Designer'].map((skill, i) => (
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
                </div>
            </div>
        </header>


        {/* This is the main content of profile details */}
        <div className="
            relative overflow-hidden 
            mt-8 p-5 
            backdrop-blur-sm 
            border-4 border-[var(--border-color)] 
            rounded-[30px_0px_30px_0px] 
        ">

            {/* ABOUT CONTENT */}
            <div className="flex items-start gap-8 w-full py-4">
                {/* Left Side: The Label */}
                <h2 className="min-w-[100px] text-[1.2rem] font-bold text-[var(--text-main)]">
                    ABOUT
                </h2>

                {/* Right Side: The Content */}
                <div className="
                    flex-1 
                    text-[1rem] 
                    leading-relaxed 
                    text-[var(--text-main)] 
                    opacity-90
                    relative 
                    overflow-hidden 
                    p-5 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit 
                    amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a 
                    ullamcorper malesuada, nunc orci fermentum quam.
                </div>
            </div>

            {/* ABOUT CONTENT */}
            <div className="flex items-start gap-8 w-full py-4">
                {/* Left Side: The Label */}
                <h2 className="min-w-[100px] text-[1.2rem] font-bold text-[var(--text-main)]">
                    EXPERIANCE
                </h2>

                {/* Right Side: The Content */}
                <div className="
                    flex-1 
                    text-[1rem] 
                    leading-relaxed 
                    text-[var(--text-main)] 
                    opacity-90
                    relative 
                    overflow-hidden 
                    p-5 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit 
                    amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a 
                    ullamcorper malesuada, nunc orci fermentum quam.
                </div>
            </div>

            {/* ABOUT CONTENT */}
            <div className="flex items-start gap-8 w-full py-4">
                {/* Left Side: The Label */}
                <h2 className="min-w-[100px] text-[1.2rem] font-bold text-[var(--text-main)]">
                    PROJECTS
                </h2>

                {/* Right Side: The Content */}
                <div className="
                    flex-1 
                    text-[1rem] 
                    leading-relaxed 
                    text-[var(--text-main)] 
                    opacity-90
                    relative 
                    overflow-hidden 
                    p-5 
                    backdrop-blur-sm 
                    border border-[var(--border-color)] 
                    rounded-[10px]
                    shadow-[0_0_20px_var(--border-color)]
                    bg-[var(--bg-gradient)]
                ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit 
                    amet eros nec nulla faucibus tincidunt. Vivamus ultricies, sapien a 
                    ullamcorper malesuada, nunc orci fermentum quam.
                </div>
            </div>

            



        </div>



        
    </article>
  );
}

export default BaseProfileDetails;