import { useState } from 'react'
import './App.scss'
import Dock from './Component/Dock'
import Navbar from './component/Navbar'
import MacWindow from './component/windows/MacWindow'
import Github from './component/windows/Github'
import Note from './component/windows/Note'
import Resume from './component/windows/Resume'



function App() {

  return (
    <main>
      <Navbar />
      <Dock />
      <Github/>
      <Note/>
      <Resume/>
    </main>
  )
}

export default App
