"use client";
import { Quote } from "lucide-react";
import React, { useState } from "react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        setEmail("");
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 text-white bg-transparent">
            <div className="w-full max-w-md space-y-10">

                {/* QUOTE CARD */}
                {/* QUOTE CARD */}
                <div className="relative rounded-2xl bg-[#0B1220]/70 backdrop-blur-xl border border-white/10 p-6 shadow-xl">

                    {/* Quote icon */}
                    <div className="absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Quote size={18} />
                    </div>

                    <div className="flex gap-6 items-start">

                        {/* LEFT : Big Avatar */}
                        <div className="h-28 w-28 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 shrink-0" />

                        {/* RIGHT : Text */}
                        <div>
                            <p className="text-sm leading-relaxed text-slate-300 italic">
                                <span className="text-cyan-400 font-medium">SnapCoat is personal.</span>{" "}
                                It’s built from what I’ve learned running a{" "}
                                <span className="text-purple-400">7-figure painting business</span> —
                                what actually works, what wastes time, and what creates a{" "}
                                <span className="text-pink-400">premium experience</span> clients can feel.
                            </p>

                            {/* Signature */}
                            <p
                                className="mt-6 text-xl text-blue-400 cursive"
                              
                            >
                                — Braiden Smith
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                                Founder, SnapCoat
                            </p>
                        </div>
                    </div>
                </div>


                {/* WAITLIST CARD */}
                <div className="rounded-2xl bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-center mb-2">
                        Get Early Access
                    </h2>

                    <p className="text-center text-sm text-slate-400 mb-8">
                        Be first to know when we launch. Founding members get special perks.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold hover:opacity-90 transition shadow-lg"
                        >
                            ✨ Join the Waitlist
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-500 mt-6">
                        No spam. Unsubscribe anytime.
                    </p>

                    {/* SOCIALS */}
                    <div className="mt-6 flex justify-center gap-4">
                        {["𝕏", "f", "in"].map((icon) => (
                            <div
                                key={icon}
                                className="h-9 w-9 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition"
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <p className="text-center text-xs text-slate-500">
                    Already joined?{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        Check your status
                    </span>
                </p>
            </div>
        </section>
    );
}
