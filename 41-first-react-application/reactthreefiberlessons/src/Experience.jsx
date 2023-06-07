import { Canvas, useFrame } from '@react-three/fiber'
import {useRef} from 'react'

export default function Experience() 
{
 
  const cubeRef = useRef()
  const groupRef = useRef()


  useFrame((state, delta)=> {
    cubeRef.current.rotation.y += delta
    groupRef.current.rotation.y += delta
  })

    return <>
 
<group ref={groupRef}>
 <mesh rotation-y={Math.PI * 0.25} position-x={ -3 } scale={1.5}>
    <sphereGeometry scale={1.5}/>
    <meshBasicMaterial color="orange" wireframe={false}/>
  </mesh>

  <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={ 2 } scale={1.5}>
    <boxGeometry scale={1.5}/>
    <meshBasicMaterial color="mediumpurple" wireframe={false}/>
  </mesh>

  
</group>
<mesh position-y={ -1} rotation-x={ - Math.PI * 0.5 } scale={10}>
    <planeGeometry scale={1.5}/>
    <meshBasicMaterial color="green" wireframe={false}/>
  </mesh>
    
    </>
}