import { Canvas, useFrame } from '@react-three/fiber'
import {useRef} from 'react'
import CustomComponent from './CustomComponent'


export default function Experience() 
{
 
  const cubeRef = useRef()
  const groupRef = useRef()


  useFrame((state, delta)=> {
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta

    const angle = state.clock.elapsedTime
    state.camera.position.x = Math.sin(angle) * 16
    
    state.camera.lookAt(0, 0, 0)
  })

    return <>

    <directionalLight position={[1, 2, 3]} intensity={1.5} />
  <ambientLight intensity={0.5} />
<group ref={groupRef}>
 <mesh rotation-y={Math.PI * 0.25} position-x={ -3 } scale={1.5}>
    <sphereGeometry scale={1.5}/>
    <meshStandardMaterial color="orange" wireframe={false}/>
  </mesh>

  <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={ 2 } scale={1.5}>
    <boxGeometry scale={1.5}/>
    <meshStandardMaterial color="mediumpurple" wireframe={false}/>
  </mesh>

  
</group>
<mesh position-y={ -1} rotation-x={ - Math.PI * 0.5 } scale={10}>
    <planeGeometry scale={1.5}/>
    <meshStandardMaterial color="green" wireframe={false}/>
  </mesh>
    
  <CustomComponent />

    </>
}