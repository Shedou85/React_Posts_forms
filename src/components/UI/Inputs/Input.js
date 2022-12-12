import React from 'react'
import style from './Input.module.scss'

const Input = () => {
  return (
      <div className={style.inputWrapper}>
         <input className={style.inputTitle} type="text" placeholder='Post Title'/>
         <input className={style.inputPosts} type="text" placeholder='Enter Post'/>
      </div>
   
  )
}

export default Input