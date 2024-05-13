import './Home.css'
import Nav from '../Nav/Nav'
import MainContent from '../MainContent/MainContent'
import RigthSide from '../RitghSide/RigthSide'

export default function Home() {
    return (
        <div className='MainCointainer'>
            <div className="container one">
                <Nav />
            </div>
            <div className="container two">
                <MainContent/>
            </div>
            <div className="container three">
                <RigthSide />
            </div>
        </div>
    )
}