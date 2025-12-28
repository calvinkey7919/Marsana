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
                next: { revalidate: 60 } // Cache for 60 seconds
            });

            if (!res.ok) throw new Error("Failed to fetch fleet");

            return await res.json();
        } catch (error) {
            console.error("Xano Fetch Error:", error);
            return [];
        }
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
