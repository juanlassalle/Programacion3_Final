import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Persona from './components/Persona'
import Ciudad from './components/Ciudad'
import Provincia from './components/Provincia'
import Navegador from './layouts/Navegador'
import CrearCiudad from './components/ciudad/CrearCiudad'
import EditarCiudad from './components/ciudad/EditarCiudad'


import './App.css'

function App() {

  return (
    <div>
      <header className='text-center navBg'>Final de Programación 3</header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navegador/>}>
            <Route path='/persona' element={<Persona/>}/>
            <Route path='/ciudad' element={<Ciudad/>}/>
            <Route path='/provincia' element={<Provincia/>}/>
            <Route path='/crearCiudad' element={<CrearCiudad/>}/>
            <Route path='/editarCiudad/:id' element={ <EditarCiudad/>}/>
            <Route path='*' element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
