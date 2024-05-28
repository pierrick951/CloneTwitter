import './MainContent.css'
import japan from '../../assets/japan.jpg'  
import xlogo from '../../assets/xlogo.png'  
import cog from '../../assets/cog.svg'  


export default function Main() {
  return (
    <div className='MainContainer'>
      <div className="GlassyBox">
        <div className='topGlassy'>
          <img 
       
          src={japan} alt="profil picture" />
          <img src={xlogo} alt="x logo" />
          <img src={cog} alt="options" />
        </div>
 
      </div>
    </div>
  )
}