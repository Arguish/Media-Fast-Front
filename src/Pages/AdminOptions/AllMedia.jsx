import React, { useEffect, useState } from 'react'
import { getMedia, deleteMedia, postMedia } from '../../Services/mediaServices'
import './AllMedia.css'
const AllMedia = () => {
  const [header, setheader] = useState([])
  const [body, setbody] = useState([])
  const [nextId, setnextId] = useState(0)

  const getNextId = (num) => {
    num > nextId ? setnextId(num + 1) : nextId + 1
  }

  const handleGetData = async (getter) => {
    const result = await getter
    const headerMod = Object.keys(result[0]).slice(1)
    headerMod.splice(6, 5)
    setheader(headerMod)
    setbody(result)
  }

  const handleDelete = async (id) => {
    await deleteMedia(id)
    location.reload()
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const res = new Object()
    header.map((a) => {
      res[e.target[a].name] = e.target[a].value
    })
    await postMedia(res)
    location.reload()
  }

  useEffect(() => {
    handleGetData(getMedia())
  }, [])

  const shorString = (str) => {
    if (String(str).length > 20) {
      return String(str).slice(0, 20) + '...'
    } else {
      return str
    }
  }

  return (
    <div
      className="gridWrapper"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${header.length + 1}, 1fr)`,
        marginTop: '100px',
      }}
    >
      {header.map((a, i) => (
        <h2 style={{ grid: `${i}/${i + 1}` }}> {a} </h2>
      ))}
      <h1></h1>

      <form
        style={{
          gridTemplateColumns: `repeat(${header.length + 1}, 1fr)`,
        }}
        onSubmit={(event) => handleCreate(event)}
      >
        {header.map((a, i) => {
          return (
            <input
              name={a}
              placeholder={a}
              type="text"
              style={{
                margin: '3px',
                grid: `${i}/${i + 1}`,
                gridTemplateColumns: `repeat(${header.length}), 1fr`,
              }}
            />
          )
        })}
        <button type="submit" style={{ margin: 3 }}>
          ✔
        </button>
      </form>

      <div>
        {body.map((a) => {
          getNextId(a.id)
          const aValue = Object.values(a)
          aValue.splice(8, 2)
          return (
            <div>
              <h5> {a.originalId}</h5>
              <h5> {a.title}</h5>
              <h5> {a.description}</h5>
              <h5> {a.type}</h5>
              <h5> {a.season}</h5>
              <h5> {a.season_episodes}</h5>
              <button
                className="button"
                onClick={() => handleDelete(a.id)}
                style={{ margin: 3, width: 40, height: 40 }}
              >
                ❌
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllMedia
