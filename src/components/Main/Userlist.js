import React from 'react'
import UserItem from './UserItem'


const Userlist = ({userInfo, remove}) => {
  return (
   <div className='user_creation_list'>
    
   
    {userInfo.map((userInfo,index) => (
      <UserItem key={userInfo.id} userInfo={userInfo} number={index +1} remove={remove}/>
    ))
    }

   
    
 </div>
  )
}

export default Userlist