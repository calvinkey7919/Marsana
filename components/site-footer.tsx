import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-2 tracking-tighter uppercase">Marsana</h2>
                        <p className="text-sm text-gray-500 max-w-sm">Premium car rental and leasing services in Jeddah. Established since 2007, committed to quality and reliability.</p>
                    </div>
                    <div>
                        <h6 className="text-xs font-bold uppercase mb-6 tracking-widest">Quick Links</h6>
                        <ul className="text-sm text-gray-400 space-y-4">
                            <li><Link href="#fleet" className="hover:text-white transition-colors">Fleet Inventory</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Corporate Solutions</Link></li>
                            <li><Link href="#chauffeur" className="hover:text-white transition-colors">Chauffeur Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Booking Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xs font-bold uppercase mb-6 tracking-widest">Language</h6>
                        <ul className="text-sm text-gray-400 space-y-4">
                            <li><button className="text-white hover:opacity-80">English</button></li>
                            <li><button className="hover:text-white font-arabic transition-colors">العربية</button></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} MARSANA RENT A CAR. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/admin" className="hover:text-brand-accent transition-colors text-gray-600">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
