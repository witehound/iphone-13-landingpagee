import React, { Suspense } from "react";
import { Container } from "./PhoneModelStyles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "../../assets";

const PhoneModel = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[1, 0, 0]} />
        <Suspense fallback={null}>{/* <Model /> */}</Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
