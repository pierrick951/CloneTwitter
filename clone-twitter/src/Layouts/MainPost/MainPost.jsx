import japan from '../../assets/japan.jpg'
import earth from '../../assets/earth.svg'
import ModalIcoPost from '../ModalIcoPost/ModalIcoPost'
import './MainPost.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTweet } from '../../script/tweetSlice'

export default function MainPost() {
    const [showText, setShowtext] = useState(false);
    const [tweet, setTweet] = useState('');
    const dispatch = useDispatch();
  

    function Showtext() {

        if (showText === false) {
            setShowtext(!showText)
        }
        else (
            setShowtext(false)
        )
    }

    function handlePost(){
        if (tweet.trim()){
          dispatch(addTweet(tweet));
          setTweet('');
        }
      }
    return (

        <div className='boxPostMain'>
            <div

                className="containBox">
                <div className="PicImg">
                    <img src={japan} alt="" />

                </div>
                <textarea
                    onClick={() => Showtext()}
                    placeholder="What's happening?!"
                    className="postTextarea"
                    value={tweet}
                    onChange={e => setTweet(e.target.value)}
                />
            </div>
            <div className="modalCardbot">

                {showText && <div className="topboxx">
                    <p>
                        <img src={earth} alt="" />
                        <span>Everyone can reply</span>
                    </p>
                </div>}
            </div>
            <div className="Bottompost">
                <div className="Boxico">
                    <ModalIcoPost />
                </div>
                <div className='BoxButtonPost'>
                    <button
                     onClick={(() => handlePost())}
                    >
                        Post
                    </button>
                </div>
            </div>

        </div>



    )
}