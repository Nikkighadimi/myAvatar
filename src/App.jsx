import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    //position [ x, y, z] , fov =feild of view
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    
  );
}

export default App;
