import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}:any) => {

  const isAuth = useSelector((store: any)=>store.AuthReducer.isAuth)
  const navigate = useNavigate()

  if(!isAuth){
    navigate(`/Login`);
  }
    
  return (
    <div>{children}</div>
  )
}

export default PrivateRoute