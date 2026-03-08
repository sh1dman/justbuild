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

const milestoneLabels: { key: keyof Milestones; label: string; emoji: string }[] = [
    { key: "idea_locked", label: "idea", emoji: "💡" },
    { key: "first_screen", label: "first build", emoji: "🔨" },
    { key: "features_added", label: "features", emoji: "✨" },
    { key: "deployed", label: "deployed", emoji: "🚀" },
    { key: "shared", label: "shared", emoji: "🔗" },
];

export default function FloatingProgressOverlay() {
    const [milestones, setMilestones] = useState<Milestones | null>(null);
    const [isOpen, setIsOpen] = useState(false);

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

    if (!milestones) return null;

    const completed = milestoneLabels.filter((m) => milestones[m.key]).length;
    const total = milestoneLabels.length;

    if (completed === 0) return null;

    return (
        <>
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card cursor-pointer hover:scale-105 transition-transform"
                style={{ fontSize: "13px" }}
            >
                <span className="gradient-text font-semibold">
                    {completed}/{total}
                </span>
                <span style={{ fontSize: "11px", opacity: 0.6 }}>progress</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed top-14 left-4 z-50 p-4 rounded-xl glass-card min-w-[200px]"
                    >
                        <div className="flex flex-col gap-2">
                            {milestoneLabels.map((m) => (
                                <div
                                    key={m.key}
                                    className="flex items-center gap-2"
                                    style={{
                                        opacity: milestones[m.key] ? 1 : 0.35,
                                        fontSize: "13px",
                                    }}
                                >
                                    <span>{m.emoji}</span>
                                    <span
                                        style={{
                                            textDecoration: milestones[m.key]
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {m.label}
                                    </span>
                                    {milestones[m.key] && (
                                        <span style={{ color: "#00f0ff", marginLeft: "auto" }}>
                                            ✓
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
