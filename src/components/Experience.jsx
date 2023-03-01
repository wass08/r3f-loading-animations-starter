import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Ankou from "./Ankou";
import LampPost from "./LampPost";
import Rock from "./Rock";
import TreeSpruce from "./TreeSpruce";
import YoungKorrigan from "./YoungKorrigan";

const Background = () => {
  const ref = useRef();

  return (
    <group position={[0, 0, 0]} ref={ref}>
      <LampPost scale={[0.5, 0.5, 0.5]} position={[0, 0, -1.5]} />

      <TreeSpruce scale={[0.1, 0.1, 0.1]} position={[0, 0, -3.5]} />

      <TreeSpruce scale={[0.15, 0.15, 0.15]} position={[0, 0, -6]} />

      <Rock scale={[0.1, 0.1, 0.1]} position={[0, 0, 1]} />
    </group>
  );
};

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <Environment preset="sunset" intensity={0.7} blur={0.8} />
      <group position={[0, -1, 0]}>
        <Background />
        <Ankou
          rotation-y={-Math.PI / 2}
          position={[0.9, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
        <YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[-1, -0.02, 0]}
          scale={[1.5, 1.5, 1.5]}
        />
      </group>
    </>
  );
};
