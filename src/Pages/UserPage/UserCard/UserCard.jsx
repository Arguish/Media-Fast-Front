import React from 'react'
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
import UserCategoryChip from './UserCategoryChip/UserCategoryChip'
import { useTheme } from '@emotion/react'

const UserCard = ({ user }) => {
  const theme = useTheme().palette

  const showUserCategories = () => {
    if (user.categories.length > 0) {
      return <UserCategoryChip stackElements={user.categories} />
    }
  }

  const showUserMedia = () => {
    return user.media.length > 0 ? (
      user.media.map((el) => {
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
    ) : (
      <Typography>NO MEDIA ADDED YET</Typography>
    )
  }

  const ShowButton = ({ path, id }) => {
    return (
      <NavLink to={path} id={id}>
        <ModeEditOutlineOutlinedIcon color="primary" />
      </NavLink>
    )
  }


  return (
    <Card
      className="userCardWrapper"
      sx={{
        height: 'auto',
        position: 'static',
        border: '2px solid #000',
        boxShadow: 24,
        color: '#ee9e09',
        fontFamily: 'Poppins, sans seriff',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '50px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans seriff',
            }}
            variant="h4"
            component="div"
          >
            {user.nickname}
          </Typography>
          <CardMedia
            className="userAvatarClass"
            component="img"
            image={user.img_url}
            alt="User avatar."
            sx={{
              border: '1px solid #ee9e09',
              height: '100px',
              width: '100px',
            }}
          />
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            color: 'text.primary',
          }}
        >
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                margin: '5px 0',
                textAlign: 'center',
                fontWeight: '600',
                textShadow: `0 1px 30px ${theme.secondary.main}`,
                color: theme.secondary.main,
                fontFamily: 'Poppins, sans seriff',
              }}
            >
              CATEGORIES
            </Typography>
            <ShowButton path="preferences" id="userCatBtn" />
          </Box>
          <div >{showUserCategories()}</div>
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                margin: '5px 0',
                textAlign: 'center',
                fontWeight: '600',
                textShadow: `0 1px 30px ${theme.secondary.main}`,
                color: theme.secondary.main,
                fontFamily: 'Poppins, sans seriff',
              }}
            >
              USER MEDIA
            </Typography>
            {/* <ShowButton path="#" id="userMediaBtn" /> */}
          </Box>
          {showUserMedia()}
        </CardContent>
      </CardContent>
    </Card>
  )
}
export default UserCard