import React from 'react'

//
const LoginForm = (props) => {
  
  const checkField = (e) => {
    e.preventDefault();
    if (props.login.username === '' || props.login.password === '' ) {
      alert('Please fill in all fields');
    } 
  };
  
  return (
   <div className='loginForm'>
        <div className='loginForm__item'>
          <h1>Login Form</h1>
        <form onSubmit={checkField}>
          <div className='input__username'>
              <input type="text" 
              className='loginForm__item_username' 
              placeholder='Username' 
              name='username'
              value={props.login.username}
              onChange={e => props.setLogin({ ...props.login, username: e.target.value })}
              />
          </div>
          <div className='input__password'>
              <input type="password" 
              className='loginForm__item_password' 
              placeholder='Password' 
              name='password'
              value={props.login.password}
              onChange={e => props.setLogin({ ...props.login, password: e.target.value })}
              />
          </div>
         
          <div className='input__submit'>
            <button className='loginForm__button' onClick={props.handleClick}>Log In</button>
          </div>
        </form>
        </div>
        </div>
  )
}

export default LoginForm