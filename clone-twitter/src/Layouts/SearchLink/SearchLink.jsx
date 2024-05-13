import { useState } from 'react'
import explore from '../../assets/explore.svg'
import exploreActive from '../../assets/exploreActive.svg'
import './SearchLink.css'

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
                <img src={activeLinks ? exploreActive: explore} alt="Home Icon" />
                <span>Explore</span>
            </p>
        </div>
    )
}