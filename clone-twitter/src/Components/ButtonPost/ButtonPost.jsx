import { useState } from "react"
import NewPost from '../../assets/writePost.svg'
import './ButtonPost.css'

export default function ButtonPost() {
    return (
        <>
        <button className="buttonPost">
           <p>Post</p>
           <img src={NewPost} alt="" />
        </button>
        </>
    )
}