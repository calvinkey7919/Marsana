export interface Vehicle {
    id: string;
    year: string;
    model: string;
    daily: number;
    weekly: number;
    monthly: number;
    category: string;
    image: string;
}

// Images are placeholders from Unsplash to match the vibe
export const FLEET_DATA: Vehicle[] = [
    { id: "1", year: "2023", model: "Hyundai Elantra", daily: 150, weekly: 945, monthly: 3600, category: "Standard", image: "https://images.unsplash.com/photo-1623126742514-91b05549079a?auto=format&fit=crop&q=80&w=400" },
    { id: "2", year: "2024", model: "Hyundai Accent", daily: 110, weekly: 630, monthly: 2550, category: "Economy", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400" },
    { id: "3", year: "2024", model: "Hyundai Grand i10", daily: 95, weekly: 560, monthly: 2100, category: "Compact", image: "https://images.unsplash.com/photo-1669628042539-75574577881c?auto=format&fit=crop&q=80&w=400" },
    { id: "4", year: "2024", model: "Suzuki Dzire", daily: 95, weekly: 560, monthly: 2100, category: "Economy", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400" },
    { id: "5", year: "2024", model: "Toyota Yaris", daily: 110, weekly: 630, monthly: 2550, category: "Standard", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=400" },
    { id: "6", year: "2024", model: "Nissan Sunny", daily: 95, weekly: 560, monthly: 2100, category: "Economy", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400" },
    { id: "7", year: "2024", model: "Suzuki Baleno", daily: 100, weekly: 630, monthly: 2250, category: "Medium", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400" },
    { id: "8", year: "2025", model: "KIA Pegas", daily: 95, weekly: 560, monthly: 2100, category: "Compact", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=400" },
    { id: "9", year: "2025", model: "Hyundai Accent", daily: 140, weekly: 910, monthly: 2850, category: "Economy", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400" },
    { id: "10", year: "2025", model: "Hyundai i10", daily: 95, weekly: 560, monthly: 2100, category: "Compact", image: "https://images.unsplash.com/photo-1669628042539-75574577881c?auto=format&fit=crop&q=80&w=400" },
    { id: "11", year: "2025", model: "KIA K3", daily: 140, weekly: 910, monthly: 2850, category: "Standard", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=400" },
    { id: "12", year: "2025", model: "Suzuki Baleno", daily: 115, weekly: 700, monthly: 2550, category: "Medium", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400" },
    { id: "13", year: "2025", model: "Toyota Corolla", daily: 172, weekly: 1050, monthly: 3800, category: "Standard", image: "https://images.unsplash.com/photo-1623126742514-91b05549079a?auto=format&fit=crop&q=80&w=400" },
];
