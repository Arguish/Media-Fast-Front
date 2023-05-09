import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../Services/authService'

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
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'

function LoginCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const [isHover, setIsHover] = useState()

  const [validEmail, setValidEmail] = useState(false)

  const checkEmail = (e) => {
    setEmail(e.target.value)
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    setValidEmail(regex.test(e.target.value))
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleLogin = async () => {
    const body = { email, password }
    const result = await login(body)
    if (result === 200 && localStorage.getItem('role') === 'admin') {
      navigate('/admin')
    } else if (result === 200 && localStorage.getItem('role') === 'user') {
      navigate('/time')
    } else {
      console.log(result)
    }
  }

  const handleHoverIn = () => {
    setIsHover(true)
  }
  const handleHoverOut = () => {
    setIsHover(false)
  }

  const cardStyle = {
    height: 'auto',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#000000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#ee9e09',
    fontFamily: 'Poppins, sans seriff',
  }

  const headerStyle = {
    fontSize: '50px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans seriff',
    textShadow: '1px 1px white' 
  }

  const inputStyle = {
    marginBottom: '20px',
    fontSize: '20px',
    fontFamily: 'Poppins, sans seriff',
    fontWeight: '400',
  }
    const btnStyle = {
    height: '50px',
    minWidth: '50px',
    margin: '10px',
    color: '#ee9e09',
    borderRadius: '15px',
    fontWeight: '800',
    fontSize: '22px',
    fontFamily: 'Poppins, sans seriff',
    transform: isHover ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHover ? '0px 1px 15px #ee9e09' : '0px 1px 0px #000000',
    textShadow: '0.1px 0.1px white',
    border: '0.5px solid'

  }

  return (
    <div className='authComponentCardWrapper'>
      <Card className='authComponentCard' style={cardStyle}>
        <CardHeader
          title="LOGIN"
          disableTypography={true}
          style={headerStyle}
        />
        <CardContent>
          <TextField
            style={inputStyle}
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            color={!validEmail && email.length !== 0 ? 'secondary' : 'primary'}
            onChange={checkEmail}
            label="EMAIL"
            variant="outlined"
            fullWidth={true}
            sx={{
              input: {
                color: (themeOptions) =>
                  !validEmail && email.length !== 0
                    ? themeOptions.palette.secondary.main
                    : themeOptions.palette.primary.main,
              },
            }}
          />
          <TextField
            style={inputStyle}
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            onChange={(e) => setPassword(e.target.value)}
            label="PASSWORD"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth={true}
            color={password.length <= 1 ? 'secondary' : 'primary'}
            sx={{
              input: {
                color: (themeOptions) =>
                  password.length <= 1
                    ? themeOptions.palette.secondary.main
                    : themeOptions.palette.primary.main,
              },
            }}
            InputProps={{
              style: inputStyle,
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
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleLogin}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            style={btnStyle}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default LoginCard
