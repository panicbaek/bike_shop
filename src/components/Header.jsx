import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {

  // navigate 훅
  const navigate = useNavigate();

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Nav.Link onClick={()=> navigate('/mainPage')}><div className="logo-bike">🏍️</div></Nav.Link>
            {/* community Click */}
            <div>
              <Nav.Link onClick={() => navigate('/community')}><p className='Header-list'>community</p></Nav.Link>
            </div>
            <div>
              <Nav.Link onClick={() => navigate('/information')}><p className='Header-list'>information</p></Nav.Link>
            </div>
            <div>
              <Nav.Link onClick={() => navigate('/sponsorship')}><p className='Header-list'>sponsorship</p></Nav.Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  🏍️
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => navigate('/login')}><i className="bi bi-box-arrow-in-left"></i> Login</Nav.Link>
                  <Nav.Link onClick={() => navigate('/companyintroduction')}><i className="bi bi-building"></i> Company introduction</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Nav.Link onClick={() => navigate('/download')}>
                    <NavDropdown.Item href="#Android"><i className="bi bi-android2"></i> Android</NavDropdown.Item>
                    <NavDropdown.Item href="#iOS"><i className="bi bi-apple"></i> iOS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#Windows"><i className="bi bi-windows"></i> Windows</NavDropdown.Item>
                    </Nav.Link>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" ><i className="bi bi-search"></i></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
