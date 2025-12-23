'use client';

import React from 'react';
import { CheckCircle, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyExcitedSection = () => {
  const cards = [
    {
      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
      tag: 'REAL INDUSTRY EXPERIENCE',
      title: 'Built by a Painter',
      desc: 'Created by a 7-figure painting company owner who knows exactly what you need to succeed.',
    },
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      tag: 'INDUSTRY-SPECIFIC AI',
      title: 'AI That Gets Painting',
      desc: 'Smart proposals, accurate estimates, and automation designed specifically for paint projects.',
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      tag: 'FOUNDING MEMBER PERKS',
      title: 'Launch Day Benefits',
      desc: 'Founding members get exclusive pricing, priority support, and input on new features.',
    },
  ];

  const stats = [
    { value: '7+', label: 'Years Industry Experience', color: 'text-cyan-400' },
    { value: '$1M+', label: 'Revenue Managed', color: 'text-pink-400' },
    { value: '50+', label: 'Features Built', color: 'text-emerald-400' },
    { value: '100%', label: 'Painter Focused', color: 'text-orange-400' },
  ];

  return (
    <section className="w-full py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3/4 mx-auto rounded-3xl bg-[rgba(59,130,246,0.03)] border border-white/10 p-10"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Painting Contractors Are Excited
          </h2>
          <p className="text-gray-300 mt-3">
            The CRM that finally understands the painting industry
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {cards.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:border-cyan-400/30 transition"
            >
              <div className="flex items-center gap-2 mb-4">
                {item.icon}
                <span className="text-xs tracking-widest text-cyan-400 font-semibold">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className={`text-3xl font-bold ${s.color}`}>
                {s.value}
              </div>
              <p className="text-sm text-gray-300 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyExcitedSection;
