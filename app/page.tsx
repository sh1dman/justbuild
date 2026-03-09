"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SVGProps } from "react";

function WindowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
            <path d="M3.5 8.5h17" />
            <path d="M7 12h4" />
            <path d="M7 15h7" />
        </svg>
    );
}

function DeviceIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <rect x="4" y="3.5" width="10" height="17" rx="2.5" />
            <path d="M8 17.5h2" />
            <path d="M17 7h3.5" />
            <path d="M17 12h3.5" />
            <path d="M17 17h3.5" />
        </svg>
    );
}

function LayersIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <path d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
            <path d="m4 12 8 4.5 8-4.5" />
            <path d="m4 15.5 8 4.5 8-4.5" />
        </svg>
    );
}

function SparkIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
            <path d="M19 3v4" />
            <path d="M21 5h-4" />
        </svg>
    );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17" />
            <path d="M12 3.5c2.6 2.4 4.1 5.4 4.1 8.5s-1.5 6.1-4.1 8.5c-2.6-2.4-4.1-5.4-4.1-8.5s1.5-6.1 4.1-8.5Z" />
        </svg>
    );
}

function RocketIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
            <path d="M14.5 4.5c2.8.4 4.6 2.2 5 5-1.7 3.4-4.4 6.1-7.8 7.8-2.8-.4-4.6-2.2-5-5 1.7-3.4 4.4-6.1 7.8-7.8Z" />
            <path d="M9.5 14.5 6 18" />
            <path d="M12.5 17.5 10 20" />
            <circle cx="14.5" cy="9.5" r="1.2" />
        </svg>
    );
}

const commands = [
    {
        cmd: "$start",
        desc: "begin building — brainstorm your idea and build it",
        icon: "01",
    },
    {
        cmd: "$brainstorm",
        desc: "plan a product — colors, layout, typography, docs",
        icon: "02",
    },
    {
        cmd: "$design",
        desc: "create a design system — UI/UX from scratch",
        icon: "03",
    },
    {
        cmd: "$fixit",
        desc: "something broke? auto-diagnose and fix it",
        icon: "04",
    },
    {
        cmd: "$imlost",
        desc: "stuck? get context-aware help instantly",
        icon: "05",
    },
    {
        cmd: "$deploy",
        desc: "put it on the internet — get a shareable link",
        icon: "06",
    },
];

const skills = [
    {
        title: "UI/UX Design",
        desc: "Premium design systems, 3D experiences, scroll animations, mobile-first layouts",
        icon: WindowIcon,
        gradient: "from-[#dfcfb0] to-[#f0e6d4]",
    },
    {
        title: "Mobile Apps",
        desc: "React Native, Flutter, iOS Swift — cross-platform and native development",
        icon: DeviceIcon,
        gradient: "from-[#e7dcc6] to-[#f4ece0]",
    },
    {
        title: "Systems & Architecture",
        desc: "Full-stack architecture, databases, Clean Architecture, DDD patterns",
        icon: LayersIcon,
        gradient: "from-[#ead7b2] to-[#f3e7d1]",
    },
    {
        title: "Product Brainstorm",
        desc: "Interview customers, define PRDs, plan colors, typography, and layouts before code",
        icon: SparkIcon,
        gradient: "from-[#e1d8c4] to-[#eee5d7]",
    },
    {
        title: "Web Development",
        desc: "Next.js, React, Tailwind patterns, SEO, performance optimization",
        icon: GlobeIcon,
        gradient: "from-[#ddd2bc] to-[#f0e8db]",
    },
    {
        title: "Deploy & Ship",
        desc: "One-command deploy to Vercel. Share your creation with anyone, instantly",
        icon: RocketIcon,
        gradient: "from-[#ead9c1] to-[#f5ede2]",
    },
];

const techStack = [
    { name: "Next.js", icon: "▲" },
    { name: "HeroUI", icon: "◆" },
    { name: "Tailwind", icon: "◇" },
    { name: "Framer Motion", icon: "◎" },
    { name: "TypeScript", icon: "◈" },
    { name: "Codex CLI", icon: "◉" },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
};

export default function Home() {
    const scrollToCommands = () => {
        document.getElementById("commands")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="ambient-page min-h-screen overflow-x-hidden text-[var(--color-text)]">
            <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <div className="paper-halo absolute top-[14%] left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-95 blur-2xl" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="relative mb-8">
                        <div className="skull-glow h-28 w-28 overflow-hidden rounded-full md:h-36 md:w-36">
                            <Image
                                src="/luffyskull.jpg"
                                alt="JustBuild"
                                width={144}
                                height={144}
                                className="h-full w-full rounded-full object-cover"
                                priority
                            />
                        </div>
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: "1px solid rgba(195, 154, 92, 0.32)",
                                animation: "pulse-ring 2s ease-out infinite",
                            }}
                        />
                    </div>

                    <h1 className="mb-4 text-6xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] md:text-8xl">
                        <span className="text-[var(--color-text)]">Just</span>
                        <span className="gradient-text">Build</span>
                    </h1>

                    <p className="max-w-xl text-lg text-[var(--color-muted)] font-[family-name:var(--font-manrope)] md:text-xl">
                        build with a calmer starting point.
                    </p>

                    <p className="mb-8 mt-3 max-w-md text-sm leading-7 text-[var(--color-subtle)] font-[family-name:var(--font-manrope)] md:text-base">
                        stop planning. start building. your AI co-pilot handles the rest
                        without the visual noise.
                    </p>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        type="button"
                        onClick={scrollToCommands}
                        className="warm-pill rounded-full px-10 py-4 font-mono text-base text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                        <span className="text-[#b98522] dark:text-[var(--color-text)]">$</span>{" "}
                        start
                    </motion.button>
                </motion.div>
            </section>

            <section className="relative mx-auto max-w-6xl px-6 py-32">
                <motion.div {...fadeUp} className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold font-[family-name:var(--font-space-grotesk)] md:text-5xl">
                        <span className="gradient-text">what you get</span>
                    </h2>
                    <p className="mx-auto max-w-lg text-[var(--color-subtle)]">
                        25+ curated AI skills loaded and ready. design, build, ship —
                        anything.
                    </p>
                </motion.div>

                <motion.div
                    {...stagger}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skills.map((skill, i) => (
                        (() => {
                            const SkillIcon = skill.icon;
                            return (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card group cursor-default rounded-[28px] p-6 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div
                                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-[#d7ccb8] transition-transform group-hover:scale-110 dark:text-[#5f5a54] ${skill.gradient}`}
                            >
                                <SkillIcon className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
                                {skill.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[var(--color-subtle)]">
                                {skill.desc}
                            </p>
                        </motion.div>
                            );
                        })()
                    ))}
                </motion.div>
            </section>

            <section id="commands" className="relative mx-auto max-w-4xl px-6 py-32">
                <motion.div {...fadeUp} className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold font-[family-name:var(--font-space-grotesk)] md:text-5xl">
                        <span className="gradient-text">commands</span>
                    </h2>
                    <p className="mx-auto max-w-lg text-[var(--color-subtle)]">
                        type these in the terminal. the AI handles everything else.
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {commands.map((item, i) => (
                        <motion.div
                            key={item.cmd}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="glass-card group flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 hover:scale-[1.01]"
                        >
                            <span className="font-mono text-sm tracking-[0.2em] text-[var(--color-faint)] transition-transform group-hover:scale-110 group-hover:text-[var(--color-muted)]">
                                {item.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                                <code className="font-mono text-sm font-semibold text-[#b98522]">
                                    {item.cmd}
                                </code>
                                <p className="mt-0.5 truncate text-sm text-[var(--color-subtle)]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="relative mx-auto max-w-4xl px-6 py-32">
                <motion.div {...fadeUp} className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold font-[family-name:var(--font-space-grotesk)] md:text-5xl">
                        <span className="gradient-text">the stack</span>
                    </h2>
                    <p className="mx-auto max-w-lg text-[var(--color-subtle)]">
                        you don&apos;t need to know any of this. the AI handles it all.
                    </p>
                </motion.div>

                <motion.div
                    {...stagger}
                    className="grid grid-cols-2 gap-4 md:grid-cols-3"
                >
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="glass-card cursor-default rounded-2xl p-5 text-center transition-all duration-200 hover:scale-[1.03]"
                        >
                            <div className="mb-2 text-2xl text-[var(--color-subtle)]">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <footer className="px-6 py-16 text-center">
                <div className="mx-auto mb-8 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent" />
                <p className="text-sm text-[var(--color-muted)] font-[family-name:var(--font-manrope)]">
                    built by{" "}
                    <a
                        href="https://github.com/sh1dman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b98522] transition-colors hover:text-[#946d2c]"
                    >
                        shadman
                    </a>
                </p>
                <p className="mt-2 text-xs text-[var(--color-faint)]">just build 💀</p>
            </footer>
        </main>
    );
}
