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
import LoginCard from './RegisterComponents/LoginCard'
import RegisterCard from './RegisterComponents/RegisterCard'

const RegisterModalComponent = ({ name }) => {
  const showCard = () => {
    return name === 'Register' ? <RegisterCard /> : <LoginCard />
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
        <div>{showCard()}</div>
      </Modal>
    </div>
  )
}

export default RegisterModalComponent
