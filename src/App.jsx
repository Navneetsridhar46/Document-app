import { Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './Components/Add'
import Notes from './Components/Notes'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Add/>}></Route>
      <Route path='/notes' element={<Notes/>} ></Route>
     </Routes>
    </>
  )
}

export default App
