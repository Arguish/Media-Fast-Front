import { Button, Modal } from '@mui/material'
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



  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <div className="authModalComponent">
      <Button
        sx={{
          height: '50px',
          minWidth: '40vw',
          margin: '10px',
          color: '#000000',
          backgroundColor: '#ee9e09',
          borderRadius: '15px',
          fontSize: '22px',
          fontFamily: 'Poppins, sans seriff',
          bgcolor: '#ee9e09',
          textShadow: '0.5px 0.5px 5px #FFF',
          transform: 'scale(1.05)',
          boxShadow: '0px 0px 5px #000000',
          border: '0.5px solid',
          '&:hover': {
          boxShadow: '0px 2px 20px #ee9e09',
          bgcolor: '#ee9e09',
          transform: 'scale(1.1)'
          
          }
        }}
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
