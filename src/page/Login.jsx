import { toast } from 'react-toastify'
import { getUserProfile, loginUser } from '../api/auth.api'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slice/userSlice'
import { useState } from 'react'

const Login = () => {
  const [loading, setlading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fetchUserProfile = useAuth()


    const loginForm = async (data) => {
      setlading(true)
      try {
        const res = await loginUser(data)
        if(res.data.success){
          toast.success(res.data.message)
          
          fetchUserProfile()
          
          navigate("/")
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
      } finally{
        setlading(false)
      }
    }
  return (
    <>
        <section 
        className='bg-zinc-800 h-screen w-screen flex justify-center items-center'>
            <Form formType="Login" loading={loading} submitForm={loginForm} authMode = {{text: "Don’t have an account?", link: "signup"}}/>
        </section>
    </>
  )
}

export default Login