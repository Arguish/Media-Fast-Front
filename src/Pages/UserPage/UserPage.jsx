import React, { useEffect, useState } from 'react'
import { getUserMe, getUserMeMedia } from '../../Services/userServices'
import UserCard from './UserCard/UserCard'
const UserPage = () => {
  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const user = await getUserMe(localStorage.userId)
    const userMedia = await getUserMeMedia(localStorage.userId)
    console.log(userMedia)
    setUser(user)
  }

  const showUserInfo = () => {
    if (user) {
      return <UserCard user={user} />
    }
  }

  const [user, setUser] = useState()
  return <div>{showUserInfo()}</div>
}

export default UserPage
