import React, { useState } from 'react'
import MediaCard from '../../Components/MediaCard/MediaCard'

const Media_page = () => {
  const [list, setList] = useState(['A', 'B', 'C'])
  const [listItem, setListItem] = useState(0)
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
        <h1>{list[listItem]}</h1>
        <MediaCard
          visibility={list[listItem] === 'A' ? 'visible' : 'collapse'}
        ></MediaCard>
        <MediaCard
          visibility={list[listItem] === 'B' ? 'visible' : 'collapse'}
        ></MediaCard>
        <MediaCard
          visibility={list[listItem] === 'C' ? 'visible' : 'collapse'}
        ></MediaCard>
        <button onClick={next}>{' >>> '}</button>
        {console.log(list[listItem] === 'B' ? 'visible' : 'collapse')}
      </div>
    </>
  )
}

export default Media_page
