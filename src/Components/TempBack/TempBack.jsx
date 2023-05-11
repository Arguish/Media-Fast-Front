import React, { useState, useEffect } from 'react'
import { getMediaRandom } from '../../Services/mediaServices'

const TempBack = () => {
  const [image, setimage] = useState(0)
  const [time, settime] = useState(true)
  useEffect(() => {
    getMediaRandom().then((a) => setimage(a.image))

    const timer = setTimeout(() => settime(!time), 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [time])

  return (
    <div
      style={{
        ...styleBck,
        backgroundImage: `url(${image})`,
      }}
    ></div>
  )
}

export default TempBack

const styleBck = {
  position: 'fixed',
  margin: '0px',
  left: '0px',
  top: '0px',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#212121',
  zIndex: '-100',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  filter: 'saturate(0) blur(2px)',
  opacity: `33%`,
  transition: 'all 500ms',
}
