"use client";

type Star = {
    left: string;
    top: string;
    size: number;
    delay: string;
    duration: string;
};

function makeStars(count: number, seed: number, minSize: number, maxSize: number): Star[] {
    return Array.from({ length: count }, (_, index) => {
        const value = seed + index * 37;
        const left = `${(value * 17) % 100}%`;
        const top = `${(value * 29) % 100}%`;
        const size = minSize + ((value * 13) % (maxSize - minSize + 1));
        const delay = `${((value * 11) % 18) / 2}s`;
        const duration = `${4 + ((value * 7) % 8)}s`;

        return { left, top, size, delay, duration };
    });
}

const nearStars = makeStars(70, 3, 2, 4);
const midStars = makeStars(44, 11, 1, 3);
const farStars = makeStars(28, 19, 1, 2);

export default function Starfield() {
    return (
        <div className="starfield" aria-hidden="true">
            <div className="starfield-layer starfield-layer-near">
                {nearStars.map((star, index) => (
                    <span
                        key={`near-${index}`}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                        }}
                    />
                ))}
            </div>

            <div className="starfield-layer starfield-layer-mid">
                {midStars.map((star, index) => (
                    <span
                        key={`mid-${index}`}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                        }}
                    />
                ))}
            </div>

            <div className="starfield-layer starfield-layer-far">
                {farStars.map((star, index) => (
                    <span
                        key={`far-${index}`}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
