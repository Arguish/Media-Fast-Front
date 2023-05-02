import React, { useState, useEffect} from 'react'
import './CategorySuggestionsPage.css'
import { getCategory } from '../../Services/categoriesServices';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const CategorySuggestionsPage = () => {

  const [categories, setCategories] = useState()

  useEffect(()=> {
    getAllCategories()
}, [])


  const getAllCategories = async () => {
    const result = await getCategory()
    console.log(result)
    console.log('AWUIIIII')
    // setCategories(result)
  }

  const displayCategories= () => {
    return categories.map(category =>{
        return (
          <div>
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} key={category.id} label={category.category_name}  />
        </FormGroup>
         
         </div>
        )
    })
}

  return (
   <div>
    {/* {getAllCategories()} */}
    {/* {displayCategories()} */}
    <h3>hola</h3>
   </div>
  )
}
export default CategorySuggestionsPage
