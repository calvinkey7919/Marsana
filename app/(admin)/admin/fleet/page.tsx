"use client";

import { useState } from "react";
import { FLEET_DATA, Vehicle } from "@/lib/data";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function FleetPage() {
    const [fleet, setFleet] = useState<Vehicle[]>(FLEET_DATA);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Fleet Management</h1>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800">
                    <Plus className="w-4 h-4" /> Add Vehicle
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Vehicle</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Daily Rate</th>
                            <th className="px-6 py-3">Weekly Rate</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fleet.map((car) => (
                            <tr key={car.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold">{car.model}</div>
                                            <div className="text-xs text-gray-500">{car.year}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{car.category}</td>
                                <td className="px-6 py-4">{car.daily} SAR</td>
                                <td className="px-6 py-4">{car.weekly} SAR</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-blue-600 mx-2"><Edit className="w-4 h-4" /></button>
                                    <button className="text-gray-400 hover:text-red-600 mx-2"><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
