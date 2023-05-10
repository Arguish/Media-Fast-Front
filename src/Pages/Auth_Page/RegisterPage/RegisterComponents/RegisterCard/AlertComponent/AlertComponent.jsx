import React from 'react'
import './AlertComponent.css'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
const AlertComponent = ({ status, setter }) => {
  return (
    <Stack
      sx={{
        display: status,
        position: 'absolute',
        top: '20%',
        width: '100%',
        zIndex: '1000',
      }}
      spacing={2}
    >
      <Alert
        sx={{
          color: 'primary.main',
          bgcolor: '#4c0202',
          alignItems: 'center',
          height: '100px',
          fontSize: '20px',
        }}
        severity="error"
        onClose={() => {
          setter('none')
        }}
      >
        DATA ALREADY USED
      </Alert>
    </Stack>
  )
}
export default AlertComponent
