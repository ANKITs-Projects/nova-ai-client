import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthProtectRoute = ({children}) => {
  const user =  useSelector((state) => state.user)

    if(user.loading) {
        return <h1>Loading...</h1>
    }
    if(user.user) {
        return <Navigate to="/" replace />      
    }
  return children
}

export default AuthProtectRoute