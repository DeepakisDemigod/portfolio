"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Footer from "./Footer";

gsap.registerPlugin(SplitText);

export default function Projects() {
  const words = ["Contact"];
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.set(split.lines, { y: 50, opacity: 0 });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(split.lines, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power1.out",
              stagger: 0.2,
              onComplete: () => split.revert(),
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative p-4 sm:p-6 md:p-8 flex flex-col items-start justify-start overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg%3E%3Cpolygon fill='%23220000' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23440000' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23660000' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23880000' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23AA0000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <div
        ref={textRef}
        className="relative z-10 space-y-2 sm:space-y-3 md:space-y-4"
      >
        {words.map((word, index) => (
          <h1
            key={index}
            className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-extrabold bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 bg-clip-text text-transparent "
          >
            {word}
          </h1>
        ))}
      </div>
      <br />
      <Footer />
    </section>
  );
}
