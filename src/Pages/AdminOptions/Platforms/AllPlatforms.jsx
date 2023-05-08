import React, { useEffect, useState } from 'react'
import {
  getPlatform,
  deletePlatform,
  postPlatform,
} from '../../../Services/platformServices'
import './AllPlatforms.css'


const AllPlatforms = () => {
  const [header, setheader] = useState([])
  const [body, setbody] = useState([])
  const [nextId, setnextId] = useState(0)

  const getNextId = (num) => {
    num > nextId ? setnextId(num + 1) : nextId + 1
  }

  const handleGetData = async (getter) => {
    const result = await getter
    setheader(Object.keys(result[0]).slice(1, -2))
    setbody(result)
  }

  const handleDelete = async (id) => {
    await deletePlatform(id)
    location.reload()
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    const res = new Object()
    header.map((a) => {
      res[e.target[a].name] = e.target[a].value
    })
    console.log(res)
    await postPlatform(res)
    location.reload()
  }

  useEffect(() => {
    handleGetData(getPlatform())
  }, [])

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${header.length + 1}, 1fr)`,
          marginTop: '100px',
        }}
      >
        {header.map((a, i) => (
          <h2 key={i} style={{ grid: `${i}/${i + 1}` }}>{a}</h2>
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
              key={i}
              name={a}
              placeholder={a}
              type="text"
              style={{ grid: `${i}/${i + 1}`, margin: '3px' }}
            />
          )
        })}
        <button type="submit" style={{ margin: 3 }}>
          ✔
        </button>
      </form>
      <div className='gridWrapper'>
        {body.map((a,i) => {
          getNextId(a.id)
          return (
            <div className='platformRow' key={i}>              
                <h3 > {a.name}</h3>
                <h3> {a.platform_url}</h3>
              
              <button  onClick={() => handleDelete(a.id)} style={{ margin: 3 }}>
                ❌
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AllPlatforms
