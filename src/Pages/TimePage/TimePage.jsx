import React from "react";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );



 const TimePage = () => {
  const navigate = useNavigate()

  const chooseMedia = () => {
      navigate('/choosemedia')
  }

  const goMedia = () => {
      navigate('/Media')
  }

   
  return (
    <Card sx={{ minWidth: 275 , height: 275}}>
      <CardContent>
        <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ¿Cuánto tiempo tienes?
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex',flexDirection: 'column', alignItems: 'center'   }} >
        <div>
          <Button variant="contained" size="medium" sx={{display: 'block', margin: 2, color: 'black', width: 200}} onClick= {goMedia} > Menos de 2 horas</Button>
          </div>
          <div>
          <Button variant="contained" size="medium" sx={{display: 'block', margin: 2 , color: 'black', width: 200}} onClick= {chooseMedia} >Más de 2 horas</Button>
          </div>
         
       
        
      </CardActions>
    </Card>
  );
 }











 export default TimePage