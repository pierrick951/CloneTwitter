import { Link } from "react-router-dom"
import HomeLink from "../../Layouts/HomeLinks/HomeLinks"
import SearchLink from '../../Layouts/SearchLink/SearchLink'
import NotificationLink from "../../Layouts/Notifications/Notifications"
import MessagerieLink from '../../Layouts/MessagerieLinks/MessagerieLinks'
import GrokLinks from '../../Layouts/GrokLinks/GrokLinks'
import List from '../../Layouts/ListsLink/ListsLink'
import Bookmarks from '../../Layouts/Bookmarks/Bookmarks'
import Communites from '../../Layouts/CommunityLink/CommunityLink'
import User from '../../Layouts/ProfilLinks/ProfilLinks'
import Prenium from '../../Layouts/PreniumLinks/PreniumLinks'
import More from '../../Layouts/MoreLinks/MoreLinks'
import ButtonPost from '../../Components/ButtonPost/ButtonPost'
import X from '../../assets/xlogo.png'
import './Nav.css'
export default function Nav() {
  return (
    <nav>
      <div className="navLinks">
        <h1>
          <a className='linkHeader' href="/">
            <img
              className="containerHeader_img"
              src={X} alt=" got To Home" />
          </a>
        </h1>
        <Link className='navLinks__link' to='/'>
          <HomeLink />
        </Link>

        <Link className='navLinks__link'>
          <SearchLink />
        </Link>
        <Link className='navLinks__link' >
          <NotificationLink />
        </Link>

        <Link className='navLinks__link' to='/message' >
          <MessagerieLink />
        </Link>
        <Link className='navLinks__link' to='/grok' >
          <GrokLinks />
        </Link>
        <Link className='navLinks__link' >
          <List />
        </Link>
        <Link className='navLinks__link' >
          <Bookmarks />
        </Link>
        <Link className='navLinks__link' >
          <Communites />
        </Link>

        <Link className='navLinks__link' to='/prenium' >
          <Prenium />
        </Link>
        <Link className='navLinks__link' to='/userprofile' >
          <User />
        </Link>
        <Link className='navLinks__link' >
          <More />
        </Link>
        <div>
          <ButtonPost />
        </div>
      </div>
      
    </nav>
  )
}