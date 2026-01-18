import { useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import './App.css'

import Store from './pages/Store'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
