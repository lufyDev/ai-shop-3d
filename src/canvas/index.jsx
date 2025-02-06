import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import BackDrop from './BackDrop'
import CameraRig from './CameraRig'
import Shirt from './Shirt'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      {/* <Center>
        <CameraRig>
          <BackDrop /> */}
          <Center>
            <Shirt />
          </Center>
        {/* </CameraRig>
      </Center> */}
    </Canvas>
  )
}

export default CanvasModel