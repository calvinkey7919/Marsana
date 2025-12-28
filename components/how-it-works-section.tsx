export function HowItWorksSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    {[
                        { step: "01", title: "Choose Vehicle", desc: "Browse our wide selection of latest models." },
                        { step: "02", title: "Select Duration", desc: "Daily, weekly, or long-term options." },
                        { step: "03", title: "Submit Request", desc: "Fast online verification process." },
                        { step: "04", title: "Pickup/Delivery", desc: "Ready at branch or delivered to you." }
                    ].map((item) => (
                        <div key={item.step}>
                            <div className="text-4xl font-light text-gray-200 mb-4 italic font-serif">{item.step}</div>
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
