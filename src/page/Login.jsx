import Form from '../components/Form'

const Login = () => {

    const loginForm = (data) => {
      console.log(data)
    }
  return (
    <>
        <section 
        className='bg-zinc-800 h-screen w-screen flex justify-center items-center'>
            <Form formType="Login" submitForm={loginForm} authMode = {{text: "Don’t have an account?", link: "signup"}}/>
        </section>
    </>
  )
}

export default Login