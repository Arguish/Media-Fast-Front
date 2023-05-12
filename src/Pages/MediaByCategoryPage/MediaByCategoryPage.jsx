//Node_modules
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Components
import MediaCard from '../../Components/MediaCard/MediaCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'

//Services
import { getMediaByID } from '../../Services/mediaServices'
import { getMediaByCategoriesAndType } from '../../Services/mediaServices'

//Hooks
import useList from '../../Hooks/useList'
import useLang from '../../Hooks/useLang'

//THIS Component

const MediaByCategoryPage = () => {
  const [contentReady, setcontentReady] = useState(false)
  const [loading, setloading] = useState(false)
  const [tryCount, settryCount] = useState(0)
  const [spin, setspin] = useState(0)

  const [item, array, setArray, nx, prv] = useList()
  const lang = useLang()

  const maxCount = 3

  const { type } = useParams()

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const userId = localStorage.userId
    const result = await getMediaByCategoriesAndType(userId, type)

    if (result.length !== 0) {
      setArray(
        result.splice(Math.floor(Math.random() * result.length), maxCount)
      )
      setcontentReady(true)
    }
  }
  const next = () => {
    settryCount(tryCount + 1)
    setloading(true)
    setspin(spin + 720)
    nx()
  }

  const previous = () => {
    setspin(spin - 720)
    prv()
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
            {
              [
                `El servidor esta tardando${
                  tryCount > 3 ? ' MUCHO' : ''
                }... Espere
            por Favor...`,
                `The server is taking time${
                  tryCount > 3 ? ' A LOT' : ''
                }... Please wait
            please...`,
              ][lang]
            }
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
            {contentReady && <MediaCard cardContent={item}></MediaCard>}
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
              ['Un momento por favor...', 'One moment, please...'][lang]
            )}
          </Button>
        </div>
        {contentReady && (
          <Button
            style={btnStyle}
            onClick={() => {
              getMediaByID(item.id).then(
                (A) => (window.location = A.platforms[0].platform_url)
              )
            }}
          >
            {item.title} <br />
            {['Ver en ', 'See on '][lang]} {item.platforms[0].name} !
          </Button>
        )}
      </div>
    </div>
  )
}

//CSS

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
