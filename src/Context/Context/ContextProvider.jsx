import { GlobalContext } from './Context'

export const ContextProvider = ({ children }) => {
  const appName = 'Media-Fast'
  localStorage.setItem('lang', '1')

  return (
    <>
      <GlobalContext.Provider value={{ appName }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
