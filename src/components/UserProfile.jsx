import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const {loading, error, user} = useSelector((store) => store.user)

  return (
    <div className='w-full max-h-25 p-1.5 flex flex-col gap-1.5'>
        {loading && (<div className='loader'></div>)}
        {loading && (<div className='loader'></div>)}
        {error && (<div>{error}</div>)}
        {user && (
            <div className='w-full p-2 rounded-xl flex flex-col justify-center cursor-pointer hover:bg-(--bgHover)'>
            <div className='text-xl font-bold'>Hi {user.name}</div>
            <div className='text-sm font-light'>{user.email}</div>
            </div>
        )}
    </div>
  )
}

export default UserProfile