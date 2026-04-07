import { ToastContainer } from 'react-toastify'
import './App.css'
import SignUp from './page/SignUp'
import Login from './page/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <ToastContainer /> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
