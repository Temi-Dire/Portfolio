/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

import PropTypes from "prop-types";


const Ball = (props) => {

  const [ decal ] = useTexture([props.imageUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial color={'#fff8eb'} polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0,0,1]} rotation={[ 2 * Math.PI, 0, 6.25]} flatShading map={decal}/>
      </mesh>
    </Float>
  )
}

Ball.propTypes = PropTypes.any.isRequired

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='demand'
    // dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false}/>
      <Ball imageUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.any.isRequired
}

export default BallCanvas