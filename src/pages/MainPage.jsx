import { useLocation } from 'react-router-dom';
import './MainPage.css';
import Community from './Community';

function MainPage () {
  const pageList = useLocation();
  
  return (
    <>
    <div>
      <img src="https://gpticketstore.vshcdn.net/uploads/images/5968/motogp-jerez-ticketsgp.png" alt="" className="bike-img"/>
    </div>
    <div>
      <img src="https://image.api.playstation.com/vulcan/ap/rnd/202009/2512/YsqypXtRDOByXw3eEQ8ca521.jpg" alt="" className="bike-img"/>
    </div>
    </>
  )
}

export default MainPage;