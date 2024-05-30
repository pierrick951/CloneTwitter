import './ModalPost.css'
import close from '../../assets/close.svg'
import japan from '../../assets/japan.jpg'
import earth from '../../assets/earth.svg'
import ModalIcoPost from '../../Layouts/ModalIcoPost/ModalIcoPost'
import { useDispatch } from 'react-redux';
import { addTweet} from '../../script/tweetSlice';
import { useState } from 'react'


export default function ModalPost({ closemodal }) {

  const [tweet,setTweet] =useState('');
  const dispatch = useDispatch()

  function handlePost(){
    if (tweet.trim()){
      dispatch(addTweet(tweet));
      setTweet('');
      closemodal();
    }
  }
  return (
    <div
      onClick={closemodal}
      className="backgroundModal">
      <div
        onClick={e => e.stopPropagation()}
        className='ModalCard'
      >
        <div className='ModalCardTop'>
          <button
            onClick={closemodal}
          >
            <img src={close} alt="close modale" />
          </button>
          <p>Drafts</p>
        </div>
        <div

          className="ModalCardText">
          <div className="modalImg">
            <img src={japan} alt="" />

          </div>
          <textarea
            placeholder="What's happening?"
            className="postTextarea"
            value={tweet}
            onChange={e => setTweet(e.target.value)}
          />
        </div>
        <div className="modalCardbot">
          <div className="topbox">
            <p>
              <img src={earth} alt="" />
              <span>Everyone can reply</span>
            </p>
          </div>
          <div className='botbox'>
            <ModalIcoPost/>
            <button
            onClick={(() => handlePost())}
            >Post</button>
          </div>
          
        </div>
      </div>


    </div>
  )
}