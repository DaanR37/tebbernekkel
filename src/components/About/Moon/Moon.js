import { Stars } from "@react-three/drei";

export default function Moon(props) {
    return (
        <>
            <pointLight
                color="#f6f3ea"
                position={[-3.9, -1, 5]}
                intensity={1.21}
            />
            <Stars
                radius={100}
                depth={40}
                count={1500}
                factor={4}
                saturation={4}
                fade={true}
            />
        </>
    )
}
