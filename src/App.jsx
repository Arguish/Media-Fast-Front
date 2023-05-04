import { ContextProvider } from './Context/Context/ContextProvider'
import GoTo from './Components/GoTo/GoTo'

function App() {
  return (
    <>
      <ContextProvider>
        {/* <BrowserRouter> */}
        {/* <Public> </Public> */}
        {/* </BrowserRouter> */}
        <GoTo path={'/auth'} text={'auth'} />
        <GoTo path={'/time'} text={'time'} />
      </ContextProvider>
    </>
  )
}

export default App
