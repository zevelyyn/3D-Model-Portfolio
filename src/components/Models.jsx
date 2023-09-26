import { React, Suspense, useState, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useSpring, animated, config } from '@react-spring/three'
import styled from 'styled-components'
import model1 from '../assets/1.gltf'
import model2 from '../assets/2.gltf'
// import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing"

const Container = styled.div`
  height: 60vh;
  width: 60vh;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const Column = styled.div`
  height: 60vh;
  width: 20vh;
`

function Func({ id }) {
  // const gltf = useLoader(GLTFLoader, `../src/assets/${id}.gltf`)
  const gltf = useLoader(GLTFLoader, id)
  const [active, setActive] = useState(false)
    
  const { scale } = useSpring({ 
    scale: active ? 1.1 : 1.0,
    config: config.wobbly
  })

  return (
    <animated.scene
      // scale={scale} 
      // onPointerEnter={() => setActive(!active)} 
      // onPointerOut={() => setActive(!active)}
    >
        <primitive object={gltf.scene} />
    </animated.scene>
  ) 
}

function Scene({ num }) {
    return (
      <Canvas 
        shadows 
        camera={{fov: 25, position: [-2, 2, 8]}}
      >
        <Suspense fallback={null}>
          {/* {[1, 2].map((x)=> (<Func id={x}/>))} */}
          {/* <Func id={num}/> */}
          <Func id={model1}/>
          <Func id={model2}/>
          <OrbitControls autoRotate={false} enableZoom={false}/>
          <ambientLight intensity={.5} color={'peachpuff'}/>
          <directionalLight position={[3, 2, 1]} color={'gold'}/>
          <directionalLight position={[-3, -2, -1]} color='honeydew'/>
          <hemisphereLight intensity={1}/>
          {/* <EffectComposer smaa>
            <Bloom />
            <SSAO />
          </EffectComposer> */}
        </Suspense>         
      </Canvas>
    )
}



const Models = () => {
  return(
    <Column>
      <ul>
        <Container><Scene num={'1'}/> </Container>
        <Container><Scene num={'2'}/> </Container>
      </ul>
      
    </Column>
  )
}

export default Models