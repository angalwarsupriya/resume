import './App.css'

import React from 'react'
import SideBar from './components/SidebBar'
import Home from './components/Home'

function App() {
  return (
    <main className='main-con' style={{height:'300vh', width:'100vw', backgroundImage:'background.jpg', backgroundSize:'cover', display:'flex', alignItems:'center', justifyContent:"center"}}>
      <SideBar />
      <Home/>
    </main>
  )
}

export default App