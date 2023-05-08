import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const AdminOptions = () => {
  const navigate = useNavigate()

  const goToAllUsers = () => {
    navigate('/allusers')
  }

  const goToAllMedia = () => {
    navigate('/allmedia')
  }

  const goToAllPlat = () => {
    navigate('/allplatforms')
  }

  const goToAllCategories = () => {
    navigate('/allcategories')
  }

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={goToAllUsers}
      >
        {' '}
        USERS
      </Button>

      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={goToAllMedia}
      >
        MEDIA
      </Button>

      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={goToAllPlat}
      >
        {' '}
        PLATFORMS
      </Button>

      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={goToAllCategories}
      >
        CATEGORIES
      </Button>
    </div>
  )
}

export default AdminOptions
