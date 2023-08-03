import { React, Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useSpring, animated, config } from '@react-spring/three'
// import { EffectComposer, SSAO, Bloom } from "react-postprocessing"

function Scene() {
    const gltf = useLoader(GLTFLoader, '../assets/birdie_3js.gltf')
    const [active, setActive] = useState(false)
  
    const { scale } = useSpring({ 
      scale: active ? 1.1 : 1.0,
      config: config.wobbly
    })
  
    return (
      <animated.scene 
        scale={scale} 
        onPointerEnter={() => setActive(!active)} 
        onPointerOut={() => setActive(!active)}
      >
        <primitive object={gltf.scene} />
      </animated.scene>
    )
}

const Models = () => {
    return(
      <div className='App'>
        <Canvas 
          shadows 
          camera={{fov: 25, position: [-2, 2, 8]}}
        >
          <Suspense fallback={null}>
            <Scene/>
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
      </div>
    )
}

export default Models