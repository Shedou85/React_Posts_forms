import React, {useState, useEffect} from 'react'
import CreatUser from './CreatUser'
import Userlist from './Userlist'
import Header from '../Header/Header'


const Main = () => {
  const [userListOrForm, setUserListOrForm] = useState(false)
  const [userInfo, setUserInfo] = useState([
    {
    id: 1,
    firstName: 'Marius',
    lastName: 'Dainys',
    email: 'marius@gmail.com',
    phone: '+370 12345678',
    country: 'Lithuania',
    city: 'Visaginas',
  },
  {
    id: 2,
    firstName: 'Mailana',
    lastName: 'Dainyte',
    email: 'milana@gmail.com',
    phone: '+370 12345678',
    country: 'Lithuania',
    city: 'Visaginas',
  },
])
  
  useEffect(function() {
    console.log('App Loaded Successfully')
    

  }, [userInfo])
  
  const showCreatForm = () => {
    setUserListOrForm(true)
  }
  const showUserList = () => {
    setUserListOrForm(false)
  }
  const createNewUser = (newPost) => {
    setUserInfo([...userInfo, newPost])
  }
  const deletePost = (newUser) => {
    setUserInfo(userInfo.filter((p) => p.id !== newUser.id))
  }
  
  return (
   <div className='content'>
      <Header showCreatForm={showCreatForm} showUserList={showUserList}/>
      <div>
        <div className='content_title'>
          <h1>{userListOrForm ? 'Creat User Form' : 'User List'}</h1>
        </div>
          <div className='user_creation_form_item'>
            {userListOrForm ? <CreatUser userInfo={userInfo} setUserInfo={setUserInfo} create={createNewUser}/> : <Userlist userInfo={userInfo} remove={deletePost}/>}
          </div>
               
      </div>
   </div>
  )
}

export default Main