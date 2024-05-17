import './ModalIcoPost.css'
import picture from '../../assets/picture.svg'
import gif from '../../assets/gif.svg'
import poli from '../../assets/poli.svg'
import smile from '../../assets/smile.svg'
import schedule from '../../assets/schedule.svg'
import map from '../../assets/map.svg'

export default function ModalIcoPost() {
  return (
    <div className='boxicone'>
        <img src={picture} alt="" />
        <img src={gif} alt="" />
        <img src={poli} alt="" />
        <img src={smile} alt="" />
        <img src={schedule} alt="" />
        <img src={map} alt="" />
    </div>
  )
}