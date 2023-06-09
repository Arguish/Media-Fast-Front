import { Button, Card, CardActions, CardHeader } from '@mui/material'
import React from 'react'
// import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom'

const ShowOptionsComponent = ({ quest, array }) => {
  const navigate = useNavigate()

  //Recive a String and an array of objetcs
  // {option:STRING, url:STRING}

  const handleNAvigate = (url) => {
    navigate(url)
  }

  return (
    <Card className="showQuestionComponent" sx={customCrd}>
      {quest && (
        <CardHeader
          disableTypography={true}
          sx={{
            fontSize: {
              xs: 'calc(16px + 2vw)',
              sm: 'calc(16px + 1.5vw)',
              lg: 'calc(16px + 1.2vw)'
            },
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans seriff',
          }}
          title={quest}
        ></CardHeader>
      )}
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        {array &&
          array.map((a, i) => (
            <Button
              key={i}
              sx={customBtn}
              value={a.option}
              variant="outlined"
              onClick={() => handleNAvigate(a.url)}
            >
              {a.option}
            </Button>
          ))}
      </CardActions>
    </Card>
  )
}

export default ShowOptionsComponent

const customBtn = {
  height: '50px',
  width: '100%',
  minWidth: '50px',
  margin: '10px',
  color: '#000000',
  backgroundColor: '#ee9e09',
  borderRadius: '15px',
  fontWeight:'normal',
  fontSize: {
    xs: 'calc(16px + 1.8vw)',
    sm: 'calc(16px + 1.5vw)',
    lg: 'calc(16px + 1.2vw)'
  },
  fontFamily: 'Poppins, sans seriff',
  textShadow: '0.1px 0.1px white',
  '&:hover': {
    bgcolor: '#ee9e09',
    boxShadow: '0 1px 10px white',
  },
}
const customCrd = {
  height: 'auto',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000000',
  border: '2px solid #000',
  boxShadow: 24,
  color: '#ee9e09',
  fontFamily: 'Poppins, sans seriff',
  borderRadius: '10px',
}
