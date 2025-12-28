export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <form className="space-y-6 max-w-lg">
                    <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <input type="text" className="w-full border p-2 rounded" defaultValue="Marsana Rent A Car" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Contact Email</label>
                        <input type="email" className="w-full border p-2 rounded" defaultValue="info@marsana.com" />
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
