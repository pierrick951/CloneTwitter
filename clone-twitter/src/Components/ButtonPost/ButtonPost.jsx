import { useState } from "react"
import ModalPost from "../ModalPost/ModalPost"
import NewPost from '../../assets/writePost.svg'
import './ButtonPost.css'

export default function ButtonPost() {
    return (
        <>
        <button 
        className="buttonPost">
           
           <p>Post</p>
           <img src={NewPost} alt="" />
        </button>

        </>
    )
}