import { useState, useEffect } from 'react';
import dot from '../../assets/dotR.svg'
import { Heart, Bookmark, ArrowDownToLine, Repeat2, MessageCircle, BarChart2 } from 'lucide-react';

import './Post.css';

export default function Post({ body, userId }) {
    const [catImage, setCatImage] = useState(null);
    const [active, setActive] = useState(false);
    const [like, SetLiked] = useState(0)

    function Liked() {

        if (like === 0){

            SetLiked(like + 1)
        }
        else{
            SetLiked(like -1)
        }
    }
    useEffect(() => {

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {

                const imageUrl = data[0].url;

                setCatImage(imageUrl);
            })
            .catch(error => console.error('Erreur lors de la récupération de l\'image de chat:', error));
    }, []);

    return (
        <li className="red">
            <div className='boxProfilPost'>
                {catImage && <img src={catImage} alt="Chat" />}
            </div>
            <div className="BoxContentPost">
                <div className="TopContentPost">
                    <div className="topLeftPost">
                        <h4>Cat{userId}</h4>
                        <p>@user{userId}</p>
                    </div>
                    <div className='toprigthPost'>
                        <img src={dot} alt="" />
                    </div>
                </div>
                <div className="postContent">
                    <p>{body}</p>
                </div>
                <div className="BoxImgPost">
                    {catImage && <img src={catImage} alt="Chat" />}
                </div>
                <div className='icoPost'>
                    <div className='icoFlex'>
                        <p className="stats">
                            <MessageCircle color="#64686d" className='ico ' />
                            <span>0</span>
                        </p>
                        <p className="stats">
                            <Repeat2 color="#64686d" className='ico '/>
                            <span>32</span>
                        </p>
                        <p className="stats"
                            onClick={(() => Liked())}
                        >{like ? <Heart color="#ff0000" className='ico '/> : <Heart className='ico' color="#64686d" />}
                            <span>{like}</span>
                        </p>
                        <p className='stats'>
                            <BarChart2 className='ico' color="#64686d" />
                            <span>33</span>
                        </p>
                    </div>
                    <div className="SaveBox">
                        <Bookmark className='ico Book' color="#64686d" />
                        <ArrowDownToLine className='ico' color="#64686d" />
                    </div>
                </div>
            </div>
        </li>
    );
}
