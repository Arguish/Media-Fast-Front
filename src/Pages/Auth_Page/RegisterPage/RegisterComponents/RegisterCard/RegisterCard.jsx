import { useEffect, useState } from 'react'
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
import AlertComponent from './AlertComponent/AlertComponent'
import { register, login } from '../../../../../Services/authService'
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [show, setShow] = useState('none')
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const ableToSend = () => {
    return validEmail && validPassword && nickname.length > 1 && birthday !== ''
      ? false
      : true
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const checkEmail = (e) => {
    setEmail(e.target.value)
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    setValidEmail(regex.test(e.target.value))
  }
  const checkPassword = (e) => {
    setPassword(e.target.value)
    const regex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$')
    if (password.length > 0) {
      setValidPassword(regex.test(e.target.value))
    }
  }

  const handleRegister = async () => {
    const body = {
      email: email,
      password: password,
      nickname: nickname,
      date_of_birth: birthday,
    }
    if (validEmail && validPassword && nickname.length > 1 && birthday !== '') {
      const result = await register(body)
      if (result.status === 200 || result === 200) {
        return navigate('/preferences')
      } else if (result.status === 501) {
        setShow('block')
      } else {
        console.log(result)
      }
    }
  }
  const setMaxDate = () => {
    const today = new Date()
    let month = today.getMonth() + 1
    const year = today.getFullYear()
    let day = today.getDay()
    day < 10 ? (day = '0' + day) : day
    month < 10 ? (month = '0' + month) : month
    return `${year}-${month}-${day}`
  }

  const setMinDate = () => {
    const today = setMaxDate()
    return today.slice(0, 4) - 80 + today.slice(4)
  }

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('1997-04-27')
  const [isHover, setIsHover] = useState()

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
    textShadow: '1px 1px white',
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
    border: '0.5px solid',
  }

  return (
    <div className="authComponentCardWrapper">
      <AlertComponent status={show} setter={setShow} />
      <Card className="authComponentCard" style={cardStyle}>
        <CardHeader
          disableTypography={true}
          style={headerStyle}
          title="REGISTER"
        />
        <CardContent>
          <TextField
            style={inputStyle}
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            onChange={checkEmail}
            label="EMAIL"
            variant="outlined"
            fullWidth={true}
            color={!validEmail && email.length !== 0 ? 'secondary' : 'primary'}
            helperText={
              !validEmail && email.length !== 0
                ? 'Please enter a valid email. '
                : null
            }
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
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            onChange={checkPassword}
            label="PASSWORD"
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
              input: {
                color: (themeOptions) =>
                  !validPassword && password.length !== 0
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
                    {showPassword ? (
                      <Visibility color="primary" />
                    ) : (
                      <VisibilityOff color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>

          <TextField
            style={inputStyle}
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            onChange={(e) => setNickname(e.target.value)}
            label="NICKNAME"
            variant="outlined"
            fullWidth={true}
            sx={{
              input: {
                color: (themeOptions) =>
                  nickname.length > 0
                    ? themeOptions.palette.primary.main
                    : themeOptions.palette.secondary.main,
              },
            }}
          />

          <TextField
            InputLabelProps={{
              shrink: true,
              style: inputStyle,
            }}
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            label="BIRTHDAY"
            inputProps={{ min: setMinDate(), max: setMaxDate() }}
            variant="outlined"
            fullWidth={true}
            defaultValue={'1997-04-27'}
            sx={{
              input: {
                color: (themeOptions) =>
                  birthday !== ''
                    ? themeOptions.palette.primary.main
                    : themeOptions.palette.secondary.main,
              },
            }}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handleRegister}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            style={btnStyle}
            disabled={ableToSend()}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default RegisterCard
