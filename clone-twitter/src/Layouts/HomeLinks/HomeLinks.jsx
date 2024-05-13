import { useState } from 'react'
import home from '../../assets/house.svg'
import homeActive from '../../assets/houseActive.svg'
import './HomeLinks.css'

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
                <img src={activeLinks ? homeActive : home} alt="Home Icon" />
                <span>Home</span>
            </p>
        </div>
    )
}