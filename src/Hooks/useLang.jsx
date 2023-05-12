import { useState } from 'react'

const useLang = () => {
  const [lang, setlang] = useState(localStorage.getItem('lang'))
  if (!lang) {
    setlang(0)
  }
  return lang
}

export default useLang
