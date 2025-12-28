"use client";

import Link from "next/link";
import { Zap, Car, ShieldCheck, Clock, Key } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center lg:text-left"
                >
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Est. 2007 • Jeddah</p>
                    <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
                        Reliable. Fast.<br />
                        <span className="font-bold">Affordable.</span>
                    </h1>
                    <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                        Marsana Rent A Car provides high-quality rental services at affordable and competitive prices. We continuously strive to exceed service expectations by delivering reliable, fast, and customer-focused mobility solutions.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10 text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2 justify-center lg:justify-start"><Zap className="w-4 h-4 text-gray-400" /> Express Service</div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start"><Car className="w-4 h-4 text-gray-400" /> Wide Range</div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start"><ShieldCheck className="w-4 h-4 text-gray-400" /> After-Sales Support</div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start"><Clock className="w-4 h-4 text-gray-400" /> 24/7 Service</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link href="#fleet" className="bg-brand-primary text-white px-10 py-4 rounded-sm text-center font-semibold hover:bg-brand-secondary transition-all">Book a Car</Link>
                        <Link href="#fleet" className="border border-gray-200 px-10 py-4 rounded-sm text-center font-semibold hover:bg-gray-50 transition-all">View Fleet</Link>
                    </div>
                </motion.div>

                {/* Right: Visual Graphic */}
                <div className="relative flex justify-center items-center py-20 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full flex items-center justify-center bg-gradient-to-br from-white/40 to-white/10 border border-black/5"
                        style={{
                            boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
                        }}
                    >
                        <div className="absolute top-[15%] left-[15%] w-2.5 h-2.5 bg-white rounded-full blur-[1px] shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]"></div>
                        <div className="text-center z-10">
                            <Key className="w-20 h-20 text-gray-200 mb-4 mx-auto" />
                            <div className="text-sm tracking-widest text-gray-400 uppercase">Premium Mobility</div>
                        </div>
                        {/* Decorative line */}
                        <div className="absolute bottom-0 right-0 w-1 h-64 bg-gray-100 rotate-[35deg] origin-bottom -z-10"></div>
                    </motion.div>

                    {/* Text Below */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-[-20px] lg:bottom-[-60px] text-center w-full"
                    >
                        <h2 className="text-3xl font-light tracking-[0.2em] text-gray-800">有 态 度</h2>
                        <p className="text-[10px] tracking-[0.5em] text-gray-400 mt-2 uppercase">MARSANA CORPORATE LEASING</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
