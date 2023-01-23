import React, { useRef, useLayoutEffect, Suspense } from "react";
import { Section, Left, Right, Center } from "./ColorsStyles";
import { colorsComponentTl } from "../../utils";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ModelTwo } from "../index";

const Colors = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);

  const { materials } = useGLTF("/scene.gltf");

  useLayoutEffect(() => {
    colorsComponentTl(
      sectionRef.current,
      leftRef.current,
      rightRef.current,
      centerRef.current,
      materials
    );
  }, []);
  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={centerRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight position={[1, 0, 0]} />
          <Suspense fallback={null}>
            <ModelTwo />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </Right>
    </Section>
  );
};

export default Colors;
