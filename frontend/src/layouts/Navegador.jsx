import {Navbar, Nav, Container} from 'react-bootstrap'
import { Outlet , Link} from 'react-router-dom'

const Navegador = () => {

  return (
    <>
        <Navbar className="container mx-auto flex justify-between items-center" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to="/">Final de Programación 3</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex">
                    <Nav.Link as={Link} to="/persona">Persona</Nav.Link>
                    <Nav.Link as={Link} to="/ciudad" >Ciudad</Nav.Link>
                    <Nav.Link as={Link} to="/provincia" >Provincia</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </>
  )
}

export default Navegador
