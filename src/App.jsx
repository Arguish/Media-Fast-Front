import './App.css'
// import { BrowserRouter } from 'react-router-dom'
// import Public from './Routes/Public/Public'
import ContextProvider from './Context/Context/ContextProvider'
import GoTo from './Components/GoTo/GoTo'
function App() {
  return (
    <>
      <ContextProvider>
        {/* <BrowserRouter> */}
        {/* <Public> </Public> */}
        {/* </BrowserRouter> */}
        <GoTo path={'/auth'} text={'auth'} />
      </ContextProvider>
    </>
  )
}

export default App
