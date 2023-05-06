import React, { useEffect } from 'react'
import { getMediaByCategories, getMediaByCategoriesAndType } from '../../Services/mediaServices'
import { useParams } from 'react-router-dom'
const MediaByCategoryPage = () => {
  
  const { type } = useParams()

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const userId = localStorage.userId
    // const result = await getMediaByCategories(userId)
    const result = await getMediaByCategoriesAndType(userId, type)
    console.log(result)
  }

  return <div>MediaByCategoryPage</div>
}

export default MediaByCategoryPage
