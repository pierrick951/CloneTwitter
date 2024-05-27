import './RigthSide.css'
import BoxRigth from '../../Layouts/BoxRigth/BoxRigth'
import BoxRigth2 from '../../Layouts/BoxRigth/BoxRigth2'
import BoxRigth3 from '../../Layouts/BoxRigth/BoxRigth3'
import SearchBar from '../../Components/SearchBar/SearchBar'


export default function RigthSide() {
  return (
    <div className='containerMain padLine'>
      <div className='containerR'>
        <SearchBar/>
      </div>

        <div className="pad-block">
          <BoxRigth />
        </div>
        <BoxRigth2/>
        <BoxRigth3/>
        <div className='underBoxLinks'>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Ads info</a>
          <a href="#">More ...</a>
          <a href="#"> © 2024 X Corp.</a>
        </div>

 
    </div>
  )
}
