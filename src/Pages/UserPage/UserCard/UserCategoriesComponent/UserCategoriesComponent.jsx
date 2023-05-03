import React, { useState, useEffect } from 'react'
import { getCategory } from '../../../../Services/categoriesServices'
import {
  getUserCategories,
  updateUserCategories,
} from '../../../../Services/userServices'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'
import './UserCategoriesComponent.css'

const UserCategoriesComponent = () => {
  const [categories, setCategories] = useState([])
  const [checked, setChecked] = useState(false)
  const categoriesToSend = []

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
    categoriesToSend = []
  }

  const displayCategories = () => {
    if (categories) {
      return categories.map((category) => {
        return (
          <div key={category.id}>
            <FormControlLabel
              control={<Checkbox onClick={setCategory} />}
              label={category.category_name}
              value={category.id}
            />
          </div>
        )
      })
    }
  }

  return (
    <div>
      <FormGroup>{displayCategories()}</FormGroup>

      <Button onClick={handleSubmit}>Next</Button>
    </div>
  )
}
export default UserCategoriesComponent