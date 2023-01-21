import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
100%{
    transform : translateY(0)
}
`;

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--white);
`;

export const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(3rem);
    /* animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards; */
    font-family: var(--fontL);
    -webkit-font-family: var(--fontL);
    background-image: linear-gradient(45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
