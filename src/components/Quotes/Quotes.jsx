import React, { useRef, useEffect } from "react";
import { Section, TextContainer, Text } from "./QuotesStyles.js";
import { animateQuote } from "../../utils/gsap.js";

const Quotes = () => {
  const textLineOne = useRef(null);
  const textLineTwo = useRef(null);
  const textLineThree = useRef(null);
  const textLineFour = useRef(null);
  const textLineFive = useRef(null);

  useEffect(() => {
    animateQuote([
      textLineOne,
      textLineTwo,
      textLineThree,
      textLineFour,
      textLineFive,
    ]);
  }, []);
  return (
    <Section>
      <TextContainer>
        <Text>
          <span ref={textLineOne}>
            You Cant Connect The Dots Looking Forward.
          </span>
        </Text>
        <Text>
          <span ref={textLineTwo}>
            You Can Only Conneect The Dots Lokking Backward.
          </span>
        </Text>
        <Text>
          <span ref={textLineThree}>So You Have To Trust The Dots</span>
        </Text>
        <Text>
          <span ref={textLineFour}>Will SomeHow Connect In Your Future.</span>
        </Text>
        <Text>
          <span ref={textLineFive}>Steve Jobs</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotes;
