import './RigthSide.css'
import BoxRigth from '../../Layouts/BoxRigth/BoxRigth'
import SearchBar from '../../Components/SearchBar/SearchBar'


export default function RigthSide() {
  return (
    <div className='containerR'>
      <SearchBar/>
      <div className='WrapedContainer'>
         <BoxRigth/>
         <BoxRigth/>
         <BoxRigth/>
      </div>
    </div>
  )
}
