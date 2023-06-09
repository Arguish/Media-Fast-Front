import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardHeader } from '@mui/material'
import useLang from '../../Hooks/useLang'

const AdminOptions = () => {
  const lang = useLang()
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
    <>
      <Card className="showQuestionComponent" sx={cardStl}>
        <CardHeader disableTypography={true} sx={headerStl}></CardHeader>
        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button sx={btnStyle} variant="outlined" onClick={goToAllUsers}>
            {['USUARIOS', 'USERS'][lang || 0]}
          </Button>

          <Button sx={btnStyle} variant="outlined" onClick={goToAllMedia}>
            MEDIA
          </Button>

          <Button sx={btnStyle} variant="outlined" onClick={goToAllPlat}>
            {['PLATAFORMAS', 'PLATFORMS'][lang || 0]}
          </Button>

          <Button sx={btnStyle} variant="outlined" onClick={goToAllCategories}>
            {['CATEGORIAS', 'CATEGORIES'][lang || 0]}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default AdminOptions

const btnStyle = {
  height: '50px',
  width: '100%',
  minWidth: '50px',
  margin: '10px',
  color: '#000000',
  backgroundColor: '#ee9e09',
  borderRadius: '15px',
  fontWeight: '800',
  fontSize: '22px',
  fontFamily: 'Poppins, sans seriff',
  textShadow: '0.1px 0.1px white',
  '&:hover': {
    bgcolor: '#ee9e09',
    boxShadow: '0 1px 10px white',
  },
}

const cardStl = {
  height: 'auto',
  width: {
    xs: '80vw',
    md: '50vw'
  },
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000000',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '25px',
  color: '#ee9e09',
  fontFamily: 'Poppins, sans seriff',
}

const headerStl = {
  fontSize: '35px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans seriff',
}
