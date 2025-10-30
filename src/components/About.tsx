import '../styles/About.css';

const About = () => {

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    <div className="about-side">
                        <h2 className="section-title">About me</h2>
                        <div className="divider" />
                    </div>

                    <div className="about-main text-white/80">
                        <p>
                            I’ve been working on projects that involve both web and mobile development, mainly focusing on building smooth and responsive user experiences. My core stack includes React, Angular, TypeScript, JavaScript, Dart, HTML, and CSS.
                        </p>
                        <br></br>
                        <p>
                            Alongside development, I’ve also been using Figma for several years to design intuitive interfaces and collaborate effectively with teams on product layouts and prototypes.
                        </p>
                        <br></br>
                        <p>
                            I enjoy exploring modern frameworks and writing clean, maintainable code that brings ideas to life. As a mobile developer, I’m always looking for ways to improve performance, enhance design, and deliver better app experiences.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;