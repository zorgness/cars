import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/react.webp'

function Mynavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>
          <FontAwesomeIcon icon={faWrench} />

          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-5">
            <Nav.Link href="/">Docs</Nav.Link>
            <Nav.Link href="/tutorial">Tutorial</Nav.Link>
            <Nav.Link href="/community/">Community</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
