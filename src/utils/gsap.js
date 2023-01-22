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

export const fromTo = (elem) => {
  gsap.fromTo();
};

export const to = (elem) => gsap.to(elem.position, { x: 1 });

export const phoneScrollTrigerOne = (elem, camera) => {
  const trigger = {
    trigger: elem,
    start: "top top",
    bottom: "bottom+=500 bottom",
    markers: true,
  };
  const t1 = gsap.timeline({
    scrollTrigger: trigger,
  });

  t1.fromTo(
    camera.position,
    {
      y: 2,
    },
    { y: 0 }
  ).fromTo(
    camera.position,
    {
      x: 1,
    },
    { x: 0 }
  );
};

export const designComponentTl = (container, textOne, textTwo) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=200 top",
        bottom: "bottom top",
        scrub: true,
      },
      delay: 0.4,
    })
    .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
    .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

export const displayComponentTl = (container, textOne, textTwo) =>
  gsap
    .timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=300 top",
        bottom: "bottom top",
        scrub: true,
      },
      delay: 0.4,
    })
    .fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1")
    .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1");
