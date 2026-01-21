import { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import './App.css'

import Store from './pages/Store/Store'
import Register from './pages/Register/Register'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
