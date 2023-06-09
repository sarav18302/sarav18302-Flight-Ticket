import React from 'react'
import { Template } from './Template'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Template />
        <Outlet />
    </main>
  )
}

export default Layout