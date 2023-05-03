import React from 'react'
import './UserCard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
} from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import { NavLink } from 'react-router-dom'
const UserCard = ({ user }) => {
  const showUserCategories = () => {
    if (user.categories.length > 0) {
      return user.categories.map((el) => {
        return <Typography key={el.id}>{el.category_name}</Typography>
      })
    }
  }

  const showUserMedia = () => {
    return user.media.length > 0
      ? user.media.map((el) => {
          return (
            <Typography
              sx={{
                color: 'primary.main',
              }}
              key={el.user_media.mediumId}
            >
              {el.title} | {el.type}{' '}
              {el.categories.length > 0
                ? `| ${el.categories[0].category_name}`
                : false}
            </Typography>
          )
        })
      : <Typography>NO MEDIA ADDED YET</Typography>
  }

  const ShowButton = ({path, id}) => {
    return (
      <NavLink to={path} id={id}>
        <ModeEditOutlineOutlinedIcon />
      </NavLink>
    )
  }

  return (
    <>
      <Card
        sx={{
          margin: '5px',
          maxWidth: '95vw',
          bgcolor: '#000000',
          height: '50%',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: 'primary.main',
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'baseline',
              fontSize: '50px',
              fontWeight: 'light',
            }}
          >
            {user.nickname}
            <CardMedia
              component="img"
              image={user.img_url}
              alt="User avatar."
              sx={{
                width: '25%',
              }}
            />
          </Typography>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              color: 'text.primary',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                margin: '2px 0 5px 0',
                color: 'secondary.main',
              }}
            >
              USER CATEGORIES
              <ShowButton path='preferences' id='userCatBtn' />
            </Typography>
            {showUserCategories()}
            <Typography
              variant="h5"
              sx={{
                margin: '2px 0 5px 0',
                color: 'secondary.main',
              }}
            >
              USER MEDIA
            {/* {showButton()} */}
            </Typography>
            {showUserMedia()}
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}
export default UserCard
