'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Kanban, FileText, Calendar, Palette, Mail, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Kanban className="w-8 h-8" />,
      title: "Visual Sales Pipeline",
      description: "Drag-and-drop Kanban board to manage leads from first contact to signed contract. Track every opportunity in real-time.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI-Powered Proposals",
      description: "Generate professional, detailed proposals in minutes. Our AI calculates costs based on your production rates and materials.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Project Scheduling",
      description: "Visual calendar with crew assignments, project timelines, and automated reminders. Never miss a deadline again.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Visualization",
      description: "AI-powered color rendering lets customers visualize their project before you start. Increase close rates by 40%.",
      color: "from-orange-500 to-yellow-400"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Automated Follow-ups",
      description: "Set up email and SMS sequences that nurture leads automatically. Focus on selling while we handle communication.",
      color: "from-red-500 to-rose-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Bank-level encryption, automated backups, and compliance with industry standards. Your data is safe with us.",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3/4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed specifically for painting contractors
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default FeaturesSection;