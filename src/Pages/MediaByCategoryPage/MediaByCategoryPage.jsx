import React, { useEffect, useState } from 'react'
import MediaCard from '../../Components/MediaCard/MediaCard'
import { getMediaRandom, getMediaByID } from '../../Services/mediaServices'

import {
  getMediaByCategories,
  getMediaByCategoriesAndType,
} from '../../Services/mediaServices'
import { useParams } from 'react-router-dom'

const MediaByCategoryPage = () => {
  const [contentReady, setcontentReady] = useState(false)
  const [loading, setloading] = useState(false)
  const [tryCount, settryCount] = useState(0)
  const [spin, setspin] = useState(0)
  const [list, setList] = useState([{}])
  const [listItem, setListItem] = useState(0)

  const maxCount = 3

  const { type } = useParams()

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const userId = localStorage.userId
    // const result = await getMediaByCategories(userId)
    const result = await getMediaByCategoriesAndType(userId, type)
    console.log(result)
    setList(result.slice(0, maxCount))
    setcontentReady(true)
  }
  const next = () => {
    settryCount(tryCount + 1)
    setloading(true)
    setspin(spin + 720)
    if (listItem >= list.length - 1) {
      setListItem(0)
    } else {
      setListItem(listItem + 1)
    }
  }
  const previous = () => {
    setspin(spin - 720)
    if (listItem <= 0) {
      setListItem(list.length - 1)
    } else {
      setListItem(listItem - 1)
    }
  }
  return (
    <div className="mediaCardWrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {loading && !contentReady && (
          <h2>
            El servidor esta tardando{tryCount > 3 ? ' MUCHO' : ''}... Espere
            por Favor...
          </h2>
        )}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {contentReady && <button onClick={previous}>{' <<< '}</button>}
          <div
            style={{
              transition: 'all 200ms',
              transform: `rotateY(${spin}deg)`,
            }}
          >
            {contentReady && (
              <MediaCard
                cover={`https://picsum.photos/seed/${list[listItem]}/200/300`}
                cardContent={list[listItem]}
              ></MediaCard>
            )}
          </div>
          {console.log(list[listItem])}
          <button onClick={next}>
            {contentReady ? ' >>> ' : 'Estoy listo!'}
          </button>
        </div>
        {contentReady && (
          <button
            onClick={() => {
              getMediaByID(list[listItem].id).then(
                (A) => (window.location = A.platforms[0].platform_url)
              )
            }}
          >
            <h2>VER AHORA!</h2>
          </button>
        )}
      </div>
    </div>
  )
}

export default MediaByCategoryPage
