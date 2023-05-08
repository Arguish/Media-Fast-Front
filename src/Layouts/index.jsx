import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../Components/TopBar/TopBar'
import GoBack from '../Components/GoBack/GoBack'
import TempBack from '../Components/Cassette/TempBack/TempBack'

const Main = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <TempBack />
      <GoBack />
    </>
  )
}

export default Main
