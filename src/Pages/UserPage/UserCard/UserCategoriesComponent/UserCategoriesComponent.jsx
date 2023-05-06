import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCategory } from '../../../../Services/categoriesServices'
import { updateUserCategories } from '../../../../Services/userServices'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'

const UserCategoriesComponent = () => {
  const [categories, setCategories] = useState([])
  const categoriesToSend = []
  const { palette } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories()
  }, [])

  const btnStyle = {
    height: '50px',
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
  }

  const optionStyle = {
    marginLeft: '30px',
    color: palette.primary.contrastText,
  }

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
    console.log(categoriesToSend, 'IN SETCATEGORY')
  }

  const handleSubmit = async () => {
    // categoriesToSend.splice(0, categoriesToSend.length)
    console.log(categoriesToSend, 'categoriestosend')
    const result = await updateUserCategories(categoriesToSend)
    navigate('/user/me')
  }

  const displayCategories = () => {
    if (categories) {
      return categories.map((category) => {
        return (
          <FormControlLabel
            style={optionStyle}
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
    <div>
      <FormGroup>{displayCategories()}</FormGroup>
      <Button style={btnStyle} onClick={handleSubmit}>
        UPDATE
      </Button>
    </div>
  )
}
export default UserCategoriesComponent
