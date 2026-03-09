"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Milestones {
    idea_locked: boolean;
    first_screen: boolean;
    features_added: boolean;
    deployed: boolean;
    shared: boolean;
}

const milestoneLabels: { key: keyof Milestones; label: string; marker: string }[] = [
    { key: "idea_locked", label: "idea", marker: "01" },
    { key: "first_screen", label: "first build", marker: "02" },
    { key: "features_added", label: "features", marker: "03" },
    { key: "deployed", label: "deployed", marker: "04" },
    { key: "shared", label: "shared", marker: "05" },
];

export default function FloatingProgressOverlay() {
    const [milestones, setMilestones] = useState<Milestones | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const fetchMilestones = async () => {
            try {
                const res = await fetch("/milestones.json?" + Date.now());
                if (res.ok) {
                    const data = await res.json();
                    setMilestones(data);
                }
            } catch {
                // Milestones file not ready yet
            }
        };

        fetchMilestones();
        const interval = setInterval(fetchMilestones, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const resolvedTheme =
            storedTheme === "dark" || storedTheme === "light"
                ? storedTheme
                : systemPrefersDark
                  ? "dark"
                  : "light";

        document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
        setTheme(resolvedTheme);
    }, []);

    const completed = milestones
        ? milestoneLabels.filter((m) => milestones[m.key]).length
        : 0;
    const total = milestoneLabels.length;
    const nextMilestone = milestones
        ? milestoneLabels.find((m) => !milestones[m.key])
        : milestoneLabels[0];

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        window.localStorage.setItem("theme", nextTheme);
    };

    const jumpToCommands = () => {
        document.getElementById("commands")?.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
                {milestones && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="glass-card flex items-center gap-2 rounded-full px-3 py-1.5 transition-transform hover:scale-105"
                        style={{ fontSize: "13px" }}
                        aria-label="toggle build progress"
                    >
                        <span className="gradient-text font-semibold">
                            {completed}/{total}
                        </span>
                        <span className="text-[11px] text-[var(--color-subtle)]">
                            build path
                        </span>
                    </motion.button>
                )}

                <motion.button
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    onClick={toggleTheme}
                    className="glass-card rounded-full px-3 py-1.5 text-xs text-[var(--color-muted)] transition-transform hover:scale-105"
                    aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? "light" : "dark"}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && milestones && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="glass-card fixed top-14 left-4 z-50 min-w-[250px] rounded-2xl p-4"
                    >
                        <div className="mb-3">
                            <p className="text-sm font-semibold text-[var(--color-text)]">
                                your launch progress
                            </p>
                            <p className="mt-1 text-xs text-[var(--color-subtle)]">
                                {nextMilestone
                                    ? `next up: ${nextMilestone.label}`
                                    : "all milestones complete"}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {milestoneLabels.map((m) => (
                                <div
                                    key={m.key}
                                    className="flex items-center gap-2 text-[13px]"
                                    style={{
                                        opacity: milestones[m.key] ? 1 : 0.35,
                                    }}
                                >
                                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-faint)]">
                                        {m.marker}
                                    </span>
                                    <span
                                        className="text-[var(--color-muted)]"
                                        style={{
                                            textDecoration: milestones[m.key]
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {m.label}
                                    </span>
                                    {milestones[m.key] && (
                                        <span style={{ color: "#b98522", marginLeft: "auto" }}>
                                            ✓
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={jumpToCommands}
                            className="warm-pill mt-4 w-full rounded-full px-3 py-2 text-sm text-[var(--color-muted)] transition-transform hover:scale-[1.02]"
                        >
                            jump to commands
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
