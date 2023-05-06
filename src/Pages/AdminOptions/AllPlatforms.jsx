import React, { useEffect, useState } from 'react'
import { getPlatform, deletePlatform } from '../../Services/platformServices'

const AllPlatforms = () => {
  const [header, setheader] = useState([])
  const [body, setbody] = useState([])

  const handleGetData = async (getter) => {
    const result = await getter
    console.log(result)
    console.log(Object.keys(result[0]))
    setheader(Object.keys(result[0]).slice(0, -2))
    console.log(Object.values(result[0]))
    setbody(result)
  }

  useEffect(() => {
    handleGetData(getPlatform())
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${header.length + 1}, 1fr)`,
        marginTop: '100px',
      }}
    >
      {header.map((a, i) => (
        <h2 style={{ grid: `${i}/${i + 1}` }}>{a}</h2>
      ))}
      <h1></h1>

      {header.map((a, i) => {
        if (i === 0) {
          return <p></p>
        }
        return (
          <input
            placeholder={a}
            type="text"
            style={{ grid: `${i}/${i + 1}`, margin: '3px' }}
          />
        )
      })}
      <button style={{ margin: 3 }}>✔</button>

      {body.map((a) => {
        return (
          <>
            {Object.values(a)
              .map((b, i) => {
                return (
                  <>
                    <h3 style={{ grid: `${i}/${i + 1}` }}> {b} </h3>
                  </>
                )
              })
              .slice(0, -2)}
            <button style={{ margin: 3 }}>❌</button>
          </>
        )
      })}
    </div>
  )
}

export default AllPlatforms
