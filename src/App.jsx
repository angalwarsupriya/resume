import './App.css'

import React from 'react'
import SideBar from './components/SidebBar'
import Home from './components/Home'

function App() {
  return (
    <main className='main-con'>
      <SideBar />
      <Home/>
    </main>
  )
}

export default App