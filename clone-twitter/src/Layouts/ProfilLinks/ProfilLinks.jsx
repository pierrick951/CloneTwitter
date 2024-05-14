import { useState } from 'react'
import Base from '../../assets/profile.svg'
import Active from '../../assets/profileActive.svg'


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
                <span>Profile</span>
            </p>
        </div>
    )
}