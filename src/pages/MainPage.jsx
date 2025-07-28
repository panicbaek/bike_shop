import './MainPage.css';
import { useEffect, useRef, useState } from 'react';

function MainPage() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const targetRef = useRef(null);

  // just-do-it transform
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // no limits-just-you
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 원하는 위치(px)에 도달했을 때 show2 활성화
      if (scrollY > 300) {
        setShow2(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='mainpage-page'>
      <div className='img-container-all'>
        <div className='img-container1'>
          <img
            src="https://gpticketstore.vshcdn.net/uploads/images/5968/motogp-jerez-ticketsgp.png"
            alt=""
            className="bike-img1"
          />
          <div className='just-do-it1'>
            <h1 className={`just ${show ? 'show' : ''}`}>JUST</h1>
            <h1 className={`do ${show ? 'show' : ''}`}>DO</h1>
            <h1 className={`it ${show ? 'show' : ''}`}>IT NOW!</h1>
          </div>
        </div>

        <div className='img-container2'>
          <img
            src="https://image.api.playstation.com/vulcan/ap/rnd/202009/2512/YsqypXtRDOByXw3eEQ8ca521.jpg"
            alt=""
            className="bike-img2"
          />
          <div className='just-do-it2'>
            <h1 className={`no-limits ${show2 ? 'show2' : ''}`}>NO LIMITS</h1>
            <h1 className={`just ${show2 ? 'show2' : ''}`}>JUST</h1>
            <h1 className={`you ${show2 ? 'show2' : ''}`}>YOU!</h1>
          </div>
        </div>
      </div>
      <div className='footer-inner'>footer section</div>
      <div className='aside_area'>
        
      </div>
    </div>
  );
}

export default MainPage;
