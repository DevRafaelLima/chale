import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { PageIndex } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <PageIndex/>
     </> 
    
  )
}

export default App
