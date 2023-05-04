import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../Components/TopBar/TopBar'
import GoBack from '../Components/GoBack/GoBack'
const Main = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <GoBack/>
    </>
  )
}

export default Main
