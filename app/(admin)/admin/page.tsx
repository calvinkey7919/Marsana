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
                    <p className="text-3xl font-bold">13</p>
                    <p className="text-xs text-green-500 mt-2">+2 New this month</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Active Bookings</h3>
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-xs text-gray-400 mt-2">Currently on rent</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Pending Requests</h3>
                    <p className="text-3xl font-bold text-amber-500">3</p>
                    <p className="text-xs text-amber-600 mt-2">Requires attention</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold mb-4">Recent Bookings</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Vehicle</th>
                                <th className="px-6 py-3">Dates</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">Ahmed Al-Sayed</td>
                                <td className="px-6 py-4">2024 Toyota Yaris</td>
                                <td className="px-6 py-4">Dec 28 - Dec 30</td>
                                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Pending</span></td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">Corporate Client A</td>
                                <td className="px-6 py-4">2023 Hyundai Elantra</td>
                                <td className="px-6 py-4">Dec 25 - Jan 5</td>
                                <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Active</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
}
