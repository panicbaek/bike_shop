import { Nav } from 'react-bootstrap';
import './Download.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Download() {
  const navigate = useNavigate();


  return (
    <>
    <div className='download-container'>
      <div className="download-icon"><Nav.Link onClick={()=> navigate('/mainpage')}>
        🏍️</Nav.Link>
      </div>
      <div className='download-left'>
        <div className='download-left-box'>
          <h1>BikeCommunity</h1>
          <button><i className="bi bi-android2"></i></button>
          <button><i className="bi bi-apple"></i></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Download;