import '../styles/Hero.css';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import profileImg from '../assets/PROIMAGE.png';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                {/* background blobs */}
                <div className="hero-blob-left" />
                <div className="hero-blob-right" />

                <div className="hero-grid">
                    {/* Text */}
                    <div className="hero-text">
                        <div className="hero-badges">
                            <span className="pill">Mobile and Web Developer</span>
                            <span className="pill">UI/UX Designer</span>
                        </div>

                        <h1 className="hero-title">
                            Mobile and Web Developer
                            <br />
                            <span className="hero-title-sub">&amp; UI/UX Designer</span>
                        </h1>

                        <p className="hero-sub">
                            Always looking for smart solutions through clean code and great UX. Let’s build something impactful.
                        </p>

                        <div className="hero-socials">
                            <a
                                href="https://www.linkedin.com/in/your-profile"
                                className="pill"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="h-4 w-4" aria-hidden="false" />
                            </a>

                            <a
                                href="https://github.com/your-username"
                                className="pill"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <FaGithub className="h-4 w-4" aria-hidden="false" />
                            </a>

                            <a
                                href="https://www.behance.net/your-profile"
                                className="pill"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Behance"
                                title="Behance"
                            >
                                <FaBehance className="h-4 w-4" aria-hidden="false" />
                            </a>
                        </div>

                        <div className="hero-cta">
                            <a
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-primary"
                            >
                                Let’s Talk
                            </a>
                            <a
                                href="#projects"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-ghost"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="hero-visual-wrapper">
                        <div className="hero-visual">
                            <img
                                src={profileImg}
                                alt="Ivan Lelis"
                                loading="lazy"
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;