import React from "react";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

 const TimePage = () => {
   
  return (
    <Card sx={{ minWidth: 275 , height: 275}}>
      <CardContent>
        <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ¿Cuánto tiempo tienes?
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex',flexDirection: 'column'    }} >
        <div>
          <Button size="small" sx={{display: 'block', margin: 2}} > Menos de 2 horas</Button>
          </div>
          <div>
          <Button size="small" sx={{display: 'block', margin: 2}} >Más de 2 horas</Button>
          </div>
         
       
        
      </CardActions>
    </Card>
  );
 }











 export default TimePage