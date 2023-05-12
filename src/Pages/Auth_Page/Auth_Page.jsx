import React from 'react'
import RegisterModalComponent from './RegisterPage/RegisterPage'
import './Auth_Page.css'
import useLang from '../../Hooks/useLang'

const AuthPage = () => {
  const lang = useLang()
  return (
    <div>
      <RegisterModalComponent name={['Registrarse', 'Register'][lang]} />
      <RegisterModalComponent name={['Iniciar sesión', 'Login'][lang]} />
    </div>
  )
}

export default AuthPage
