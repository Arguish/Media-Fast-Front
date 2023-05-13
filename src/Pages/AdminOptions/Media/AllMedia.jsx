import React, { useEffect, useState } from 'react'
import {
  getMedia,
  deleteMedia,
  postMedia,
} from '../../../Services/mediaServices'
import './AllMedia.css'
import ServiceCard from '../ServiceCard/ServiceCard'
const AllMedia = () => {
  const [header, setheader] = useState([])
  const [body, setbody] = useState([])

  const handleGetData = async (getter) => {
    const result = await getter
    const headerMod = Object.keys(result[0]).slice(1)
    headerMod.splice(6, 5)
    setheader(headerMod)
    setbody(result)
  }

  useEffect(() => {
    handleGetData(getMedia())
  }, [])

  if (body.length > 0)
    return (
      <>
        <ServiceCard service={body} />
      </>
    )
}

export default AllMedia
