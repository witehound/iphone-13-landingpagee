import React, { useRef, useLayoutEffect } from "react";
import { Section, Left, Right, Center } from "./ColorsStyles";
import { colorsComponentTl } from "../../utils";

const Colors = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);

  useLayoutEffect(() => {
    colorsComponentTl(
      sectionRef.current,
      leftRef.current,
      rightRef.current,
      centerRef.current
    );
  }, []);
  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={centerRef}>Sierra Blue</Center>
      <Right ref={rightRef} />
    </Section>
  );
};

export default Colors;
