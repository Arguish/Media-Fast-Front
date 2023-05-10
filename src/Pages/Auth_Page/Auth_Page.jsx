import React from 'react'
import RegisterModalComponent from './RegisterPage/RegisterPage'
import './Auth_Page.css'

const AuthPage = () => {
  return (
    <div>
      <RegisterModalComponent name="Register" />
      <RegisterModalComponent name="Login" />
    </div>
  )
}

export default AuthPage
