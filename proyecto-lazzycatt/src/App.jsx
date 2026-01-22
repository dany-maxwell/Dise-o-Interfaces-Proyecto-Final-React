import { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import './App.css'

import Store from './pages/Store/Store'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:false
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
