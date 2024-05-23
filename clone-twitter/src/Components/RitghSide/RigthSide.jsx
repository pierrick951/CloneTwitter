import './RigthSide.css'
import BoxRigth from '../../Layouts/BoxRigth/BoxRigth'
import BoxRigth2 from '../../Layouts/BoxRigth/BoxRigth2'
import SearchBar from '../../Components/SearchBar/SearchBar'


export default function RigthSide() {
  return (
    <div className='containerMain'>
      <div className='containerR'>
        <SearchBar/>
      </div>

        <div className="pad-block">
          <BoxRigth />
        </div>
        <BoxRigth2/>
 
    </div>
  )
}
