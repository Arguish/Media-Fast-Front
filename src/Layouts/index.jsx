import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../Components/TopBar/TopBar'

const Main = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}

export default Main
