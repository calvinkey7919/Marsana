"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { xanoService } from "@/services/xano";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const success = await xanoService.login(email, password);
            if (success) {
                // Set cookie logic (simplified client-side for demo, in prod use server actions or middleware)
                document.cookie = "admin_auth=true; path=/";
                router.push("/admin");
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            setError("Login failed");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid place-items-center bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Admin Portal</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <button
                        disabled={isLoading}
                        className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? "Verifying..." : "Access Dashboard"}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        Unauthorized access is prohibited.
                    </p>
                </form>
            </div>
        </div>
    );
}
