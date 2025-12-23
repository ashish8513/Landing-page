"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { categories, portfolioItems, projectsData } from "../data/servicesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from './../common/Button';
import { Icons } from './../common/Icons';
import GradientText from "../common/GradientText";
import Projects from './Projects';
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
import { ArrowRight } from "lucide-react";
export default function PortfolioSection() {
    const [active, setActive] = useState("All Work");
    const [isMounted, setIsMounted] = useState(false);

    const gridRef = useRef(null);
    const filterRef = useRef(null);
    const sectionRef = useRef(null);

    const filteredItems =
        active === "All Work"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === active);

    // Set mounted state
    useEffect(() => {
        setIsMounted(true);

        // Force visibility
        setTimeout(() => {
            if (sectionRef.current) {
                sectionRef.current.style.opacity = '1';
                sectionRef.current.style.visibility = 'visible';
            }
        }, 100);
    }, []);

    // Animate portfolio items (replay on scroll)
    useEffect(() => {
        if (!isMounted || !sectionRef.current || !gridRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial state to visible
            gsap.set(".portfolio-item", { opacity: 1, y: 0 });

            const items = gridRef.current.querySelectorAll(".portfolio-item");

            gsap.fromTo(
                items,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reset",
                        markers: false,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [active, isMounted]);

    // Animate filter buttons
    useEffect(() => {
        if (!isMounted || !sectionRef.current || !filterRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial state to visible
            gsap.set(".filter-btn", { opacity: 1, y: 0 });

            const buttons = filterRef.current.querySelectorAll(".filter-btn");

            gsap.fromTo(
                buttons,
                {
                    opacity: 0,
                    y: -12
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reset",
                        markers: false,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [isMounted]);

    // Refresh ScrollTrigger after mount
    useEffect(() => {
        if (!isMounted) return;

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

        return () => clearTimeout(timer);
    }, [isMounted]);

    // Additional refresh on window load
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);
        };

        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

  

    return (
        <div
        id="projects"
            ref={sectionRef}
            className="w-full text-white px-4 sm:px-6 md:px-10 lg:px-20 relative pb-20 py-20"
            style={{ opacity: 1, visibility: 'visible' }}
        >
         
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative mx-auto">
                    <GradientText
                        text={projectsData.title}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-60 orbitron"
                    />
                   
                </div>

         

           <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Be First to Experience <br />
          <span className="text-white">SnapCoat CRM</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base text-white/80"
        >
          Join the waitlist today and be among the first to transform your
          painting business
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
            Join the Waitlist
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        {/* Small note */}
        <p className="mt-4 text-xs text-white/60">
          • Limited founding member spots available
        </p>
      </div>
            </div>
        </div>
    );
}