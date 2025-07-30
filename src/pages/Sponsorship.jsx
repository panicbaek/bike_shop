import './Sponsorship.css'
import monstImg from '../../public/img/monster.png.png'
import Lenovo from '../../public/img/pngegg.png'
import Ducati from '../../public/img/Daco_5851138.png'
import Michelin from '../../public/img/Michelin.png'
import Redbull from '../../public/img/Redbull.png'
import Patch1 from '../../public/img/patch1.png'
import Patch2 from '../../public/img/patch2.png'

function Sponsorship () {

  return (
    <>
    <div className='sponsorship_main'>
      <div className='spon_container'>
        <img src="https://motociclismoonline.com.br/wp-content/uploads/2025/01/ducati-desmosedici-gp25-de-lenovo-motogp-2025-motociclismoonline.jpeg" 
        alt="sponsor" className='bgc_img'/>
          <img src={Redbull} alt="" className='spon_img_5'/>
          <img src={Michelin} alt="" className='spon_img_4'/>
          <img src={Lenovo} alt="" className='spon_img_2'/>
          <img src={Ducati} alt="" className='spon_img_3'/>
          <img src={monstImg} alt="" className='spon_img_1'/>
          <img src={Patch1} alt="" className='spon_img_6'/>
          <img src={Patch2} alt="" className='spon_img_7'/>
      </div>
    </div>
    </>
  )
}

export default Sponsorship;