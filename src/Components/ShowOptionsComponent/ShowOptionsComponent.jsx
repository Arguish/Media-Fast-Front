import { Button, Card, CardActions, CardHeader } from '@mui/material'
import React from 'react'
// import Box from '@mui/material/Box';

import { useLocation, useNavigate } from 'react-router-dom'

const ShowOptionsComponent = ({ question, optionOne, optionTwo }) => {
  const navigate = useNavigate()
  // const location = useLocation()
  // const chooseMedia = () => {
  //   navigate('/choosemedia')
  // }

  const goMedia = (e) => {
    if (e.target.value === 'MENOS DE DOS HORAS' || e.target.value === 'SERIE') {
      navigate('/user/me/categories/media/show')
    } else if (e.target.value === 'PELI') {
      navigate('/user/me/categories/media/movie')
    } else {
      navigate('/choosemedia')
    }
  }

  return (
    <Card
      className="showQuestionComponent"
      sx={{
        height: 'auto',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#000000',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '15px',
        color: '#ee9e09',
        fontFamily: 'Poppins, sans seriff',
      }}
    >
      <CardHeader
        disableTypography={true}
        sx={{
          fontSize: '35px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Poppins, sans seriff',
        }}
        title={question}
      ></CardHeader>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          sx={{
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
            textShadow: '0.1px 0.1px white',
            '&:hover': {
              color: '#000000',
              backgroundColor: '#ee9e09',
              transform: 'scale(1.025)',
              boxShadow: '0 1px 10px #ee9e09',
            },
          }}
          value={optionOne}
          variant="outlined"
          onClick={goMedia}
        >
          {optionOne}
        </Button>
        <Button
          sx={{
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
            textShadow: '0.1px 0.1px white',
            '&:hover': {
              color: '#000000',
              backgroundColor: '#ee9e09',
              transform: 'scale(1.025)',
              boxShadow: '0 1px 10px #ee9e09',
            },
          }}
          value={optionTwo}
          variant="outlined"
          onClick={goMedia}
        >
          {optionTwo}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ShowOptionsComponent
