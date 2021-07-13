import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import {
  Stars,
  PerspectiveCamera,
  // Sky,
  // OrbitControls,
} from '@react-three/drei';

export default function Background() {
  const [rotationZ, setRotationZ] = useState(0);

  // console.log(rotationZ)

  useEffect(() => {
    const rotate = setInterval(() => {
      // setRotationX(rotationX + 0.001);
      // setRotationY(rotationY + 0.0005);
      setRotationZ(rotationZ + 0.00025);
    }, 30);

    return () => clearInterval(rotate);
  }, [rotationZ]);
  return (
    <div className="canvasContainer">
      <Canvas>
        <PerspectiveCamera position={[0, 0, 0]} rotation={[rotationZ, rotationZ, 0]}>
          {/* <Sky inclination={0.505} /> */}
          <Stars factor={2.5} />
        </PerspectiveCamera>
      </Canvas>
    </div>
  )
}
