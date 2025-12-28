export type XanoVehicle = {
    id: number;
    created_at: number;
    year: number;
    model: string;
    daily_rate: number;
    weekly_rate: number;
    monthly_rate: number;
    updated_at?: number;
    // NOTE: These fields are needed for the UI but appear missing in your Xano table screenshot.
    // We will handle them gracefully (optional) or you should add them to Xano.
    image?: { url: string } | string;
    category?: string;
}

export type XanoBooking = {
    id: number;
    created_at: number;
    vehicle_id: number;
    customer_name: string;
    customer_phone: string;
    pickup_date: string; // date string
    dropoff_date: string; // date string
    pickup_location: string; // enum
    booking_type: string; // enum
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export type XanoAdminUser = {
    id: number;
    name: string;
    email: string;
    token?: string; // For auth response
}
