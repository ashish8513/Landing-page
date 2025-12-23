import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-gray-800
        bg-[#0d0b1f]
        hover:border-purple-600
        transition-colors
        duration-300
      "
    >
      {/* Image wrapper */}
      <div className="relative w-full h-48">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4 bg-[#100D26]">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
