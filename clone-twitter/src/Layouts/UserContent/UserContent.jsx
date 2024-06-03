
import { useSelector } from 'react-redux';
import { useState } from 'react';
import japan from '../../assets/japan.jpg'
import { CalendarDays} from 'lucide-react';

import './UserContent.css';

import dot from '../../assets/dotR.svg'
import { Heart, Bookmark, ArrowDownToLine, Repeat2, MessageCircle, BarChart2,ArrowLeft } from 'lucide-react';



export default function UserContent() {


  const tweets = useSelector((state) => state.tweet.tweets)




  return (
    <div className='content'>
      <div className="topNav">
        <div className="linkToHome">
          <a href="/">
          <ArrowLeft color="#fcf7f7" />
          </a>
        </div>
        <div className='topNavName'>
          <h3>Etuve</h3>
          <p> 0 post</p>
        </div>
      </div>
      <img  className="banniere"src="https://cdn.pixabay.com/photo/2020/01/07/13/01/banner-4747537_1280.jpg" alt="" />
      <div className="boxProfilFollow">
        <div className="blackBack"><img src={japan} alt="" /></div>
        <button>
          Edit Profil
        </button>
      </div>
      <div className="boxInfo">
        <h3>Pierro</h3>
        <p className='idText'>@Etuve.js</p>
        <p className='infoCalendar'>
        <CalendarDays  className='calendarIco' color="#747373" />
        <span>Joined November 2023</span>
        </p>
        <div className="boxFollow">
          <p className='infoProfil'>
          10
            <span>Following</span>
          </p>
          <p className='infoProfil'>
           0
            <span>Followers</span>
          </p>
        </div>
        <div className="boxTabsProfil">
          <p>Post</p>
          <p>Replies</p>
          <p>Highlights</p>
          <p>Articles</p>
          <p>Media</p>
          <p>Likes</p>
        </div>
      </div>

      {tweets.map((tweet, index) => (
        <div key={index} className="tweet">
          <div className='boxProfilPost'>
            <img src={japan} alt="" />
          </div>
          <div className='BoxContentPost'>
            <div className="TopContentPost">
              <div className="topLeftPost">
                <h4>Etuve</h4>
                <p>@etuveBg</p>
              </div>
              <div className='toprigthPost'>
                <img src={dot} alt="" />
              </div>
            </div>
            <div className="postContent">
              <p>{tweet}</p>
            </div>
            <div className='icoPost'>
              <div className='icoFlex'>
                <p className="stats">
                  <MessageCircle color="#64686d" className='ico ' />
                  <span>0</span>
                </p>
                <p className="stats">
                  <Repeat2 color="#64686d" className='ico ' />
                  <span>0</span>
                </p>
                <p className="stats"

                >
                  <Heart className='ico' color="#64686d" />
                  <span>0</span>
                </p>
                <p className='stats'>
                  <BarChart2 className='ico' color="#64686d" />
                  <span>0</span>
                </p>
              </div>
              <div className="SaveBox">
                <Bookmark className='ico Book' color="#64686d" />
                <ArrowDownToLine className='ico' color="#64686d" />
              </div>
            </div>

          </div>


        </div>
      ))}
    </div>
  )
}