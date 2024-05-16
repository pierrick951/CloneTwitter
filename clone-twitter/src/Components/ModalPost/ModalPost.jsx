import './ModalPost.css'
import close from '../../assets/close.svg'
import japan from '../../assets/japan.jpg'
import earth from '../../assets/earth.svg'
import ModalIcoPost from '../../Layouts/ModalIcoPost/ModalIcoPost'


export default function ModalPost({ closemodal }) {
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
          </div>
        </div>
      </div>


    </div>
  )
}