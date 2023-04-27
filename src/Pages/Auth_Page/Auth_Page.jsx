import React from 'react'
import RegisterModalComponent from '../RegisterPage/RegisterPage'

const showModal = () => {
  return <RegisterModalComponent />
}
const AuthPage = () => {
  return (
    <div>
      <RegisterModalComponent name="Register" />
      <RegisterModalComponent name="Login" />
    </div>
  )
}

export default AuthPage
