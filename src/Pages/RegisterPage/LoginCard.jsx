import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginCard.css'
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
} from '@mui/material'

import { login } from '../../Services/authService'

function LoginCard() {

 const handleLogin = async () => {
    const body = { email, password}
    const result = await login(body)
     if (result === 200) {
      navigate('/')
    } else {
      console.log(result)
    }
  }


  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Card
        sx={{
          maxWidth: '95vw',
          height: '25vh',
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#000000',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: '#ee9e09',
        }}
      >
        <CardHeader title="Login" />
        <CardContent>
          <TextField
            InputLabelProps={{
              shrink: true,
              className: 'inputLabel',
            }}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{
              marginBottom: '20px',
              bgcolor: '#393939',
              color: 'white',
            }}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
              className: 'inputLabel',
            }}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            color="warning"
            fullWidth={true}
            sx={{
              marginBottom: '20px',
              bgcolor: '#393939',
              color: 'white',
            }}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            sx={{
              color: '#ee9e09',
            }}


             onClick={handleLogin}

          >
            Login
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default LoginCard