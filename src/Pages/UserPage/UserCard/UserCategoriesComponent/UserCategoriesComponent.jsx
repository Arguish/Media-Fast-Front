import React, { useState, useEffect } from 'react'
import { NavLink, Navigate, redirect, useNavigate } from 'react-router-dom'
import { getCategory } from '../../../../Services/categoriesServices'
import { updateUserCategories } from '../../../../Services/userServices'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button, Container } from '@mui/material'
import { useTheme } from '@emotion/react'

const UserCategoriesComponent = () => {
  const [categories, setCategories] = useState([])
  const categoriesToSend = []
  const { palette } = useTheme()
  const navigate = useNavigate()
  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    const result = await getCategory()
    setCategories(result)
  }

  const setCategory = (e) => {
    let element = categories.filter(
      (el) => el.id === parseInt(e.target.value)
    )[0]
    categoriesToSend.includes(element) === false
      ? categoriesToSend.push(element)
      : categoriesToSend.splice(categoriesToSend.indexOf(element), 1)
  }

  const handleSubmit = async () => {
    const result = await updateUserCategories(categoriesToSend)
    navigate('/user/me')
  }

  const displayCategories = () => {
    if (categories) {
      return categories.map((category) => {
        return (
          <FormControlLabel
            sx={{
              padding: '5px',
              boxSizing: 'border-box',
              borderRadius: '10px',
              margin: '5px',
              '&:hover': {
                textShadow: '0 0 20px white',
                boxShadow: '0 0 5px white',
              },
              width: {
                xs: '150px',
                md: '200px',
              },
              fontSize: {
                xs: '16px',
              },
              color: palette.primary.main,
              boxShadow: '0 0 5px #ee9e09',
            }}
            key={category.id}
            control={<Checkbox color={'secondary'} onClick={setCategory} />}
            label={category.category_name}
            value={category.id}
          />
        )
      })
    }
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: {
            xs: '22px'
          }
        }}
      >
        {displayCategories()}
      </FormGroup>
      <Button
        sx={{
          height: '50px',
          maxWidth: '400px',
          minWidth: '50px',
          margin: '10px',
          padding: '20px',
          color: '#ee9e09',
          borderRadius: '15px',
          fontWeight: '800',
          fontSize: '22px',
          fontFamily: 'Poppins, sans seriff',
          textShadow: '0.1px 0.1px white',
          border: '0.5px solid',
          '&:hover': {
            boxShadow: '0 0 10px #ee9e09',
          },
        }}
        onClick={handleSubmit}
      >
        UPDATE
      </Button>
    </Container>
  )
}
export default UserCategoriesComponent
