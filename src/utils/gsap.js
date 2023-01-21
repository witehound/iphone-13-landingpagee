import gsap from "gsap";

export const animateQuote = (quotes) => {
  for (let q in quotes) {
    gsap.to(quotes[q].current, {
      y: 0,
      duration: 2.5,
      delay: q * 0.4,
    });
  }
};
