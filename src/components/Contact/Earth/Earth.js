import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../../assets/textures/8k_earth_clouds_kopie.jpg";


export default function Earth(props) {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader
        (TextureLoader,
            [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
        );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 6;
        cloudsRef.current.rotation.y = elapsedTime / 6;
    });

    return (
            <>
                <pointLight
                    color="#f6f3ea"
                    position={[2, 0.4, 5]}
                    intensity={1.9}
                />
                <Stars
                    radius={300}
                    depth={60}
                    count={5000}
                    factor={1}
                    saturation={0}
                    fade={true}
                />
                <mesh ref={cloudsRef} position={[-1.1, -0.1, 2.5]} rotation={[-50, 10, 75]}>
                    <sphereGeometry args={[1.109, 32, 32]} />
                    <meshPhongMaterial
                        map={cloudsMap}
                        opacity={0.4}
                        depthWrite={true}
                        transparent={true}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <mesh ref={earthRef} position={[-1.1, -0.1, 2.5]} rotation={[-50, 10, 75]}>
                    <sphereGeometry args={[1.104, 32, 32]} />
                    <meshPhongMaterial specularMap={specularMap} />
                    <meshStandardMaterial
                        map={colorMap}
                        normalMap={normalMap}
                        metalness={0.4}
                        roughness={0.7}
                    />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                        zoomSpeed={0.6}
                        panSpeed={0.5}
                        rotateSpeed={0.4}
                    />
                </mesh>
            </>
    )
}
