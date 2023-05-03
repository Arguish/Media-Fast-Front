import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


 const ChooseMedia = () => {

    const navigate = useNavigate()

    const seeMedia = () => {
        navigate('/Media')
    }
   
  return (
    <Card sx={{ minWidth: 275 , height: 275}}>
      <CardContent>
        <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ¿Peli o Serie?
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex',flexDirection: 'column'    }} >
        <div>
          <Button size="small" sx={{display: 'block', margin: 2}} onClick={seeMedia}> Peli</Button>
          </div>
          <div>
          <Button size="small" sx={{display: 'block', margin: 2}} onClick={seeMedia} >Serie</Button>
          </div>
         
       
        
      </CardActions>
    </Card>
  );
 }

 export default ChooseMedia