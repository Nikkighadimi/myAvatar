import { OrbitControls } from "@react-three/drei";
import { Nikki } from "./nikki";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <Nikki />
      </group>
      <ambientLight intensity={1} />
      
      
    </>
  );
};
