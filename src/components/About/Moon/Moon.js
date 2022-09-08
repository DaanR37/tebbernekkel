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
                radius={1}
                depth={1}
                count={0}
                factor={1}
                saturation={0}
                fade={true}
            />
        </>
    )
}
