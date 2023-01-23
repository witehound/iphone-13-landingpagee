import React, { Suspense, useRef } from "react";
import {
  Section,
  Phone,
  Colors,
  Color,
  Container,
  Details,
  SubTitle,
  Title,
  ButtonContainer,
  Btn,
  BtnLink,
} from "./PricingStyles";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ModelThree } from "../index";
import { useGLTF } from "@react-three/drei";

const Pricing = () => {
  const { materials } = useGLTF("/scene.gltf");
  const sectionRef = useRef(null);

  let updateColor = (color, rgbaColor) => {
    materials.Body.color.set(color);
    sectionRef.current.style.backgroundColor = `rgba(${rgbaColor}, 0.4)`;
  };
  return (
    <Container>
      <Section ref={sectionRef}>
        <Phone>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <ModelThree />
            </Suspense>
            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Canvas>
          <Colors>
            <Color
              color="#9BB5CE"
              onClick={() => updateColor("#9BB5CE", "155, 181, 206")}
            />
            <Color
              color="#F9E5C9"
              onClick={() => updateColor("#F9E5C9", "249, 229, 201")}
            />
            <Color
              color="#505F4E"
              onClick={() => updateColor("#505F4E", "80, 95, 78")}
            />
            <Color
              color="#574f6f"
              onClick={() => updateColor("#574f6f", "87, 79, 111")}
            />
            <Color
              color="#A50011"
              onClick={() => updateColor("#A50011", "165, 0, 17")}
            />
            <Color
              color="#215E7C"
              onClick={() => updateColor("#215E7C", "33, 94, 124")}
            />
          </Colors>
        </Phone>
      </Section>
      <Details>
        <SubTitle>Iphone</SubTitle>
        <Title>13 Pro Max</Title>
        <SubTitle>Starts at $1099 *</SubTitle>
        <ButtonContainer>
          <Btn>Buy Now</Btn>
          <BtnLink href="#">Learn More</BtnLink>
        </ButtonContainer>
      </Details>
    </Container>
  );
};

export default Pricing;
