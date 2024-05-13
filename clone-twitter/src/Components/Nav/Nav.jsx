import { Link } from "react-router-dom"
import './Nav.css'
export default function Nav() {
  return (
    <nav>
      <div className="containerHeader">
        <h1>
          <a className='linkHeader' href="/home">
            X
          </a>
        </h1>
      </div>
    </nav>
  )
}