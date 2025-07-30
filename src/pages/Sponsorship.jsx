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
          <a href="https://www.redbull.com/kr-ko">
          <img src={Redbull} alt="" className='spon_img_5'/>
          </a>          
          <a href="https://www.michelin.co.kr/?utm_source=googleads&utm_medium=googlesearch&utm_campaign=LOC_E2A_KOR_KOR_DEF_AO_202506_202512_NA__NA_&utm_term=%7bQuery%7d&gad_source=1&gad_campaignid=22623422095&gbraid=0AAAAA-r2R0dSWp5XAwJXZ5krKaC8T-MT9&gclid=Cj0KCQjw4qHEBhCDARIsALYKFNOqg7G1eL-Wtq3x0N2VWtxAMnBE0wIc3IsxaYcyzrOTVseN2lJjYnwaAlw3EALw_wcB">
          <img src={Michelin} alt="" className='spon_img_4'/>
          </a>
          <a href="https://www.lenovo.com/kr/ko/d/deals/intel-special-offers/?cid=kr:sem:aogfs8&gad_source=1&gad_campaignid=16645955897&gbraid=0AAAAACnHrP-gTcUU970CDPbu-IGp42brC&gclid=Cj0KCQjw4qHEBhCDARIsALYKFNMTw83Y7ISOeUACVHREWF1HdlfSqrdErw2Upgh7Nh-K74btCSVNso8aApKkEALw_wcB">
          <img src={Lenovo} alt="" className='spon_img_2'/>
          </a>
          <a href="https://ducati-korea.com/">
          <img src={Ducati} alt="" className='spon_img_3'/>
          </a>
          <a href="https://www.monsterenergy.com/ko-kr/">
          <img src={monstImg} alt="" className='spon_img_1'/>
          </a>
          <a href="https://www.midasuser.com/ko">
          <img src={Patch1} alt="" className='spon_img_6'/>
          </a>
          <a href="https://hexagon.com/products/product-groups/computer-aided-engineering-software/adams">
          <img src={Patch2} alt="" className='spon_img_7'/>
          </a>
      </div>
    </div>
    </>
  )
}

export default Sponsorship;