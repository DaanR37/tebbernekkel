import "./contact.scss";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Earth/Earth";
import Topsection from "./Topsection/Topsection";

export default function Contact() {

  const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
  `

  return (
    <CanvasContainer>
      <Topsection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
