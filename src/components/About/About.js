import "./about.scss";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Moon from "./Moon/Moon";
import TopsectionAwards from "./TopsectionAwards/TopsectionAwards";

export default function About() {

  const CanvasContainerMoon = styled.div`
    width: 100%;
    height: 100%;

    @media (max-width: 600px) and (orientation: portrait) {
      width: 100%;
      height: 200%;
    }
    // @media (min-width: 600px) and (orientation: portrait) {
    //   width: 100%;
    //   height: 200%;
    // }
  `

  return (
      <CanvasContainerMoon>
        <TopsectionAwards />
        <Canvas>
          <Suspense fallback={null}>
            <Moon />
          </Suspense>
        </Canvas>
      </CanvasContainerMoon>
  );
}
