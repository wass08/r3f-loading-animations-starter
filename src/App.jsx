import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 1, 6], fov: 25 }}>
        <fog attach="fog" args={["#16a04b", 12, 30]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
