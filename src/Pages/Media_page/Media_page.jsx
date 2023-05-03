import React, { useState, useEffect } from 'react'
import MediaCard from '../../Components/MediaCard/MediaCard'
import { getMediaRandom, getMedia } from '../../Services/mediaServices'

const Media_page = () => {
  const [contentReady, setcontentReady] = useState(false)
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
    if (listItem >= list.length - 1) {
      setListItem(0)
    } else {
      setListItem(listItem + 1)
    }
  }
  const previous = () => {
    if (listItem <= 0) {
      setListItem(list.length - 1)
    } else {
      setListItem(listItem - 1)
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>{' <<< '}</button>
        {contentReady && <MediaCard cardContent={list[listItem]}></MediaCard>}
        {console.log(list[listItem])}
        <button onClick={next}>{' >>> '}</button>
      </div>
    </>
  )
}

export default Media_page
