import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { GlobalContext } from '../../Context/Context/Context'

const AdminOptions = () => {
  const { lang } = useContext(GlobalContext)
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
        {['USUARIOS', 'USERS'][lang]}
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
        {['PLATAFORMAS', 'PLATFORMS'][lang]}
      </Button>

      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={goToAllCategories}
      >
        {['CATEGORIAS', 'CATEGORIES'][lang]}
      </Button>
    </div>
  )
}

export default AdminOptions
