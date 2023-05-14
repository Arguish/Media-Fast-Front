import React from 'react'
import './UserCategoryChip.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@emotion/react'
import { Container } from '@mui/material'

const UserCategoryChip = ({ stackElements }) => {
  const theme = useTheme().palette

  return (
      <Stack
        sx={{
          marginTop: '5px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {stackElements.map((el) => {
          return (
            <Chip
              className="chipStyle"
              sx={{
                height: {
                  xs:'30px'
                },
                width: {
                  xs: '80px',
                  md: '150px',
                },
                fontSize: {
                  xs: '12px',
                  md: '16px',
                },
                border: `0.5px dashed ${theme.secondary.main}`,
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
