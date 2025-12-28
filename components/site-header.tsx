"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-8 group">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tighter text-brand-primary">MARSANA</span>
                        <span className="text-xs font-medium text-gray-400 font-arabic">مرسانا لتأجير السيارات</span>
                    </div>
                </Link>

                <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
                    {["Home", "Fleet", "Services", "Chauffeur", "About", "Contact"].map((item) => {
                        const href = item === "Chauffeur" ? "#chauffeur" : `#${item.toLowerCase()}`;
                        const label = item === "Chauffeur" ? "Chauffeur & Buses" : item === "About" ? "About Us" : item;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className="hover:text-black transition-colors"
                                scroll={true}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 mr-4">
                        <a href="tel:0508508490" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                            <Phone className="w-4 h-4" />
                        </a>
                        <a href="https://wa.me/966508508490" className="p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                        </a>
                    </div>

                    <button className="text-xs font-bold border-b-2 border-black pb-1 hover:opacity-80 transition-opacity">EN</button>
                    <button className="text-xs font-bold text-gray-400 pb-1 hover:text-black transition-colors">AR</button>

                    <Link
                        href="#fleet"
                        className="ml-4 bg-brand-primary text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-brand-secondary transition-all hover:scale-105"
                    >
                        Book a Car
                    </Link>
                </div>
            </div>
        </header>
    );
}
