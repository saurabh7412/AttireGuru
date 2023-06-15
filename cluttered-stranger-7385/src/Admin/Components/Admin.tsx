import React from 'react'
import NavBar from './NavBar'
import AllRoutes from '../Pages/AllRoutes'
import SideBar from './SideBar'

const Admin = () => {
  return (
    <div>
        <NavBar/>
        <SideBar/>
        <AllRoutes/>
    </div>
  )
}

export default Admin