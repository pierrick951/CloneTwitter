import { useState, useEffect } from 'react';
import dot from '../../assets/dotR.svg'
import { Heart,Bookmark,ArrowDownToLine  } from 'lucide-react';

import './Post.css';

export default function Post({ body, userId }) {
    const [catImage, setCatImage] = useState(null);

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
                        <Heart className='ico' color="#64686d" />
                    </div>
                    <div className="SaveBox">
                    <Bookmark className='ico' color="#64686d" />
                    <ArrowDownToLine  className='ico'  color="#64686d" />
                    </div>
                </div>
            </div>
        </li>
    );
}
