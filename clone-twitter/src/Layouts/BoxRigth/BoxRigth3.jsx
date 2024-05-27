import './BoxRigth.css'
import certif from '../../assets/certif.svg'


export default function BoxRigth3() {
  return (
    <div className='boxR bottomBox'>
        <h2>Who to follow</h2>
        <div className='BoxProfilFollow'>
            <div className='BoxPfLeft'>
                <div className='BoxImgProfil'>
                    <img 
                          className='ProfilPicture'
                    src="https://variety.com/wp-content/uploads/2021/10/FazeClan-SPAC-Deal.png?w=1024" alt="" />
                </div>
                <div className="BoxUsername">
                    <h3>
                        <span>Faze</span>
                        <img
                  
                         src={certif} alt="" />
                    </h3>
                    <p>@FazeClan</p>
                </div>
            </div>
            <div className='BoxProfilRigth'>
                <button id='blb'>
                    Follow
                </button>
            </div>
        </div>
        <div className='BoxProfilFollow'>
            <div className='BoxPfLeft'>
                <div className='BoxImgProfil'>
                    <img 
                          className='ProfilPicture'
                    src="https://media.larepubliquedespyrenees.fr/5124357/1000x625/pp-5cc06eb3a43f5efd164e45ef-ph0.jpg?v=1556118782" alt="" />
                </div>
                <div className="BoxUsername">
                    <h3>
                        <span>Galoutre</span>
                       
                    </h3>
                    <p>@Galoutre</p>
                </div>
            </div>
            <div className='BoxProfilRigth'>
                <button id='blb'>
                    Follow
                </button>
            </div>
        </div>
        <div className='BoxProfilFollow'>
            <div className='BoxPfLeft'>
                <div className='BoxImgProfil'>
                    <img 
                          className='ProfilPicture'
                    src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="BoxUsername">
                    <h3>
                        <span>Racoon</span>
                       
                    </h3>
                    <p>@Racoon</p>
                </div>
            </div>
            <div className='BoxProfilRigth'>
                <button id='blb'>
                    Follow
                </button>
            </div>
        </div>
            <p className="showMore">Show More</p>
    </div>
  )
}