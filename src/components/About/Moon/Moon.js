import React from 'react'
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import MoonColorMap from "../../../assets/textures/moon_color_map.jpg";
import MoonNormalMap from "../../../assets/textures/moon_normal_map.jpg";

export default function Moon(props) {

    const [colorMap, normalMap] = useLoader
        (TextureLoader,
            [MoonColorMap, MoonNormalMap]
        );

    const moonRef = useRef();

    return (
        <>
            <pointLight
                color="#f6f3ea"
                position={[-3.9, -1, 5]}
                // position={[15, 0, 5]}
                intensity={1.3}
            />
            <Stars
                radius={300}
                depth={60}
                count={12500}
                factor={9.5}
                saturation={0}
                fade={true}
            />
            <mesh ref={moonRef} position={[1.1, -0.1, 2.5]} rotation={[-50, -15, 75]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={normalMap}
                    // opacity={0.4}
                    // depthWrite={true}
                    // transparent={true}
                    side={THREE.DoubleSide}
                />
                <meshStandardMaterial
                    map={colorMap}
                    colorMap={colorMap}
                    metalness={0.9}
                    roughness={0.9}
                    // opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                />
                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />
            </mesh>
        </>
    )
}
