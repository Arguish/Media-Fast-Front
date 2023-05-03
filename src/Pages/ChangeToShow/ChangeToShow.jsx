import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


 const ChangeToShow = () => {

    const navigate = useNavigate()

    const seeMedia = () => {
        navigate('/Media')
    }

    const goToByeBye = () => {
        navigate('/bye')
    }
   
  return (
    <Card sx={{ minWidth: 275 , height: 275}}>
      <CardContent>
        <Typography  sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ¿Prefieres una Serie?
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex',flexDirection: 'column'    }} >
        <div>
          <Button variant="contained" size="small" sx={{display: 'block', margin: 2, color: 'black'}} onClick={seeMedia}> Si</Button>
          </div>
          <div>
          <Button variant="contained" size="small" sx={{display: 'block', margin: 2, color: 'black'}} onClick={goToByeBye} >No</Button>
          </div>
         
       
        
      </CardActions>
    </Card>
  );
 }

 export default ChangeToShow