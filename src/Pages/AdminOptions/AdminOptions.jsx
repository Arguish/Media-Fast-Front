import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardHeader } from '@mui/material'
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
      <Card
        className="showQuestionComponent"
        sx={{
          height: 'auto',
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
        }}
      >
        <CardHeader
          disableTypography={true}
          sx={{
            fontSize: '35px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans seriff',
          }}
        ></CardHeader>
        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            sx={{
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
            }}
            variant="outlined"
            onClick={goToAllUsers}
          >
            {['USUARIOS', 'USERS'][lang]}
          </Button>

          <Button
            sx={{
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
            }}
            variant="outlined"
            onClick={goToAllMedia}
          >
            MEDIA
          </Button>

          <Button
            sx={{
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
            }}
            variant="outlined"
            onClick={goToAllPlat}
          >
            {['PLATAFORMAS', 'PLATFORMS'][lang]}
          </Button>

          <Button
            sx={{
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
            }}
            variant="outlined"
            onClick={goToAllCategories}
          >
            {['CATEGORIAS', 'CATEGORIES'][lang]}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default AdminOptions
