import { useState } from 'react'

const useLang = () => {
  const [lang, setlang] = useState(localStorage.getItem('lang'))
  if (!lang) {
    localStorage.getItem('lang')
      ? localStorage.setItem('lang', '0')
      : localStorage.setItem('lang', String(localStorage.getItem('lang')))
    setlang(0)
  }
  return lang || 0
}

export default useLang
