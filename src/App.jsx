import { useEffect } from 'react'
import { ContextProvider } from './Context/Context/ContextProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import useSound from 'use-sound'

import boopSfx from '../src/assets/braam-6150.mp3'

function App() {
  const navigate = useNavigate()
  const [play] = useSound(boopSfx, { volume: 0.3 })

  console.log(localStorage.getItem('dfghjk'))
  play()
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.getItem('token') ? navigate('/time') : navigate('/auth')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <ContextProvider>
        <iframe
          src="https://giphy.com/embed/x9hvUcjOAM0jC"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>

        {}
      </ContextProvider>
    </>
  )
}

export default App
