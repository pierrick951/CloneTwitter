import { useState } from 'react'
import notification from '../../assets/notification.svg'
import notificationActive from '../../assets/notificationActive.svg'
import './Notification.css'

export default function HomeLinK() {
    const [activeLinks, setActiveLinks] = useState(false)

    function HandleActive(){
        if( activeLinks === false){

            setActiveLinks(!activeLinks)
        }
        else{
            setActiveLinks(!activeLinks)
        }
    }

    return (
        <div className='containerLinks'>
            <p onClick={() => HandleActive() }>
                <img src={activeLinks ? notificationActive : notification} alt="Home Icon" />
                <span>Notifications</span>
            </p>
        </div>
    )
}