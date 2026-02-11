import React, { useEffect, useState, useRef } from "react";


// Simple helper if cn doesn't exist in the project structure
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "140s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={classNames(
                "scroller relative z-20 w-full overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={classNames(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[280px] md:w-[350px] max-w-full relative rounded-2xl border border-slate-200 shrink-0 h-[320px] md:h-[400px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
                        key={item.title + idx}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-slate-200">
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-20 h-full flex flex-col justify-end p-6">
                            <div className="flex items-center gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-xs font-bold text-mlm-green-400 uppercase tracking-wider">
                                    {item.subtitle || "Premium Collection"}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-2">
                                {item.description || "Discover the power of nature with our scientifically formulated blend."}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
