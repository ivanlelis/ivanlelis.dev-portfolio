import '../styles/Navigation.css';
import { useState, useEffect, useRef } from 'react'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const firstMenuItemRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
            const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'contact']
            const current = sections.find(id => {
                const el = document.getElementById(id)
                if (!el) return false
                const r = el.getBoundingClientRect()
                return r.top <= 100 && r.bottom >= 100
            })
            if (current) setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isMenuOpen])

    // focus first item & lock body scroll when open
    useEffect(() => {
        if (isMenuOpen) {
            // small timeout to wait for panel to mount
            setTimeout(() => firstMenuItemRef.current?.focus(), 80)
            // lock body scroll
            const prev = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            return () => { document.body.style.overflow = prev }
        }
    }, [isMenuOpen])

    const scrollTo = (id: string) => {
        setIsMenuOpen(false) // close mobile menu if open
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const nav = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
            <div className="container-w">
                {/* inner glass container - desktop uses grid to center nav; on mobile we render burger + centered brand */}
                <div className={`mt-4 relative flex items-center justify-between glass gradient-ring px-4 sm:px-6 h-14 ${isScrolled ? 'shadow-lg' : ''}`}>

                    {/* Mobile: burger button (visible on small screens only) */}
                    <button
                        type="button"
                        className="mobile-burger md:hidden"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(v => !v)}
                    >
                        {/* simple accessible hamburger / X icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                            {isMenuOpen ? (
                                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 6h18" />
                                    <path d="M3 12h18" />
                                    <path d="M3 18h18" />
                                </g>
                            )}
                        </svg>
                    </button>

                    {/* Brand: centered on mobile, left on desktop */}
                    <button onClick={() => scrollTo('hero')} className="brand flex items-center gap-2 font-extrabold text-white">
                        <span className="brand-text">ivanlelis.dev</span>
                    </button>

                    {/* Desktop center nav (hidden on small screens) */}
                    <div className="hidden md:flex items-center gap-1 nav-center">
                        {nav.map(n => (
                            <button
                                key={n.id}
                                onClick={() => scrollTo(n.id)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === n.id
                                    ? 'text-blue-300 bg-white/10 ring-1 ring-white/10'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {n.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile sidebar + overlay (slide-in) */}
                {/* Overlay */}
                <div
                    className={`mobile-sidebar-overlay md:hidden ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden={!isMenuOpen}
                />

                {/* Sidebar panel */}
                <aside
                    className={`mobile-sidebar md:hidden ${isMenuOpen ? 'open' : ''}`}
                    role="dialog"
                    aria-label="Mobile menu"
                    aria-hidden={!isMenuOpen}
                >
                    <div className="mobile-menu-inner">
                        {nav.map((n, idx) => (
                            <button
                                key={n.id}
                                ref={idx === 0 ? firstMenuItemRef : undefined}
                                onClick={() => scrollTo(n.id)}
                                className={`mobile-menu-item ${activeSection === n.id ? 'active' : ''}`}
                            >
                                {n.label}
                            </button>
                        ))}
                        <div className="mobile-menu-cta">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">Contact</a>
                        </div>
                    </div>
                </aside>
            </div>
        </nav>
    )
}

export default Navigation;