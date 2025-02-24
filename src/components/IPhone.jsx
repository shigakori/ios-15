import * as THREE from 'three';
import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const Model = (props) => {
    const { nodes, materials } = useGLTF('./models/scene.glb');
    const texture = props.item?.img ? useTexture(props.item.img) : null;

    useEffect(() => {
        Object.entries(materials).forEach(([name, material]) => {
            if (!["zFdeDaGNRwzccye", "ujsvqBWRMnqdwPx", "hUlRcbieVuIiOXG", "jlzuBkUzuJqgiAK", "xNrofRCqOXXHVZt"].includes(name)) {
                material.color.set(props.item.color[0]);
            }
            material.needsUpdate = true;
        });
    }, [materials, props.item]);

    return (
        <group {...props}>
            {Object.entries(nodes).map(([key, node]) => (
                <mesh
                    key={key}
                    castShadow
                    receiveShadow
                    geometry={node.geometry}
                    material={materials[node.material?.name] || undefined}
                    scale={0.01}
                />
            ))}
            {texture && (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.xXDHkMplTIDAXLN.geometry}
                    scale={0.01}
                >
                    <meshStandardMaterial roughness={1} map={texture} />
                </mesh>
            )}
        </group>
    );
};

export default Model;

useGLTF.preload("./models/scene.glb");
