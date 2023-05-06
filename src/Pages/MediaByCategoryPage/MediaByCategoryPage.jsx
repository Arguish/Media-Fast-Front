import React, { useEffect, useState } from 'react'
import { getMediaByCategories, getMediaByCategoriesAndType } from '../../Services/mediaServices'
import { useParams } from 'react-router-dom'
import Media_page from '../Media_page/Media_page'
import MediaCard from '../../Components/MediaCard/MediaCard'
import { display } from '@mui/system'
const MediaByCategoryPage = () => {
  
  const { type } = useParams()
  const [media, setMedia] = useState([])
  useEffect(() => {
    getMedia()
  }, [])

  const getMedia = async () => {
    const userId = localStorage.userId
    // const result = await getMediaByCategories(userId)
    const result = await getMediaByCategoriesAndType(userId, type)
    setMedia(result)
  }

  const displayMedia = () => {
    console.log(media)
  }

  displayMedia()
  return ( <>
    {media.map((el) => {
      // return <MediaCard cover={`https://picsum.photos/seed/${el.id}/200/300`} cardContent={el} />
      //here just testing if works. <3
    })}
    </>
  )
}

export default MediaByCategoryPage
