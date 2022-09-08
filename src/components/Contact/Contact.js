import "./contact.scss";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Earth/Earth";
import Earthmobile from "./EarthMobile/Earthmobile";
import Topsection from "./Topsection/Topsection";

import Media from 'react-media';

export default function Contact() {

  const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 600px) and (orientation: portrait) {
      width: 100%;
      height: 150%;
    }
    @media only screen and (min-width: 600px) and (max-width: 926px) and (orientation: landscape) {
      width: 100%;
      height: 125%;
    }
  `

  return (
    <CanvasContainer>
      <Topsection />
      <Canvas>
        <Suspense fallback={null}>
          <Media queries={{ small: { maxWidth: 600 } }}>
            {matches =>
              matches.small ? (
                <Earthmobile />
              ) : (
                <Earth />
              )
            }
          </Media>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
