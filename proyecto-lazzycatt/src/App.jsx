import { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import './App.css'

import Store from './pages/Store/Store'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Politics from './pages/Politics/Politics'
import AboutUs from './pages/AboutUs/AboutUs'
import Support from './pages/Support/Support'

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
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/politics' element={<Politics />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/support' element={<Support />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
