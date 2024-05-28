import './MainContent.css';
import GlassyNav from '../../Layouts/GlassyNav/GlassyNav';
import MainPost from '../../Layouts/MainPost/MainPost';

export default function MainContent() {
  return (
    <div className='MainContainer'>
      <GlassyNav />
      <MainPost />

    </div>
  );
}
