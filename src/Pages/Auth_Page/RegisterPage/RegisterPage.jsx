import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import useLang from '../../../Hooks/useLang'
import LoginCard from './RegisterComponents/LoginCard/LoginCard'
import RegisterCard from './RegisterComponents/RegisterCard/RegisterCard'

const RegisterModalComponent = ({ name }) => {
  const lang = useLang()
  const showCard = () => {
    return name === ['Registrarse', 'Register'][lang || 0] ? (
      <RegisterCard />
    ) : (
      <LoginCard />
    )
  }

  const [isHover, setIsHover] = useState()

  const handleHoverIn = () => {
    setIsHover(true)
  }
  const handleHoverOut = () => {
    setIsHover(false)
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const btnStyle = {
    height: '50px',
    minWidth: '40vw',
    margin: '10px',
    color: '#000000',
    backgroundColor: '#ee9e09',
    borderRadius: '15px',
    fontWeight: '800',
    fontSize: '22px',
    fontFamily: 'Poppins, sans seriff',
    background: '#EE9E09',
    textShadow: '0.5px 0.5px 5px #FFF',
    transform: isHover ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHover ? '0px 0px 15px white' : '0px 1px 0px #000000',
    border: '0.5px solid',
  }

  return (
    <div className="authModalComponent">
      <Button
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
        style={btnStyle}
        onClick={handleOpen}
      >
        {name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{showCard()}</div>
      </Modal>
    </div>
  )
}

export default RegisterModalComponent
