import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import { useState } from 'react'
import { useMutation } from 'react-query'
import useMovie from '../../hooks/useMovie'
// import { addReview } from '../../api/review'
import { useQueryClient } from 'react-query'
// import useAuth from '../../customHooks/useAuth'



export default function Postmodal({ children, modal, onClick }) {
    if (!modal) {
        return <div></div>
    }
  
    
    return ReactDOM.createPortal(
        <>

    
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className="rounded-lg fixed text-white bg-templateBlue top-0 left-0 right-0 bottom-0 m-auto w-full max-w-[384px] h-fit sm:scale-100 scale-[0.85] p-3">
                <button onClick={onClick} className="absolute right-0 top-0 m-2"><i className="fa-solid fa-xmark text-red-600"></i></button>
                {
                    children
                }   
            </div>
        </>,
        document.getElementById('modal')
    )
    
  
}
