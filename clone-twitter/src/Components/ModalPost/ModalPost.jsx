import './ModalPost.css'
import close from '../../assets/close.svg'


export default function ModalPost({closemodal}) {
  return (
    <div 
    onClick={closemodal}
    className="backgroundModal">
      <div
      onClick={e => e.stopPropagation}
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
      </div>
  
    </div>
  )
}