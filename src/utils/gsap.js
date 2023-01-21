import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateQuote = (quotes) => {
  for (let q in quotes) {
    gsap.to(quotes[q].current, {
      y: 0,
      duration: 2.5,
      delay: q * 0.4,
    });
  }
};

export const createGsapPlugIn = () => gsap.registerPlugin(ScrollTrigger);

export const createFixedHero = (elem) =>
  ScrollTrigger.create({
    trigger: elem,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
