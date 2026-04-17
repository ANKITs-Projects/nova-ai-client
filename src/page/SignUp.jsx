import { toast } from 'react-toastify'
import { signUpUser } from '../api/auth.api'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
    
    const [loading, setlading] = useState(false)

    const navigate = useNavigate()
    const signUpForm = async (data) => {
      setlading(true)
      try {
        const res = await signUpUser(data)
        if(res.data.success){
          toast.success(res.data.message)
          navigate("/login")
        }
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally{
        setlading(false)
      }
    }
  return (
    <>
        <section 
        className='bg-zinc-800 h-screen w-screen flex justify-center items-center'>
            <Form formType={"SignUp"} loading={loading} submitForm={signUpForm} authMode = {{text: "Already have an account?", link: "login"}}/>
        </section>
    </>
  )
}

export default SignUp