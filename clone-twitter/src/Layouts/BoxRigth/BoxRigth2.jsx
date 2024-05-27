import HappBox from '../../Layouts/HapBox/Hapbox'
import dotR from '../../assets/dotR.svg'
import './BoxRigth.css'

export default function BoxRigth2() {
  return (
    <div className='boxR '>
      <h2 className='headingBox2'>What's happenning</h2>
      <div className="wrappedHappBox">
        <HappBox />
      </div>
      <div className="trendingBox">
        <div className='trendingLeftBox'>
          <p>Sport · Trending</p>
          <h3>#UFC302</h3>
          <p>2.412 posts</p>
        </div>
        <div className='trendingBoxRigth'>
          <img src={dotR} alt="" />
        </div>
      </div>
      <div className="trendingBox">
        <div className='trendingLeftBox'>
          <p>Trending</p>
          <h3>Faze</h3>
          <p>2.815 posts</p>
        </div>
        <div className='trendingBoxRigth'>
          <img src={dotR} alt="" />
        </div>
      </div>
      <div className="trendingBox">
        <div className='trendingLeftBox'>
          <p>Sport · Trending</p>
          <h3>Indianapolis500</h3>
          <p>1.500 posts</p>
        </div>
        <div className='trendingBoxRigth'>
          <img src={dotR} alt="" />
        </div>
      </div>
      <div className="trendingBox">
        <div className='trendingLeftBox'>
          <p>Gaming </p>
          <h3>Cs2</h3>
          <p>2.112 posts</p>
        </div>
        <div className='trendingBoxRigth'>
          <img src={dotR} alt="" />
        </div>
      </div>
    </div>
  )
}