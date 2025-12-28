"use client";

import { motion } from "framer-motion";

export default function AdminDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
        >
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                <div className="text-sm text-gray-500">{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Total Fleet</h3>
                    <p className="text-3xl font-bold">-</p>
                    <p className="text-xs text-gray-400 mt-2">Connecting to Xano...</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Active Bookings</h3>
                    <p className="text-3xl font-bold">-</p>
                    <p className="text-xs text-gray-400 mt-2">Connecting to Xano...</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Pending Requests</h3>
                    <p className="text-3xl font-bold text-amber-500">-</p>
                    <p className="text-xs text-amber-600 mt-2">Connecting to Xano...</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold mb-4">Recent Bookings</h2>
                <div className="py-8 text-center text-gray-400 text-sm">
                    Waiting for real booking data...
                </div>
            </div>
        </motion.div>
    );
}
