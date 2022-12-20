import React from 'react'
import Button from './Button'

const UserItem = (props) => {
  return (
   <div className='user_creation_list_item'>
      <h2><span className='user_title'>User: {props.number}</span></h2>
   <div className='user_label'><span>First Name:</span> {props.userInfo.firstName}</div>
   <div className='user_label'><span>Last Name:</span> {props.userInfo.lastName}</div>
   <div className='user_label'><span>Email:</span> {props.userInfo.email}</div>
   <div className='user_label'><span>Phone:</span> {props.userInfo.phone}</div>
   <div className='user_label'><span>Country:</span> {props.userInfo.country}</div>
   <div className='user_label'><span>City:</span> {props.userInfo.city}</div>  
   <div className='button_item'>
     <Button >
       Edit User
     </Button>
     <Button onClick={() => props.remove(props.userInfo)}>
       Delete User
     </Button>

     </div>
 </div>
  )
}

export default UserItem