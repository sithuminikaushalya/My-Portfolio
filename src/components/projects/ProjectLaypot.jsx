import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLaypot = ({ name, description, date, demoLink, image, type }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex flex-col items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-3 custom-bg"
    >
      <div className="flex flex-col items-center justify-center space-y-2">
      <img src={image} alt={name} className="w-full h-32 lg:h-35 rounded-md opacity-80 mx-2 object-cover" />
        <h2 className="text-foreground items-center">{name}</h2>
        <p className="text-muted hidden items-center sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-muted" />
      <br></br>
      <p className="text-muted hidden sm:inline-block xs:text-foreground text-xs">{type}</p>

    </ProjectLink>
  );
};

export default ProjectLaypot;
