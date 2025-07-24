import { useNavigate } from 'react-router-dom';
import './Login.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Nav } from 'react-bootstrap';

function Login () {
  const navigate = useNavigate();
  // headBar, sideBar off
  
  
  return (
    <>
    {/* user */}



    {/* login-page-css */}
    <div className='bike-logo'>🏍️</div>
    <div className='contnet'>
      <div className='login-wrap'>
      <Form.Group as={Row} className="login-id" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          ID
        </Form.Label>
        <Col sm="10">
          <Form.Control type="id" placeholder="ID" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="login-password" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
        <button className='login-button'>Login</button>
        <button className='login-button'><i className="bi bi-google"></i></button>
        <button className='login-button'><i className="bi bi-qr-code"></i></button>
        <div className='login-all'>
          <Nav.Link onClick={()=> navigate('/login')}><p>Find ID</p> </Nav.Link>
          <Nav.Link onClick={()=> navigate('/login')}><p>Find Password</p> </Nav.Link>
          <Nav.Link onClick={()=> navigate('/login')}><p>Sign Up</p> </Nav.Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;