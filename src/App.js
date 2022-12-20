
import React, { useState } from 'react';
import LoginForm from './components/Login/LoginForm';
import Main from './components/Main/Main';

function App() {
  
  let password = 'marius';

  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [showLoginPage, setShowLoginPage] = useState(true);

  const loginCheck = () => {
      if (login.password === password) {
        setShowLoginPage(false);
      } else {
        alert('wrong password');
        setShowLoginPage(true); 
      }
  }
  return (
    <div className="App">
      <div className='container'>
        {showLoginPage ? <LoginForm login={login} setLogin={setLogin}  handleClick={loginCheck}/> : <Main /> }
       
      </div>
    </div>
  );
}

export default App;
