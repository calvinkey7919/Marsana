"use client";

import { Calendar, Briefcase, TrendingUp, RefreshCw, MapPin, Globe } from "lucide-react";

export function ServicesSection() {
    const services = [
        { icon: Calendar, title: "Daily & Monthly Rentals", desc: "Flexible short-term solutions for individuals and business visitors." },
        { icon: Briefcase, title: "Corporate Rentals", desc: "Customized packages for businesses and project-based transport." },
        { icon: TrendingUp, title: "Operational Leasing", desc: "Long-term fleet management without the ownership burden." },
        { icon: RefreshCw, title: "Replacement Vehicles", desc: "Ensuring zero downtime with immediate replacement support." },
        { icon: MapPin, title: "Airport & City Use", desc: "Professional transit services across major hubs and cities." },
        { icon: Globe, title: "Cross-Border Rental", desc: "Availability for travel beyond KSA borders with full documentation." },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl font-light mb-2">Our Services</h2>
                        <p className="text-gray-500">Tailored mobility for every requirement.</p>
                    </div>
                    <div className="w-full md:w-1/2 h-[1px] bg-gray-200 mb-4 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 border border-gray-100 hover:bg-black hover:text-white transition-all duration-300 group cursor-default">
                            <service.icon className="w-8 h-8 mb-6 text-gray-400 group-hover:text-white transition-colors" />
                            <h5 className="text-lg font-bold mb-4">{service.title}</h5>
                            <p className="text-sm opacity-60 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
