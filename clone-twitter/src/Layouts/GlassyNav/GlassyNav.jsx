import japan from '../../assets/japan.jpg'
import xlogo from '../../assets/xlogo.png';
import cog from '../../assets/cog.svg';

import './GlassyNav.css'

export default function GlassyNav() {
  return (
    <div className="GlassyBox">
    <div className='topGlassy'>
        <img className='profilPic' src={japan} alt="Profile" />
        <img className='logo' src={xlogo} alt="X logo" />
        <img src={cog} alt="Settings" />
    </div>
    <div className='TabsGlassy'>
        <div className="boxText">
            <div className='ForYouBox'>
                <p>For you</p>
            </div>
            <div className='FollowBox'>
                <p>Following</p>
            </div>
            <div className='cogBox'>
                <img src={cog} alt="Settings" />
            </div>
        </div>
    </div>
</div>
  )
}