import { useState } from 'react'
import Base from '../../assets/grok.svg'
import Active from '../../assets/grokActive.svg'
import './GrokLinks.css'

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
                <span>Grok</span>
            </p>
        </div>
    )
}