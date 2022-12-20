import React from 'react'

const Header = ({showCreatForm, showUserList}) => {
  return (
    <div className='container'>
      <div className='content_item'>
        <div className='content_header'>
          <div className='create_user' onClick={showCreatForm}>Creat User</div>
          <div className='user_list' onClick={showUserList}> User List</div>
        </div>
      </div>  
    </div>
  )
}

export default Header