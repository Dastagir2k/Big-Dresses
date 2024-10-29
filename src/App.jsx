import React from 'react'


import HeroPage from './components/HeroPage'
import { Analytics } from '@vercel/analytics/react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Story from './components/Story'
import Homepage from './components/Homepage'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/story' element={<Story/>}/>
     </Routes>
      {/* <Analytics/> */}
     </BrowserRouter>
      
    </div>
  )
}

export default App