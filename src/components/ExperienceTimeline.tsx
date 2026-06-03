'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
// Removed unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  // ... your experiences array - Keep this array as is
  {
    id: 1,
    title: 'Bachelor of Science in Information Technology',
    company: 'Social Security System',
    year: 'Aug 2022 - May 2026',
    description: 'As a Bachelor of Science in Information Technology graduate, I developed strong technical and problem-solving skills through academic coursework and hands-on system development. I gained experience in building web-based applications and applying programming principles to real-world scenarios. Through consistent practice and project work, I was able to strengthen my abilities in software development, system analysis, and logical problem-solving, preparing me for professional roles in the IT industry.',
    logo: '/exp_logos/OIP-removebg-preview.png',
  },
  {
    id: 2,
    title: 'Student Trainee',
    company: 'Social Security System',
    year: 'Jul 2025 - Aug 2025',
    description: 'Attended a two-month workshop at SSS during my summer internship, where we were taught about the fundamentals of MS Excel, the proficiency of keyboarding, and the main components of a computer system.',
    logo: '/exp_logos/SSS_logo.png',
  },
  {
    id: 3,
    title: 'Student Trainee',
    company: 'Negros Oriental State University',
    year: 'Aug 2025 - Dec 2025',
    description: `Attended a five-month internship at SSS. Inside this, we are tasked with attending related seminars and maintaining grades on our academic standings.`,
    logo: '/exp_logos/SSS_logo.png',
  },
  {
    id: 4,
    title: 'Fullstack Developer',
    company: 'Negros Oriental State University - Bais campus',
    year: 'Mar 2026',
    description: 'As the Lead Programmer for our Capstone Project at NORSU, I led the design, development, and implementation of the system, overseeing the technical aspects of the project from planning to deployment. I collaborated closely with team members, provided technical guidance, and ensured that project requirements were successfully translated into functional and efficient solutions.',
    logo: '/exp_logos/OIP-removebg-preview.png',
  },
  {
    id: 5,
    title: 'Freelance AI Data Annotator',
    company: 'Tanjay City Bootcamp',
    year: 'Jun 2024 - Mar 2026',
    description: `Performed AI data annotation and labeling tasks to support machine learning model training. Ensured data accuracy, consistency, and quality while following project guidelines and annotation standards.`,
    logo: '/exp_logos/remot.webp',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5"> {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;