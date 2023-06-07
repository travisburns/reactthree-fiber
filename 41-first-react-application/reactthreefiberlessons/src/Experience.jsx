import { Canvas } from '@react-three/fiber'


export default function Experience() 
{
    return <>
    <Canvas>
  <mesh rotation-y={Math.PI * 0.25} position-x={ 2 } scale={1.5}>
    <boxGeometry scale={1.5}/>
    <meshBasicMaterial color="mediumpurple" wireframe={false}/>
  </mesh>
  <mesh rotation-y={Math.PI * 0.25} position-x={ -3 } scale={1.5}>
    <sphereGeometry scale={1.5}/>
    <meshBasicMaterial color="orange" wireframe/>
  </mesh>
  <mesh position-y={ -1} rotation-x={ - Math.PI * 0.5 } scale={10}>
    <planeGeometry scale={1.5}/>
    <meshBasicMaterial color="green" wireframe={false}/>
  </mesh>
</Canvas>
    
    </>
}