"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, User, Phone, CheckCircle } from "lucide-react";
import { Vehicle } from "@/lib/data";
import { xanoService } from "@/services/xano";

interface BookingModalProps {
    vehicle: Vehicle | null;
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ vehicle, isOpen, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pickupDate: "",
        dropoffDate: "",
        location: "Jeddah Airport",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!vehicle) return;

        setIsSubmitting(true);
        setError("");

        try {
            await xanoService.createBooking({
                vehicle_id: parseInt(vehicle.id),
                customer_name: formData.name,
                customer_phone: formData.phone,
                pickup_date: formData.pickupDate,
                dropoff_date: formData.dropoffDate,
                pickup_location: formData.location,
                booking_type: "daily",
            });
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({ name: "", phone: "", pickupDate: "", dropoffDate: "", location: "Jeddah Airport" });
            }, 3000);
        } catch (err) {
            setError("Failed to submit booking. Please try again.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && vehicle && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto grid place-items-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/80 backdrop-blur-xl border border-white/20 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
                        >
                            {/* Header */}
                            <div className="bg-brand-primary p-6 text-white flex justify-between items-center relative overflow-hidden">
                                <div className="z-10 relative">
                                    <p className="text-xs uppercase tracking-widest opacity-70">Book Your Drive</p>
                                    <h3 className="text-2xl font-bold">{vehicle.model}</h3>
                                    <p className="text-sm opacity-90 mt-1">{vehicle.daily} SAR <span className="text-xs opacity-70">/ Day</span></p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                {/* Decorative circle */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                            </div>

                            <div className="p-8">
                                {isSuccess ? (
                                    <div className="text-center py-10 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Booking Requested!</h4>
                                        <p className="text-gray-500 max-w-xs mx-auto text-sm">
                                            We check availability and confirm your reservation shortly via WhatsApp or Phone.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Customer Info */}
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-sm"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="Phone Number (e.g. 050 123 4567)"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        {/* Dates */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Pickup</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                                    <input
                                                        required
                                                        type="date"
                                                        value={formData.pickupDate}
                                                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                                                        className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Return</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                                    <input
                                                        required
                                                        type="date"
                                                        min={formData.pickupDate}
                                                        value={formData.dropoffDate}
                                                        onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
                                                        className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Location</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                                                <select
                                                    value={formData.location}
                                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all text-sm appearance-none"
                                                >
                                                    <option>Jeddah Airport</option>
                                                    <option>Main Branch (An Naseem)</option>
                                                    <option>Delivery to Hotel</option>
                                                </select>
                                            </div>
                                        </div>

                                        {error && <p className="text-red-500 text-xs text-center">{error}</p>}

                                        <button
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-secondary transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                        >
                                            {isSubmitting ? "Processing..." : "Confirm Booking Request"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
