"use client";

import { Vehicle } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

interface FleetSectionProps {
    vehicles: Vehicle[];
}

export function FleetSection({ vehicles }: FleetSectionProps) {
    return (
        <section id="fleet" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-light mb-2">Featured Fleet</h2>
                    <div className="w-12 h-1 bg-black mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vehicles.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="bg-white p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{car.category}</span>
                                <span className="text-xs font-bold text-gray-300">{car.year}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 line-clamp-1" title={car.model}>{car.model}</h3>
                            <div className="h-32 bg-gray-100 mb-6 flex items-center justify-center overflow-hidden relative rounded-sm">
                                <Image
                                    src={car.image}
                                    alt={car.model}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    unoptimized
                                />
                            </div>
                            <div className="flex justify-between items-end mt-auto">
                                <div>
                                    <p className="text-xs text-gray-500">Daily Rate</p>
                                    <p className="text-lg font-bold text-brand-primary">{car.daily} SAR</p>
                                </div>
                                <button className="bg-black text-white px-4 py-2 text-xs font-medium hover:bg-gray-800 transition-colors">Book Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
