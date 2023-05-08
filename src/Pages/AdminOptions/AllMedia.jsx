import React, { useEffect, useState } from 'react'
import { getMedia, deleteMedia, postMedia } from '../../Services/mediaServices'

const AllMedia = () => {
  const [header, setheader] = useState([])
  const [body, setbody] = useState([])
  const [nextId, setnextId] = useState(0)

  const getNextId = (num) => {
    num > nextId ? setnextId(num + 1) : nextId + 1
  }

  const handleGetData = async (getter) => {
    const result = await getter
    console.log(result)
    console.log(Object.keys(result[0]))
    const headerMod = Object.keys(result[0]).slice(1)
    headerMod.splice(5, 2)
    setheader(headerMod)
    console.log(Object.values(result[0]))
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
    console.log(res)
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
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'stretch' }}
    >
      <div
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
      </div>

      <form
        style={{
          display: 'grid',
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
              style={{ margin: '3px', grid: `${i}/${i + 1}` }}
            />
          )
        })}
        <button type="submit" style={{ margin: 3 }}>
          ✔
        </button>
      </form>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${header.length + 1}, 1fr)`,
        }}
      >
        {body.map((a) => {
          getNextId(a.id)
          const aValue = Object.values(a)
          aValue.splice(6, 2)
          return (
            <>
              {aValue
                .map((b, i) => {
                  if (typeof b === 'object') {
                    if (b[0]) {
                      console.log(Object.values(b[0])[1])
                      return (
                        <>
                          <h3 style={{ grid: `${i}/${i + 1}` }}>
                            {shorString(Object.values(b[0])[1])}
                          </h3>
                        </>
                      )
                    }
                    return <h3> N/A </h3>
                  }
                  return (
                    <>
                      <h3 style={{ grid: `${i}/${i + 1}` }}>{shorString(b)}</h3>
                    </>
                  )
                })
                .slice(1)}

              <button onClick={() => handleDelete(a.id)} style={{ margin: 3 }}>
                ❌
              </button>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default AllMedia
