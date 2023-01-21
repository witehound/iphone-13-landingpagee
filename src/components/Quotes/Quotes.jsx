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
            &#8220; You Cant Connect The Dots Looking Forward.
          </span>
        </Text>
        <Text>
          <span ref={textLineTwo}>
            &nbsp;&nbsp;&nbsp;You Can Only Conneect The Dots Looking Backward.
          </span>
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;
          <span ref={textLineThree}>So You Have To Trust The Dots</span>
        </Text>
        <Text>
          &nbsp;&nbsp;&nbsp;
          <span ref={textLineFour}>
            Will SomeHow Connect In Your Future. &#8221;
          </span>
        </Text>
        <Text>
          <span ref={textLineFive} className="author">
            &#x23AF; Steve Jobs
          </span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotes;
