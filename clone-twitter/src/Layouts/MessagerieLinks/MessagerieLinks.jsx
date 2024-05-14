import { useState } from 'react'
import Base from '../../assets/messagerie.svg'
import Active from '../../assets/messagerieActive.svg'
import './MessagerieLinks.css'

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
                <img src={activeLinks ? Active : Base} alt="Home Icon" />
                <span>Messagerie</span>
            </p>
        </div>
    )
}