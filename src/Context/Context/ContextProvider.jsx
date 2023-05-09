import { useEffect, useState } from 'react'
import { GlobalContext } from './Context'

export const ContextProvider = ({ children }) => {
  const appName = 'Media-Fast'
  const [lang, setlang] = useState(localStorage.getItem('lang'))
  useEffect(() => {
    setlang(localStorage.getItem('lang'))
  })

  return (
    <>
      <GlobalContext.Provider value={{ appName, lang }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
