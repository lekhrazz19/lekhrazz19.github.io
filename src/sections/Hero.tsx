

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* ASCII Art Logo */}
                    <pre className="ascii-art mb-8" style={{ color: 'var(--color-accent)' }}>
                        {`
 ██      ███████ ██   ██ ██████   █████      ██ 
 ██      ██      ██  ██  ██   ██ ██   ██     ██ 
 ██      █████   █████   ██████  ███████     ██ 
 ██      ██      ██  ██  ██   ██ ██   ████   ██ 
 ███████ ███████ ██   ██ ██   ██ ██   ██ █████  
`}
                    </pre>

                    <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                        Cybersecurity Researcher & Ethical Hacker<br />
                        Building secure digital ecosystems and uncovering vulnerabilities before the bad guys do.
                    </p>

                    {/* Install Command */}
                    <div className="code-block mb-8 text-left inline-block">
                        <span className="prompt">$</span>
                        <span>git clone https://github.com/lekhrazz19/portfolio</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <a href="#projects" className="btn-primary-terminal">
                            View Projects
                        </a>
                        <a href="#contact" className="btn-terminal">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
