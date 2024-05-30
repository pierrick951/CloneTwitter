import UserContent from '../../Layouts/UserContent/UserContent'

import Nav from '../Nav/Nav'

import RigthSide from '../RitghSide/RigthSide'

export default function Home() {
    return (
        <div className='MainCointainer'>
            <div className="container one">
                <Nav />
            </div>
            <div className="container two">
              <UserContent/>
            </div>
            <div className="container three">
                <RigthSide />
            </div>
        </div>
    )
}