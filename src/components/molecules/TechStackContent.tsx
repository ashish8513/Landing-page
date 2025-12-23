'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromRight,
  slideInFromLeft,
} from 'utils/Motion';
// import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { features } from 'utils/data';

const TechStackContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 lg:flex-row px-10 lg:px-20  w-full z-[20]"
    >
      <div className=" w-full flex flex-col gap-5  m-auto text-start lg:px-28">
        <div className="space-y-4 ">
          {features.map((feature) => {
            const Icon = feature.icon; // store component reference
            return (
              <div key={feature.id} className="flex gap-8">
                <div className="mt-3 object-contain">
                  {' '}
                  {Icon && <Icon color="#fff" fontSize={44} />}
                </div>
                <div>
                  <h2 className="text-3xl font-bold orbitron text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-xl text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/images/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default TechStackContent;
