import React,{useState} from 'react';
import './App.css'
import Post from './components/Post';
import PostForm from './components/PostForm';

function App() {
  const [posts,setPosts]=useState([])
  const [edit,setEdit]=useState([])

  const addPost=(userInput)=>{
    if(userInput){
      const newItem={
        id:Date.now(),
        massage:userInput
      }
      
    setPosts([...posts,newItem])
    }
  }
  console.log(posts)
  const removePost=(id)=>{
    setPosts([...posts.filter((post) => post.id !== id)])
  }
  const editPost=(id,editingText)=>{
    const updatedPost = [...posts].map((post) => {
      if (post.id === id) {
        post.massage = editingText;
        
      }
      return post;
    });
    setPosts(updatedPost);
    setEdit('Edit!');
  }
  return (
    <div className="App">
      <h1>Send your massage</h1>
      <PostForm
      addPost={addPost}  
      editPost={editPost}    
      edit={edit}/>
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
