import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { Nav } from 'react-bootstrap';

function Sidebar () {
const navigate = useNavigate();
  return (
    <>
    <div className="Sidebar">
      <div className="Sidebar-icon">
        <Nav.Link onClick={()=> navigate('/mainPage')}><p><i className="bi bi-youtube"></i></p></Nav.Link>
        <Nav.Link onClick={()=> navigate('/mainPage')}><p><i className="bi bi-chat-dots-fill"></i></p></Nav.Link>
        <Nav.Link onClick={()=> navigate('/mainPage')}><p><i className="bi bi-headset"></i></p></Nav.Link>
      </div>
    </div>

    </>
  )
}

export default Sidebar;