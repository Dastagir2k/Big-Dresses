import React from 'react'


import HeroPage from './components/HeroPage'
import { Analytics } from '@vercel/analytics/react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Story from './components/Story'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HeroPage/>}/>
      <Route path='/story' element={<Story/>}/>
     </Routes>
      {/* <Analytics/> */}
     </BrowserRouter>
      
    </div>
  )
}

export default App