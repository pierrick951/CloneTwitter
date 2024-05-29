import { useEffect,useState } from 'react';
import './MainContent.css';
import GlassyNav from '../../Layouts/GlassyNav/GlassyNav';
import MainPost from '../../Layouts/MainPost/MainPost';
import Post from '../../Layouts/Post/Post';


export default function MainContent() {


 const [postState, SetPostState] =useState([])



  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())

      .then(json => {
        console.log(json)
        SetPostState(json)
      })

      .catch(error => ('un probleme est survenu', error))

  }, [])


  return (

    <div className='MainContainer'>
      <GlassyNav />
      <MainPost />
      <div className="postMain">
        <ul>
            {postState.map(post =>(
             <Post key={post.id} body={post.body} userId={post.id}/>
            ))}
        </ul>
      </div>
    </div>
  );
}
