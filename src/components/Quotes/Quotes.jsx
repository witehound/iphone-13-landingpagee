import React from "react";
import { Section, TextContainer, Text } from "./QuotesStyles.js";

const Quotes = () => {
  return (
    <Section>
      <TextContainer>
        <Text>
          <span>line-1</span>
        </Text>
        <Text>
          <span>line-2</span>
        </Text>
        <Text>
          <span>line-3</span>
        </Text>
        <Text>
          <span>line-4</span>
        </Text>
        <Text>
          <span>line-5</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotes;
