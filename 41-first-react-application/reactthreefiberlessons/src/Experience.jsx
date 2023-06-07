import { Canvas } from '@react-three/fiber'


export default function Experience() 
{
    return <>
    <Canvas>
  <mesh>
    <sphereGeometry />
    <meshBasicMaterial />
  </mesh>
</Canvas>
    
    </>
}