import Form from '../components/Form'

const SignUp = () => {

    const signUpForm = (data) => {
      console.log(data)
    }
  return (
    <>
        <section 
        className='bg-zinc-800 h-screen w-screen flex justify-center items-center'>
            <Form formType="SignUp" submitForm={signUpForm} authMode = {{text: "Already have an account?", link: "login"}}/>
        </section>
    </>
  )
}

export default SignUp