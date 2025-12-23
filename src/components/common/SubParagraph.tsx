'use client';

import React from 'react';

interface SubParagraphProps {
  title: string;
  className?: string;
}

const SubParagraph = ({ title, className = "" }: SubParagraphProps) => {
  return (
    <p
      className={`text-sm md:text-base font-normal max-w-[730px] text-center mx-auto text-[#FFFFFF99] leading-6 px-2 font_mmr ${className}`}
    >
      {title}
    </p>
  );
};

export default SubParagraph;
