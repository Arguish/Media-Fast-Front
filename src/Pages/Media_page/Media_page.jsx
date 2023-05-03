import React, { useState, useEffect } from 'react'
import MediaCard from '../../Components/MediaCard/MediaCard'
import { getMediaRandom, getMedia } from '../../Services/mediaServices'

const Media_page = () => {
  const [contentReady, setcontentReady] = useState(false)
  const [spin, setspin] = useState(0)
  const [list, setList] = useState([{}])
  const [listItem, setListItem] = useState(0)

  useEffect(() => {
    const arr = []
    const options = 4
    for (let index = 0; index < options - 1; index++) {
      getMediaRandom().then((a) => arr.push(a))
    }
    console.log(arr)
    setList(arr)
  }, [])

  useEffect(() => {
    setcontentReady(list.length > 1 ? true : false)
  })

  const next = () => {
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
    <>
      <div style={{ display: 'flex' }}>
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
    </>
  )
}

export default Media_page
