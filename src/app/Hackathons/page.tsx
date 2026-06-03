// src/app/Hackathons.tsx

"use client";
 
import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import HackathonEntry from "./HackathonEntry";

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: "01",
    title: "Presidential Academic Awardee",
    description: "Besides being a developer and a Freelance AI Data Annotator, I am also a recipient of the Presidential Academic Award. This recognition reflects my dedication to academic excellence and consistent performance throughout my studies. It highlights my commitment to maintaining high standards in my coursework while continuously improving my knowledge and skills in the field of Information Technology.",
    imageSrc: '/solutions/pres.jpg', // Replace with the actual image path
    trophyType: "third", // Specify the trophy type
  },
  {
    entryNumber: "02",
    title: "Dean's Lister",
    description: "Besides being a developer and a Freelance AI Data Annotator, I am also a Dean’s Lister. This recognition reflects my consistent academic performance and dedication to excellence throughout my studies. It highlights my commitment to maintaining strong grades while continuously improving my knowledge and skills in the field of Information Technology. This achievement also demonstrates my discipline, time management, and perseverance in balancing academic requirements with hands-on technical projects and other responsibilities.",
    imageSrc: '/solutions/dean.jpg', // Replace with the actual image path
    trophyType: "special", // Specify the trophy type
  },
  {
    entryNumber: "03",
    title: "Social Engineering Webinar",
    description: "Participated in a Social Engineering Webinar, gaining insights into common cyber threats, human-based attack techniques, and best practices for improving cybersecurity awareness and digital safety.",
    imageSrc: '/solutions/engineering.png', // Replace with the actual image path
    trophyType: "participant", // Specify the trophy type (using participant as a placeholder for 4th)
  },
  {
    entryNumber: "04",
    title: "Cybersecurity Introduction",
    description: "Cybersecurity IntroductionParticipated in a Social Engineering Webinar, gaining insights into common cyber threats, human-based attack techniques, and best practices for improving cybersecurity awareness and digital safety.",
    imageSrc: '/solutions/cyber.png', // Replace with the actual image path
    trophyType: "first", // Specify the trophy type
  },
];

export default function Hackathons() {
  return (
    <>
      {/* Main content area for Hackathons */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      { /* Make this hidden on mobile */ }
      {/* Added responsive hidden class */}
        <div className="hidden md:block" style={{ width: '100%', height: '600px', position: 'absolute', top: '0', zIndex: -1, opacity: 0.5 }}>
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Honors, Awards & Recognition"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20"> {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
            <FallingText
              text={` Besides being a developer and a Freelance AI Data Annotator, I actively participate in various competitions and academic events. These opportunities allow me to work on real-world problem-solving while collaborating with diverse and talented individuals.:`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10"> {/* Changed mb-25 to mb-10 for smaller mobile margin */}
            <FallingText
              text={` Besides being a developer and content creator, I am big on joining competitions, like hackathons. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>


          {/* Render Hackathon Entries */}
          {/* Adjusted margin top for responsiveness */}
          <div className="mt-20 md:mt-40"> {/* Adjusted margin top */}
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                description={entry.description}
                imageSrc={entry.imageSrc}
                trophyType={entry.trophyType}
              />
            ))}
          </div>
        </div>


      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Delacruz, Johnmark Q.. All rights reserved.</p>
      </footer>
    </>
  );
};
