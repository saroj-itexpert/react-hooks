import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import LearnUseEffect from './LearnUseEffect'
import Counter from './Counter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/about' element={<h2>This is About Page</h2>} />
        <Route path='/contact' element={
          <div>
          <h2>This is contact Page</h2>
          <button>Click Me</button>
          </div>}
           />
           <Route path='/hook' element={<LearnUseEffect/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App