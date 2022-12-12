import React from 'react'

const Postitem = (props) => {
  return (
    <div>
      <div className='post'>
          <div className='post__content'>
            <strong className='title'>{props.post.id}. {props.post.title}</strong>
            <div>
              <h3>{props.post.body} </h3>
            </div>
          </div>
          <div className='post__btns'>
            <button>Remove</button>
          </div>

        </div>
    </div>
  )
}

export default Postitem