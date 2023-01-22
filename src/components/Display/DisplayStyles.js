import styled from "styled-components";

export const Container = styled.section`
  height: 200vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--offWhite);
`;
export const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
