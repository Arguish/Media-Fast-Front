import React from 'react'
import './UserCategoryChip.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@emotion/react'

const UserCategoryChip = ({ stackElements }) => {
  const theme = useTheme().palette

  const stackStyle = {
    display: 'flex',
    maxHeight: '30vh',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }


  return (
    <Stack style={stackStyle} sx={{
    }}>
      {stackElements.map((el) => {
        console.log(el)
        return (
          <Chip
          className='chipStyle'
            sx={{
              width: {
                xs: '100px',
                md: '150px'
              },
              fontSize: {
                xs: '12px',
                md: '16px'
              },
              border: `2px dashed ${theme.secondary.main}`
            }}
            key={el.id}
            label={el.category_name}
            variant="outlined"
          />
        )
      })}
    </Stack>
  )
}
export default UserCategoryChip
