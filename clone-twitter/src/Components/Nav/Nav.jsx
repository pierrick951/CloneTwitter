import { Link } from "react-router-dom"
import HomeLink from "../../Layouts/HomeLinks/HomeLinks"
import SearchLink from '../../Layouts/SearchLink/SearchLink'
import NotificationLink from "../../Layouts/Notifications/Notifications"
import X from '../../assets/xlogo.png'
import './Nav.css'
export default function Nav() {
  return (
    <nav>
      <div className="containerHeader">
        <h1>
          <a className='linkHeader' href="/">
            <img 
            className="containerHeader_img"
            src={X} alt=" got To Home" />
          </a>
        </h1>
      </div>
      <div className="navLinks">
        <Link  className='navLinks__link' to='/'>
          <HomeLink/>
        </Link>
 
        <Link  className='navLinks__link' to='/discover'>
          <SearchLink/>
        </Link>
        <Link  className='navLinks__link' >
          <NotificationLink/>
        </Link>
 
      </div>
    </nav>
  )
}