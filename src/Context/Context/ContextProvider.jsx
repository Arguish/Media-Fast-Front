import { GlobalContext } from './Context'

export const ContextProvider = ({ children }) => {
  const appName = 'Media-Fast'
  return (
    <>
      <GlobalContext.Provider value={{ appName }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
