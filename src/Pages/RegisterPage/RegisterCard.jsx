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
  InputAdornment
} from '@mui/material'



import { register, login } from '../../Services/authService'
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';


const RegisterCard = () => {

   const [showPassword, setShowPassword] =useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          height: '50vh',
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: 'black',
        }}
      >
        <CardHeader title="Register" />
        <CardContent>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
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
          )
            }}
            >
          </TextField>

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
