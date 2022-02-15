import React,{useState} from 'react';
import './App.css'
import Post from './components/Post';
import PostForm from './components/PostForm';

function App() {
  const [posts,setPosts]=useState([])

  const addPost=(userInput)=>{
    if(userInput){
      const newItem={
        id: Math.random().toString(36).substr(2, 9),
        massage:userInput
      }
      
    setPosts([...posts,newItem])
    }
  }
  const removePost=()=>{
  }
  const editPost=()=>{
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <PostForm
      addPost={addPost}/>
      {posts.map((post)=>{
        return(
          <Post
          post={post}
          key={post.id}
          removePost={removePost}
          editPost={editPost}/>
        )
      })}
    </div>
  );
}

export default App;
