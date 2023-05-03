import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  IconButton,
  InputAdornment,
} from '@mui/material'
import './LoginCard.css'

import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'

import { login } from '../../Services/authService'

function LoginCard() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleLogin = async () => {
    const body = { email, password }
    const result = await login(body)
    if (result === 200) {
      navigate('/time')
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
          height: 'auto',
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#000000',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: 'primary.main',
        }}
      >
        <CardHeader title="Login" />
        <CardContent>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{
              marginBottom: '20px',
              input: {
                // color: (themeOptions) => themeOptions.palette.primary.main   //that works to change text color.
              },
            }}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
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
