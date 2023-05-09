import React, { useEffect, useState } from 'react'
import MediaCard from '../../Components/MediaCard/MediaCard'
import { getMediaRandom, getMediaByID } from '../../Services/mediaServices'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  getMediaByCategories,
  getMediaByCategoriesAndType,
} from '../../Services/mediaServices'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'

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
    const result = await getMediaByCategoriesAndType(userId, type)
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
          {contentReady && (
            <Button style={arrowsBtnStyle} onClick={previous}>
              {
                <ArrowBackIosIcon
                  color="secondary"
                  sx={{
                    height: '50px',
                    width: '50px',
                  }}
                />
              }
            </Button>
          )}
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
          
          <Button style={arrowsBtnStyle} onClick={next}>
            {contentReady ? (
              <ArrowForwardIosIcon
                sx={{
                  height: '50px',
                  width: '50px',
                }}
                color="secondary"
              />
            ) : (
              'Estoy listo!'
            )}
          </Button>
        </div>
        {contentReady && (
          <Button
            style={btnStyle}
            onClick={() => {
              getMediaByID(list[listItem].id).then(
                (A) => (window.location = A.platforms[0].platform_url)
              )
            }}
          >
           {list[listItem].title} <br />
            Ver en {list[listItem].platforms[0].name} !
          </Button>
        )}
      </div>
    </div>
  )
}

const btnStyle = {
  minWidth: '50px',
  margin: '10px',
  color: '#ee9e09',
  borderRadius: '15px',
  fontWeight: '800',
  fontSize: '22px',
  fontFamily: 'Poppins, sans seriff',
  textShadow: '0.1px 0.1px white',
  border: '2px solid',
}

const arrowsBtnStyle = {
  height: '5em',
  margin: '10px',
  color: '#ee9e09',
  borderRadius: '15px',
  fontWeight: '800',
  fontSize: '22px',
  fontFamily: 'Poppins, sans seriff',
  textShadow: '0.1px 0.1px white',
}

export default MediaByCategoryPage
