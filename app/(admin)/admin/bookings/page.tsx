"use client";

import { useState } from "react";

export default function BookingsPage() {
    // In a real app, you would fetch these from Xano
    const [bookings] = useState<any[]>([]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Bookings Management</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                {bookings.length === 0 ? (
                    <div className="py-12">
                        <h3 className="text-lg font-bold text-gray-400 mb-2">No Bookings Yet</h3>
                        <p className="text-sm text-gray-400">New booking requests will appear here.</p>
                    </div>
                ) : (
                    <table className="w-full text-sm text-left">
                        {/* Table implementation */}
                    </table>
                )}
            </div>
        </div>
    );
}
