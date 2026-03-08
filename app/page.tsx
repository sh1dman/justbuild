"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const commands = [
    {
        cmd: "$start",
        desc: "begin building — brainstorm your idea and build it",
        icon: "⚡",
    },
    {
        cmd: "$brainstorm",
        desc: "plan a product — colors, layout, typography, docs",
        icon: "🧠",
    },
    {
        cmd: "$design",
        desc: "create a design system — UI/UX from scratch",
        icon: "🎨",
    },
    {
        cmd: "$fixit",
        desc: "something broke? auto-diagnose and fix it",
        icon: "🔧",
    },
    {
        cmd: "$imlost",
        desc: "stuck? get context-aware help instantly",
        icon: "🧭",
    },
    {
        cmd: "$deploy",
        desc: "put it on the internet — get a shareable link",
        icon: "🚀",
    },
];

const skills = [
    {
        title: "UI/UX Design",
        desc: "Premium design systems, 3D experiences, scroll animations, mobile-first layouts",
        icon: "🎨",
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        title: "Mobile Apps",
        desc: "React Native, Flutter, iOS Swift — cross-platform and native development",
        icon: "📱",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Systems & Architecture",
        desc: "Full-stack architecture, databases, Clean Architecture, DDD patterns",
        icon: "🏗️",
        gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
        title: "Product Brainstorm",
        desc: "Interview customers, define PRDs, plan colors, typography, and layouts before code",
        icon: "🧠",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Web Development",
        desc: "Next.js, React, Tailwind patterns, SEO, performance optimization",
        icon: "🌐",
        gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
        title: "Deploy & Ship",
        desc: "One-command deploy to Vercel. Share your creation with anyone, instantly",
        icon: "🚀",
        gradient: "from-rose-500/20 to-red-500/20",
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
    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* ═══ HERO ═══ */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Radial glow behind skull */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle, #00f0ff15 0%, #b347ff10 40%, transparent 70%)",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="relative z-10 flex flex-col items-center"
                >
                    {/* Skull logo */}
                    <div className="relative mb-8">
                        <div className="skull-glow rounded-full overflow-hidden w-28 h-28 md:w-36 md:h-36">
                            <Image
                                src="/luffyskull.jpg"
                                alt="JustBuild"
                                width={144}
                                height={144}
                                className="w-full h-full object-cover rounded-full"
                                priority
                            />
                        </div>
                        {/* Animated ring */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: "1px solid #00f0ff33",
                                animation: "pulse-ring 2s ease-out infinite",
                            }}
                        />
                    </div>

                    {/* Title */}
                    <h1
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-4 font-[family-name:var(--font-space-grotesk)]"
                    >
                        <span className="gradient-text">Just</span>
                        <span className="text-foreground">Build</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-foreground/50 max-w-md mb-8 font-[family-name:var(--font-manrope)]">
                        stop planning. start building. <br />
                        your AI co-pilot handles the rest.
                    </p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card rounded-xl px-6 py-3 font-mono text-sm text-foreground/70 cursor-default select-all"
                    >
                        <span className="text-[#00f0ff]">$</span> start
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-foreground/30">scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ═══ SKILLS ═══ */}
            <section className="relative px-6 py-32 max-w-6xl mx-auto">
                <motion.div {...fadeUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                        <span className="gradient-text">what you get</span>
                    </h2>
                    <p className="text-foreground/40 max-w-lg mx-auto">
                        25+ curated AI skills loaded and ready. design, build, ship —
                        anything.
                    </p>
                </motion.div>

                <motion.div
                    {...stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group cursor-default"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                                {skill.title}
                            </h3>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ═══ COMMANDS ═══ */}
            <section className="relative px-6 py-32 max-w-4xl mx-auto">
                <motion.div {...fadeUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                        <span className="gradient-text">commands</span>
                    </h2>
                    <p className="text-foreground/40 max-w-lg mx-auto">
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
                            className="glass-card rounded-xl p-4 flex items-center gap-4 hover:scale-[1.01] transition-all duration-200 group"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                                <code className="text-[#00f0ff] font-mono text-sm font-semibold">
                                    {item.cmd}
                                </code>
                                <p className="text-sm text-foreground/40 mt-0.5 truncate">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ TECH STACK ═══ */}
            <section className="relative px-6 py-32 max-w-4xl mx-auto">
                <motion.div {...fadeUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                        <span className="gradient-text">the stack</span>
                    </h2>
                    <p className="text-foreground/40 max-w-lg mx-auto">
                        you don&apos;t need to know any of this. the AI handles it all.
                    </p>
                </motion.div>

                <motion.div
                    {...stagger}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="glass-card rounded-xl p-5 text-center hover:scale-[1.03] transition-all duration-200 cursor-default"
                        >
                            <div className="text-2xl mb-2 opacity-60">{tech.icon}</div>
                            <span className="text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="px-6 py-16 text-center">
                <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-8" />
                <p className="text-sm text-foreground/30 font-[family-name:var(--font-manrope)]">
                    built by{" "}
                    <a
                        href="https://github.com/sh1dman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00f0ff]/60 hover:text-[#00f0ff] transition-colors"
                    >
                        shadman
                    </a>
                </p>
                <p className="text-xs text-foreground/15 mt-2">
                    just build 💀
                </p>
            </footer>
        </main>
    );
}
