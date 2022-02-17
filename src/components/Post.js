import React,{useState} from 'react';
const Post=({post,removePost,editPost})=>{
    
    return (
        <div key={post.id}>
            <div>
                {post.massage}
            </div>
            <button onClick={()=>{removePost(post.id)}}>Remove</button>
            <button onClick={()=>{
                editPost(post.id)
                console.log('editPost',post.id)}}>Edit</button>

        </div>
    );
  }
  
  export default Post;