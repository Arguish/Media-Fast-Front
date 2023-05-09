import React, { useState, useEffect } from 'react'
import { getMediaRandom } from '../../Services/mediaServices'

const TempBack = () => {
  const [image, setimage] = useState(0)
  const [time, settime] = useState(true)
  const [opacity, setopacity] = useState(33)
  useEffect(() => {
    getMediaRandom().then((a) => setimage(a.image))
    const changeImg = () => {
      setopacity(0)
      getMediaRandom().then((a) => setimage(a.image))
      setopacity(33)
    }
    const timer = setTimeout(() => settime(!time), 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [time])

  return (
    <div
      style={{
        position: 'fixed',
        margin: '0px',
        left: '0px',
        top: '0px',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#212121',
        zIndex: '-100',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        filter: 'saturate(0) blur(2px)',
        opacity: `${opacity}%`,
        transition: 'all 500ms',
      }}
    >
      TempBack
    </div>
  )
}

export default TempBack
