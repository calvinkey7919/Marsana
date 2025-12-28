"use client";

import { Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-black outline-none text-sm" />
                            <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-black outline-none text-sm" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-black outline-none text-sm" />
                        <textarea rows={4} placeholder="Message" className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-black outline-none text-sm"></textarea>
                        <button className="bg-black text-white w-full py-4 font-bold text-sm hover:bg-brand-secondary transition-colors">Send Message</button>
                    </form>
                </div>
                <div className="space-y-8">
                    <div className="bg-gray-100 h-64 w-full relative group overflow-hidden">
                        <iframe
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.6666!2d39.2274!3d21.5039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMwJzE0LjAiTiAzOcKwMTMnMzguNiJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-bold mb-2">Address</p>
                            <p className="text-gray-500">King Abdullah Rd, An Naseem,<br />Jeddah 23236, Saudi Arabia</p>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Contact</p>
                            <p className="text-gray-500">Phone: 050 850 8490</p>
                            <p className="text-gray-500">Web: marsanarac.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="tel:0508508490" className="bg-black text-white flex items-center gap-2 px-6 py-3 text-xs hover:bg-gray-800 transition-colors"><Phone className="w-4 h-4" /> Call Now</a>
                        <a href="https://wa.me/966508508490" className="bg-green-600 text-white flex items-center gap-2 px-6 py-3 text-xs hover:bg-green-700 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
