'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SparkleIcon from 'utils/SparkleIcon';

const Banner = () => {
  return (
    <section className="w-full flex flex-col items-center text-white pt-24 pb-20">
      
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 px-6 py-2 rounded-full border border-yellow-400/30 text-sm text-yellow-300 flex items-center gap-2"
      >
        <SparkleIcon size={16} color="#facc15" />
        LAUNCHING NEW YEAR 2026
        <SparkleIcon size={16} color="#facc15" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight"
      >
        The CRM Built for{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Painting Contractors
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-3xl text-center text-gray-300 text-base md:text-lg"
      >
        Transform your painting business with our all-in-one AI-powered platform.
        Join the waitlist to be among the first to experience the future of
        painting business management.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <button className="px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition">
          ✨ Join the Waitlist →
        </button>

        <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
          Explore Features
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 grid grid-cols-1 bg-[rgba(59,130,246,0.03)] sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-6"
      >
        {[
          { title: '7+', desc: 'Years Industry Experience' },
          { title: '$1M+', desc: 'Revenue Managed' },
          { title: '50+', desc: 'Features Built' },
          { title: '100%', desc: 'Painter Focused' },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold">{item.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;