// src/hooks/useSmoothScroll.ts
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      duration: 1.2,
      smoothTouch: false,
    });

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.defaults({
      scroller: "#scroll-container",
      pinType: "transform",
    });

    ScrollTrigger.scrollerProxy("#scroll-container", {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true }) // thêm `{ immediate: true }`
          : lenis.targetScroll || window.scrollY
;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#scroll-container")?.style.transform
        ? "transform"
        : "fixed",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
