import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Create from './pages/Create'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Create/>
    </div>
  )
}

export default App