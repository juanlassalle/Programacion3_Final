import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Persona from './components/Persona'
import Ciudad from './components/Ciudad'
import Provincia from './components/Provincia'
import Navegador from './layouts/Navegador'


import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navegador/>}>
            <Route path='persona' element={<Persona/>}/>
            <Route path='ciudad' element={<Ciudad/>}/>
            <Route path='provincia' element={<Provincia/>}/>

            <Route path='*' element={<Navigate replace to="persona"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
