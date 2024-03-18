import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import{
  Decal, OrbitControls, Preload, useTexture
} from '@react-three/drei';
import CanvasLoader from '../Loader';

type BallProps = {
  icon: string;
}

const Ball: React.FC<BallProps> = ({icon}) => {
  const [decal] = useTexture([icon])
  return (
    <>
      <ambientLight intensity = {0.25}/>
      <directionalLight position={[0,0, 0.05]}/>
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        map={decal}
        />
      </mesh>
    </>
  )
}

const BallCanvas: React.FC<BallProps> = ({icon})=>{
  return(
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball icon = {icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;