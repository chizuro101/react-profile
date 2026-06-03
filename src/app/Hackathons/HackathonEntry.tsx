// components/HackathonEntry.tsx
import React from 'react';
import Image from 'next/image';

interface HackathonEntryProps {
  entryNumber: string;
  title: string;
  description: string;
  imageSrc?: string; // Optional project image source
  trophyType: 'first' | 'second' | 'third' | 'special' | 'participant' | string; // Specify trophy type
}

// Mapping of trophy types to image paths
const trophyImagePaths: Record<string, string> = {
  first: '/trophies/gold_trophy.png', // <-- Replace with actual paths relative to your public directory
  second: '/trophies/silver_trophy.png', // <-- Replace with actual paths
  third: '/trophies/bronze_trophy.png', // <-- Replace with actual paths
  special: '/trophies/special_trophy.png', // <-- Replace with actual paths
  participant: '/trophies/participant_trophy.png', // <-- Replace with actual paths
  // Add more mappings here if you have different trophy types
};

const HackathonEntry: React.FC<HackathonEntryProps> = ({
  entryNumber,
  title,
  description,
  imageSrc,
  trophyType,
}) => {
  // Get the correct image path based on trophyType from the mapping
  const trophyImagePath = trophyImagePaths[trophyType];

  return (
    // Main container: flex-col on mobile, flex-row on medium screens and up
    // Added responsive padding: smaller on mobile, larger on medium+
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-6 md:py-10 last:border-b-0">
      {/* Entry Number - Displays the sequential number for the hackathon entry */}
      {/* Adjusted text size for different breakpoints */}
      {/* Adjusted margin for different breakpoints */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0 w-full md:w-auto text-center md:text-left">
        {entryNumber}
      </div>

      {/* Content Area - Contains the project image and the text details */}
      {/* Flex direction changes based on screen size */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Image Placeholder for the Project Image - Displays the project image or a placeholder */}
        {/* Adjusted width for different breakpoints */}
        {/* Adjusted margin for different breakpoints */}
        <div className="w-full md:w-1/3 aspect-video flex items-center justify-center rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Project for ${title}`}
              className="object-contain w-full h-full rounded-sm"
              width={500}
              height={300}
            />
          ) : (
            <span className="text-gray-500 text-sm sm:text-base">Project Image</span>
          )}
        </div>

        {/* Text Content - Contains the trophy, title, and description */}
        <div className="flex-1">
          {/* Trophy Section - Displays the trophy icon */}
          <div className="flex items-center text-white/80 text-sm mb-2">
            {trophyImagePath && (
              <Image
                src={trophyImagePath}
                alt="Trophy"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 object-contain"
                width={20}
                height={20}
              />
            )}
          </div>

          {/* Title - Displays the title of the hackathon entry */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{title}</h3>

          {/* Description - Displays the description of the hackathon entry */}
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonEntry;
