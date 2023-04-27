import {
  Box,
  Button,
  Modal,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Divider,
  CardActions,
  Typography,
} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

const RegisterModalComponent = ({ name }) => {
  const showCard = () => {
    return name === 'Register' ? <RegisterCard /> : <LoginCard />
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black',
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {showCard()}
      </Modal>
    </div>
  )
}

export default RegisterModalComponent
