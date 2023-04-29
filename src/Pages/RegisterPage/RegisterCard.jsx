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
import './RegisterCard.css'

import { register, login } from '../../Services/authService'
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const checkEmail = (e) => {
    setEmail(e.target.value)
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    setValidEmail(regex.test(email))
  }
  const checkPassword = (e) => {
    setPassword(e.target.value)
    const regex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$')
    if (password.length > 0) {
      setValidPassword(regex.test(password))
    }
  }

  const handleRegister = async () => {
    const body = {
      email: email,
      password: password,
      nickname: nickname,
      date_of_birth: birthday,
    }
    const result = await register(body)
    if (result.status === 200) {
      const loginInfo = { email: email, password: password }
      const result = await login(loginInfo)
      if (result === 200) {
        navigate('/')
      } else {
        console.log(result)
      }
    }
  }

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('')

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
          color: '#ee9e09',
        }}
      >
        <CardHeader title="Register" />
        <CardContent>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={checkEmail}
            label="Email"
            variant="outlined"
            fullWidth={true}
            color={!validEmail && email.length !== 0 ? 'secondary' : 'primary'}
            helperText={
              !validEmail && email.length !== 0
                ? 'Please enter a valid email. '
                : null
            }
            sx={{
              marginBottom: '20px',
              input: {
                color: (themeOptions) =>
                  !validEmail && email.length !== 0
                    ? themeOptions.palette.secondary.main
                    : themeOptions.palette.primary.main,
              },
            }}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={checkPassword}
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            color={
              !validPassword && password.length !== 0 ? 'secondary' : 'primary'
            }
            helperText={
              !validPassword && password.length !== 0
                ? '8 or more characters, cap, lower and number. '
                : null
            } //text to test, change it later.
            sx={{
              marginBottom: '20px',
              input: {
                color: (themeOptions) =>
                  !validPassword && password.length !== 0
                    ? themeOptions.palette.secondary.main
                    : themeOptions.palette.primary.main,
              },
            }}
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

          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setNickname(e.target.value)}
            label="Nickname"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            label="Birthday"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleRegister} color="primary">
            Register
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default RegisterCard
