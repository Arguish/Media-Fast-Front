import React, { useState } from 'react'
import UserCard from '../UserPage/UserCard/UserCard'
import { getUserByID } from '../../Services/userServices'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const OneUser = () => {
  const [user, setUser] = useState()
  const { userId } = useParams()

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const result = await getUserByID(userId)
    setUser(result)
  }

  const displayUser = () => {
    if (user) {
        return <UserCard user={user} />
    } 'Pepe'
  }

  return (
    <div>
      <h1>
        {displayUser()}
      </h1>
    </div>
  )
}

export default OneUser
