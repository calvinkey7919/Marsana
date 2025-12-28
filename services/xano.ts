import { XanoVehicle, XanoBooking } from "@/types/xano";

const XANO_BASE_URL = process.env.NEXT_PUBLIC_XANO_API_URL;

class XanoService {
    private getHeaders() {
        return {
            "Content-Type": "application/json",
            // Authorization header can be added here if needed for protected endpoints
        };
    }

    async getFleet(): Promise<XanoVehicle[]> {
        if (!XANO_BASE_URL) return [];

        try {
            const res = await fetch(`${XANO_BASE_URL}/vehicle`, {
                headers: this.getHeaders(),
                // next: { revalidate: 60 } // Disabling cache to ensure fresh data always
                cache: 'no-store'
            });

            if (!res.ok) throw new Error("Failed to fetch fleet");

            const data: XanoVehicle[] = await res.json();
            return data;
        } catch (error) {
            console.error("Xano Fetch Error:", error);
            return [];
        }
    }

    // Simple Auth Simulation 
    // In a real scenario this would hit /auth/login endpoint on Xano
    async login(email: string, pass: string): Promise<boolean> {
        // Hardcoded for safety demo - replace with real Xano auth endpoint if available
        if (email === "admin@marsana.com" && pass === "admin123") return true;
        return false;
    }

    // Helper to map Xano data format to UI format
    mapToAppVehicle(xanoVehicle: XanoVehicle) {
        return {
            id: xanoVehicle.id.toString(),
            year: xanoVehicle.year?.toString() || new Date().getFullYear().toString(),
            model: xanoVehicle.model,
            daily: xanoVehicle.daily_rate,
            weekly: xanoVehicle.weekly_rate,
            monthly: xanoVehicle.monthly_rate,
            category: xanoVehicle.category || "Standard",
            image: xanoVehicle.image?.url || "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400"
        };
    }

    async createBooking(bookingData: Omit<XanoBooking, "id" | "created_at" | "status">) {
        if (!XANO_BASE_URL) throw new Error("API Configuration Missing");

        const res = await fetch(`${XANO_BASE_URL}/booking`, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({
                ...bookingData,
                status: "pending"
            }),
        });

        if (!res.ok) throw new Error("Booking Failed");
        return await res.json();
    }
}

export const xanoService = new XanoService();
