import { ContextProvider } from './Context/Context/ContextProvider'
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <ContextProvider>
        <iframe
          src="https://giphy.com/embed/x9hvUcjOAM0jC"
          width="480"
          height="480"
          className="giphy-embed"
          allowFullScreen
        ></iframe>

        {localStorage.getItem('token') ? (
          <Navigate to="/time"></Navigate>
        ) : (
          <Navigate to="/auth"></Navigate>
        )}
      </ContextProvider>
    </>
  )
}

export default App
