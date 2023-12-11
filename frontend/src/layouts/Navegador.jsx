/* import {Navbar, Nav, Container} from 'react-bootstrap' */
import { Outlet , Link} from 'react-router-dom'

const Navegador = () => {

  return (
    <>
        <nav className='flex justify-around w-auto h-auto bg-red-300'>
            <Link to="/persona">Persona</Link>
            <Link to="/ciudad">Ciudad</Link>
            <Link to="/provincia">Provincia</Link>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
       <footer>

       </footer>
    </>
  )
}

export default Navegador
