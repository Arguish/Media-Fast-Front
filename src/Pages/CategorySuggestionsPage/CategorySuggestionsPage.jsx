import React, { useState, useEffect} from 'react'
import './CategorySuggestionsPage.css'
import { getCategory } from '../../Services/categoriesServices';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';



const CategorySuggestionsPage = () => {

  const [categories, setCategories] = useState()

   const handleCategories = () => {

   }

  useEffect(()=> {
    getAllCategories()
}, [])


  const getAllCategories = async () => {
    const result = await getCategory()
    console.log(result)
    console.log('AWUIIIII')
    setCategories(result)
  }

  const displayCategories= () => {
    if(categories){
    return categories.map(category =>{
        return (
          <div>
          <FormGroup>
          <FormControlLabel control={<Checkbox  />} key={category.id} label={category.category_name}  />
         </FormGroup>
         </div>
        )
    })
}
}

  return (
   <div>
    {displayCategories()}
    <Button onClick={handleCategories}>Next</Button>
   </div>
  )
}
export default CategorySuggestionsPage
