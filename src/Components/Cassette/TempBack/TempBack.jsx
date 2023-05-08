import React, { useState, useEffect } from 'react'

const TempBack = () => {
  const [image, setimage] = useState(0)
  const [opacity, setopacity] = useState(33)
  useEffect(() => {
    const changeImg = () => {
      setopacity(0)
      setimage(image + 1)
      setopacity(33)
    }
    const timer = setTimeout(changeImg, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [image])

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
        backgroundImage: `url(https://picsum.photos/2000?grayscale&blur=3&random=${image})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        opacity: `${opacity}%`,
        transition: 'all 500ms',
      }}
    >
      TempBack
    </div>
  )
}

export default TempBack
