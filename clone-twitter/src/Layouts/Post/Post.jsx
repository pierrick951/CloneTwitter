import { useState, useEffect } from 'react';
import './Post.css';

export default function Post({ body, userId }) {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    // Faire un appel API pour récupérer une image de chat
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        // Extraire l'URL de l'image de la réponse
        const imageUrl = data[0].url;
        // Mettre à jour l'état avec l'URL de l'image
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
            </div>
            <div></div>
        </div>
          
      </div>
    </li>
  );
}
