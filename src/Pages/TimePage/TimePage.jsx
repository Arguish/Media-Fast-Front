import { Button, Card, CardActions, CardHeader } from '@mui/material';
import React from "react";
// import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom'




const TimePage = () => {
  const navigate = useNavigate()

  const chooseMedia = () => {
      navigate('/choosemedia')
  }

  const goMedia = () => {
      navigate('/Media')
  }


  const handleHoverIn = () => {
    setIsHover(true)
  }
  const handleHoverOut = () => {
    setIsHover(false)
  }

  const cardStyle = {
    maxWidth: '100%',
    height: 'auto',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000000',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '25px',
    color: '#ee9e09',
    fontFamily: 'Poppins, sans seriff',
  }

  const headerStyle = {
    fontSize: '35px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans seriff',
  }

  const inputStyle = {
    marginBottom: '20px',
    fontSize: '20px',
    fontFamily: 'Poppins, sans seriff',
    fontWeight: '400',
  }

  const btnStyle = {
    height: '50px',
    width: '100%',
    minWidth: '50px',
    margin: '10px',
    color: '#000000',
    backgroundColor: '#ee9e09',
    borderRadius: '15px',
    fontWeight: '800',
    fontSize: '22px',
    fontFamily: 'Poppins, sans seriff',
    // transform: isHover ? 'scale(1.05)' : 'scale(1)',
    // boxShadow: isHover ? '0px 1px 15px #ee9e09' : '0px 1px 0px #000000',
    textShadow: '0.1px 0.1px white',
  }

  return (
    <Card style={cardStyle}>
      <CardHeader
        disableTypography={true}
        style={headerStyle}
        title="¿CUÁNTO TIEMPO TIENES?"
      ></CardHeader>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          style={btnStyle}
          variant="outlined"
          onClick={goMedia}
        >
          Menos de 2 horas
        </Button>
        <Button
          style={btnStyle}
          variant="outlined"
          onClick={chooseMedia}
        >
          Más de 2 horas
        </Button>

      </CardActions>
    </Card>
  )
}

export default TimePage
