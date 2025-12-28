"use client";

import { Users } from "lucide-react";
import Image from "next/image";

export function ChauffeurSection() {
    return (
        <section id="chauffeur" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-black text-white p-12 flex flex-col lg:flex-row gap-12 items-center rounded-sm">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-light mb-6">Chauffeur Service & <span className="font-bold">Group Transit</span></h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Professional chauffeur-driven vehicles for executive travel, staff movement, and events. Our fleet includes luxury sedans and high-capacity buses.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full"><Users className="w-5 h-5" /></div>
                                <div>
                                    <h6 className="font-bold">13 & 20 Seater Buses</h6>
                                    <p className="text-xs text-gray-500">Perfect for staff movement and group travel.</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">Book Chauffeur Service</button>
                    </div>
                    <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-800 flex items-center justify-center overflow-hidden relative rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400"
                                alt="Bus"
                                fill
                                className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                                unoptimized
                            />
                        </div>
                        <div className="aspect-video bg-gray-800 flex items-center justify-center overflow-hidden relative rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&q=80&w=400"
                                alt="Executive"
                                fill
                                className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
