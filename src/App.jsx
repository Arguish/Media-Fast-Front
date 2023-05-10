import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import './app.css'

import chaaaaaanFX from '../src/assets/braam-6150.mp3'

function App() {
  const navigate = useNavigate()
  const [play] = useSound(chaaaaaanFX, { volume: 0.2 })

  play()
  useEffect(() => {
    localStorage.getItem('lang')
      ? localStorage.setItem('lang', '0')
      : localStorage.setItem('lang', String(localStorage.getItem('lang')))
    const timer = setTimeout(() => {
      localStorage.getItem('token') ? navigate('/time') : navigate('/auth')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div
        style={{ maxWidth: '100%', textAlign: 'center', overflow: 'hidden' }}
      >
        <h1 id="MEDIA">MEDIA</h1>
        <iframe
          style={{
            borderRadius: '50%',
            boxShadow: '10px 10px 10px black',
            border: '10px solid #ee9e09',
          }}
          src="https://giphy.com/embed/x9hvUcjOAM0jC"
          width="480"
          height="480"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <h1 id="FAST">FAST</h1>
      </div>
    </>
  )
}

export default App
