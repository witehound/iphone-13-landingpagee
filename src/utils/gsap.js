import gsap from "gsap";

export const animateQuote = (quotes) => {
  for (let q of quotes) {
    console.log(q);
    gsap.to(q.current, {
      y: 0,
      duration: 2.5,
    });
  }
};
