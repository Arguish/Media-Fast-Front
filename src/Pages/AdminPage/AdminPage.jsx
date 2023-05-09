import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context/Context'

const AdminPage = () => {
  const { lang } = useContext(GlobalContext)
  const navigate = useNavigate()

  const enjoy = () => {
    navigate('/time')
  }

  const work = () => {
    navigate('/admin/options')
  }

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={enjoy}
      >
        {['DISFRUTAR', 'ENJOY'][lang]}
      </Button>

      <Button
        variant="contained"
        size="medium"
        sx={{ display: 'block', margin: 2, color: 'black', width: 200 }}
        onClick={work}
      >
        {['TRABAJAR', 'WORK'][lang]}
      </Button>
    </div>
  )
}

export default AdminPage
