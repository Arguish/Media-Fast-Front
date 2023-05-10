import React, { useState, useEffect } from 'react'
import './CategorySuggestionsPage.css'
import { getCategory } from '../../Services/categoriesServices'
import { setUserCategories } from '../../Services/userServices'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button, ThemeProvider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'

const CategorySuggestionsPage = () => {
  const [categories, setCategories] = useState([])
  const [checked, setChecked] = useState(false)
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
  }

  const handleSubmit = async () => {
    const result = await setUserCategories(categoriesToSend)
    navigate('/time')
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '100px',
        }}
      >
        <FormGroup
          style={{ display: 'flex', flexWrap: 'wrap' }}
          className="listComponent"
        >
          {displayCategories()}
        </FormGroup>
      </div>

      <Button style={btnStyle} onClick={handleSubmit}>
        CONTINUE
      </Button>
    </div>
  )
}
export default CategorySuggestionsPage
