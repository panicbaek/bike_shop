import { Nav } from 'react-bootstrap';
import './Download.css'
import { useNavigate } from 'react-router-dom';

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
          <button type="button" className="btn btn-success download2" onClick={()=> {
            
          const result = confirm("Download 하시겠습니까?")
        
          if ( result ) {
            console.log("확인")
          } else {
            console.log("취소")
          }
          }}><p className='p1'>다른 기기에 설치</p></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Download;