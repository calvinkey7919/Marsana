export function VisionMissionSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-8 h-px bg-black"></span> Our Vision
                    </h3>
                    <p className="text-2xl font-light text-gray-800 leading-snug">
                        To lead in the corporate car rental industry as the preferred choice by delivering value-driven services with a strong commitment to growth.
                    </p>
                </div>
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-8 h-px bg-black"></span> Our Mission
                    </h3>
                    <p className="text-2xl font-light text-gray-800 leading-snug">
                        To offer services tailored to specific customer needs, addressing every stage of the journey with relevance, efficiency, and personalization.
                    </p>
                </div>
            </div>
        </section>
    );
}
