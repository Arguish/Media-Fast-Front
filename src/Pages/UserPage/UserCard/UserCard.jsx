import React from 'react'
import './UserCard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
const UserCard = ({user}) => {
  return (
    <>
      <Card sx={{ 
        width: '50%',
        margin: '0 auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={user.img_url}
            alt="User avatar."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.nickname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, earum quo dolorem quos voluptatibus natus, totam, ut cum numquam tempora obcaecati magnam? Voluptatem numquam quisquam hic minima, laudantium veniam iste?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
export default UserCard
