const Photos = () => {
    return (
        <section id="articles" className="py-20 relative gsap-reveal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: 'var(--color-accent)' }}>$</span> articles --read
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technical breakdowns, security research, and field notes.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/30 mb-6">
                        <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Coming Soon</h3>
                    <p className="text-slate-400 mb-6">
                        Security research, technical breakdowns, and field notes are on the way.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        stay_tuned.sh
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Photos;
