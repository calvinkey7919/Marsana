```
"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { LayoutDashboard, Car, Calendar, Settings, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Simple client-side protection
        const checkAuth = () => {
             const authCookie = document.cookie.split('; ').find(row => row.startsWith('admin_auth='));
             if (!authCookie) {
                 router.push("/app/login"); // Redirect to login
                 // Fallback if that route doesn't exist (it is at /admin/login actually)
                 router.push("/admin/login");
             } else {
                 setIsAuthorized(true);
             }
             setIsChecking(false);
        };
        checkAuth();
    }, [router]);

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Fleet', href: '/admin/fleet', icon: Car },
        { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    const handleLogout = () => {
        document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push("/admin/login");
    };

    if (isChecking) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400 text-sm">Verifying Session...</div>;
    }

    if (!isAuthorized) {
         return null; // Will redirect via useEffect
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white p-6 flex flex-col hidden md:flex">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold tracking-tighter">MARSANA</h1>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Admin Panel</span>
                </div>
                
                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <Link 
                           key={item.href} 
                           href={item.href}
                           className={`flex items - center gap - 3 px - 4 py - 3 rounded - lg text - sm font - medium transition - colors ${ pathname === item.href ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white' } `}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
                
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white text-sm font-medium mt-auto w-full text-left transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Log Out
                </button>
            </aside>
            
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
