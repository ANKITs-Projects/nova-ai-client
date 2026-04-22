import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../api/auth.api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../slice/userSlice';

const UserProfile = () => {
    const {loading, error, user} = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate()

    const handleLogout = async() => {
      try {
        const res = await logoutUser()
        if(res.data.success){
          toast.success(res.data.message)
          dispatch(setUser(null))
          navigate("/login")
        }
        else{
          throw res.data.message
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <div className='w-full max-h-25 p-1.5 flex flex-col gap-1.5 relative'>
        {loading && (<div className='loader'></div>)}
        {loading && (<div className='loader'></div>)}
        {error && (<div>{error}</div>)}
        {user && (
            <div className='w-full p-2 rounded-xl flex flex-col justify-center cursor-pointer hover:bg-(--bgHover)'
              onClick={()=> setShowCart((pre) => !pre)}
            >
            <div className='text-xl font-bold'>Hi {user.name}</div>
            <div className='text-sm font-light'>{user.email}</div>
            </div>
        )}
        {
  showCart && (
    <div className='absolute -top-8 right-8 mt-2 max-w-32 bg-zinc-800 rounded-t-xl rounded-r-xl shadow-lg border border-gray-200 z-50 hover:bg-(--bgHover) 
    '>
      <button className='w-full px-4 py-2 text-sm text-left cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
    </div>
  )
}

export default UserProfile