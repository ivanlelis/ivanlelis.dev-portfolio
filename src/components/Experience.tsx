import '../styles/Experience.css';

const timeline = [
    {
        range: 'Jun 2025 – Present',
        role: 'Jr. Mobile Developer',
        place: 'Avanza Inc.',
        desc: 'Mobile app developer with Angular and Ionic. Building APIs with .NET; DB with MS SQL.',
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container-w">
                <div className="experience-header">
                    <h2 className="section-title">My Job Experience</h2>
                    <div className="divider" />
                </div>

                <div className="timeline">
                    <div className="timeline-rail" />
                    <div className="timeline-list">
                        {timeline.map((t, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-point" />
                                <div className="timeline-card">
                                    <div className="timeline-range">{t.range} · {t.place}</div>
                                    <h3 className="timeline-role">{t.role}</h3>
                                    <p className="timeline-desc">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;