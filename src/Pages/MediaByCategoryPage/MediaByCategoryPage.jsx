import React, { useEffect } from 'react'
import { getMediaByCategories } from '../../Services/mediaServices'
const MediaByCategoryPage = () => {

useEffect(() => {
  getCategories()
},[])

  const getCategories = async () => {
    const userId = localStorage.userId
    const result = await getMediaByCategories(userId)
    console.log(result)
  }

  return (
    <div>MediaByCategoryPage</div>
  )
}

export default MediaByCategoryPage