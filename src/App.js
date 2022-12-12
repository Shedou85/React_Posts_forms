import React, {useState} from 'react';
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import Buttons from "./components/UI/Buttons/Buttons";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'Angular', body: 'Description'},
    {id: 3, title: 'Vue', body: 'Description'},
  ])
  

  
  return (
    <div className="App">
      <div className='container'>
        <form>
          <input type='text' placeholder='Post title'/>
          <input type='text' placeholder='Post description'/>
          <Buttons />
        </form>
        <PostList posts={posts} title='Posts for React'/>
        
      </div>
      
    </div>
  );
}

export default App;
