import '../styles/Projects.css';
import itsaImg from '../assets/itsa.jpg';
import portfolioImg from '../assets/portfolio.png';

type Project = {
    id: number
    title: string
    description: string
    status: 'Work in progress' | 'Work Finished'
    icon: string
    technologies: string[]
    github?: string
    live?: string
    image?: string // optional image path or imported asset
    imagePosition?: string // optional object-position value, e.g. 'center 30%'
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Pully – The PR Manager',
        description: 'VSCode extension to manage PRs from GitHub, GitLab and Bitbucket without leaving your editor.',
        status: 'Work in progress',
        icon: '🧩',
        technologies: ['VS Code', 'TypeScript', 'REST'],
        github: '#',
        live: '#',
        // image: '/images/pully.png' // example: add a public path or import and assign
    },
    {
        id: 2,
        title: 'ivanlelis-dev',
        description: 'Portfolio to showcase my professional profile, skills, and projects.',
        status: 'Work Finished',
        icon: '🎬',
        technologies: ['React', 'TypeScript', 'Tailwind'],
        github: '#',
        image: portfolioImg,
    },
    {
        id: 3,
        title: 'ITSA Superapp',
        description: 'Mobile food delivery app for a local takoyaki shop in Dasmariñas, Cavite that features maps integration,\norder tracking, and sales forecasting.',
        status: 'Work Finished',
        icon: '🧭',
        technologies: ['Dart', 'Flutter', 'Firebase', 'Figma'],
        live: '#',
        image: itsaImg,
        imagePosition: 'center 20%'
    },
];

const StatusPill = ({ status }: { status: Project['status'] }) => {
    const isDone = status === 'Work Finished'
    return (
        <span className={`pill ${isDone ? 'bg-green-400/10 text-green-200 border-green-300/20' : 'bg-yellow-400/10 text-yellow-200 border-yellow-300/20'}`}>
            {status}
        </span>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container-w">
                <div className="projects-header">
                    <div>
                        <h2 className="section-title">My Projects</h2>
                        <div className="divider" />
                    </div>
                </div>

                <div className="projects-list">
                    {projects.map(p => (
                        <div key={p.id} className="project-card">
                            <div className="project-row">
                                <div className="project-main">
                                    <div className="project-visual">
                                        {p.image ? (
                                            <img
                                                src={p.image}
                                                alt={`${p.title} screenshot`}
                                                className="project-img"
                                                style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                                            />
                                        ) : (
                                            <div className="project-icon" aria-hidden>
                                                {p.icon}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="project-title">{p.title}</h3>
                                        <p className="project-desc" style={{ whiteSpace: 'pre-line' }}>
                                            {p.description}
                                        </p>
                                        <div className="project-meta">
                                            <StatusPill status={p.status} />
                                            {p.technologies.map(t => (
                                                <span key={t} className="pill">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-actions">
                                    {p.live && (
                                        <a href={p.live} className="btn-ghost">Know more →</a>
                                    )}
                                    {p.github && (
                                        <a href={p.github} className="btn-ghost">Source</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-more">
                    <button className="btn-primary">View More</button>
                </div>
            </div>
        </section>
    )
}

export default Projects;