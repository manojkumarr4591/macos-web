import { useState } from 'react'
import './App.scss'
import Dock from './Component/Dock'
import Navbar from './component/Navbar'
import MacWindow from './component/windows/MacWindow'
import Github from './component/windows/Github'



function App() {

  return (
    <main>
      <Navbar />
      <Dock />
      <Github/>
    </main>
  )
}

export default App
