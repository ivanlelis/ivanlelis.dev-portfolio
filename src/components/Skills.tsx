import '../styles/Skills.css';
import type { IconType } from 'react-icons';
import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {
    SiAngular,
    SiDotnet,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFlutter,
    SiDart,
    SiFigma,
    SiFirebase,
    SiSupabase,
    SiJavascript,
    SiTypescript,
} from 'react-icons/si';

type Skill = {
    name: string;
    Icon: IconType;
};

const skills: Skill[] = [
    { name: 'React.js', Icon: FaReact },
    { name: 'Angular.js', Icon: SiAngular },
    { name: 'Node.js', Icon: FaNodeJs },
    { name: '.NET', Icon: SiDotnet },
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'Flutter', Icon: SiFlutter },
    { name: 'Dart', Icon: SiDart },
    { name: 'Figma', Icon: SiFigma },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'Supabase', Icon: SiSupabase },
    { name: 'MS SQL', Icon: FaDatabase },
];

const MARQUEE_DURATION_MS = 42000; // time it takes to scroll one full block (tweak to taste)

const Skills = () => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const rafRef = useRef<number | null>(null);
    const lastTsRef = useRef<number | null>(null);
    const posRef = useRef<number>(0);
    const marqueeWidthRef = useRef<number>(0);
    const pausedRef = useRef<boolean>(false);

    useEffect(() => {
        const track = trackRef.current!;
        const inner = innerRef.current!;
        const container = scrollContainerRef.current!;
        if (!track || !inner || !container) return;

        // Measure inner width and compute speed
        const setMarqueeWidth = () => {
            // width of one group (includes padding-inline-end we added)
            const w = Math.ceil(inner.getBoundingClientRect().width);
            marqueeWidthRef.current = w || 0;
        };

        setMarqueeWidth();

        // ensure we start fully visible (no unexpected positive translate)
        posRef.current = 0;
        track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;

        // compute px-per-ms for one iteration (so one full group scrolls in MARQUEE_DURATION_MS)
        const getSpeedPxPerMs = () => {
            const w = marqueeWidthRef.current || 4;
            return w / MARQUEE_DURATION_MS;
        };

        // RAF loop
        const step = (ts: number) => {
            if (lastTsRef.current === null) lastTsRef.current = ts;
            const delta = ts - lastTsRef.current;
            lastTsRef.current = ts;

            if (!pausedRef.current && marqueeWidthRef.current > 0) {
                const speed = getSpeedPxPerMs();
                let pos = posRef.current - speed * delta; // move left
                // wrap seamlessly: when we've moved past -marqueeWidth, add marqueeWidth
                if (pos <= -marqueeWidthRef.current) {
                    pos += marqueeWidthRef.current;
                }
                posRef.current = pos;
                // apply transform with translate3d for smooth GPU-accelerated motion
                track.style.transform = `translate3d(${pos}px, 0, 0)`;
            }

            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        // observers to recompute measurements if layout changes
        const ro = new ResizeObserver(() => {
            // recompute width and also keep pos inside new bounds
            const prev = marqueeWidthRef.current;
            setMarqueeWidth();
            const newW = marqueeWidthRef.current;
            if (newW !== prev && newW > 0) {
                // normalize posRef to the negative range [-newW, 0)
                // keep previous pos as starting point for continuity
                let p = posRef.current;
                // reduce modulo into [0, newW)
                p = ((p % newW) + newW) % newW;
                // convert to negative range [-newW, 0)
                if (p > 0) p = p - newW;
                posRef.current = p;
                track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
            }
        });

        ro.observe(inner);
        ro.observe(container);

        // pause on pointer hover/focus
        const onEnter = () => {
            pausedRef.current = true;
        };
        const onLeave = () => {
            pausedRef.current = false;
            // reset last timestamp to avoid big delta
            lastTsRef.current = null;
        };

        container.addEventListener('mouseenter', onEnter);
        container.addEventListener('focusin', onEnter);
        container.addEventListener('mouseleave', onLeave);
        container.addEventListener('focusout', onLeave);

        // cleanup
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            ro.disconnect();
            container.removeEventListener('mouseenter', onEnter);
            container.removeEventListener('focusin', onEnter);
            container.removeEventListener('mouseleave', onLeave);
            container.removeEventListener('focusout', onLeave);
        };
    }, []);

    return (
        <section id="skills" className="section">
            <div className="container-w">
                <div className="skills-header">
                    <div>
                        <h2 className="section-title">My Skills</h2>
                        <div className="divider" />
                    </div>
                </div>

                {/* Horizontal marquee/track */}
                <div className="skills-scroll" ref={scrollContainerRef} aria-hidden={false}>
                    <div className="skills-track" role="list" aria-label="My skills" ref={trackRef}>
                        {/* inner group (measure this group's width) */}
                        <div className="skills-track-inner" ref={innerRef}>
                            {skills.map((s) => {
                                const Icon = s.Icon;
                                return (
                                    <div key={s.name} className="skill-card" role="listitem">
                                        <div className="skill-icon" aria-hidden>
                                            <Icon size={44} />
                                        </div>
                                        <div className="skill-name">{s.name}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* duplicate the inner group immediately after (aria-hidden so SRs don't read twice) */}
                        <div className="skills-track-inner" aria-hidden="true">
                            {skills.map((s, i) => {
                                const Icon = s.Icon;
                                return (
                                    <div key={`dup-${s.name}-${i}`} className="skill-card" role="listitem" aria-hidden="true">
                                        <div className="skill-icon" aria-hidden>
                                            <Icon size={44} />
                                        </div>
                                        <div className="skill-name">{s.name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;