import  home from '../../assets/house.svg'
import './HomeLinks.css'

export default function HomeLinK() {
    return (
        <div className='containerLinks'>
            <p>
                <img src={home} alt="" />
                <span>Home</span>
            </p>
        </div>
    )
}