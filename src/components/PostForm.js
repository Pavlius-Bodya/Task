import React,{useState} from 'react';

const PostForm=({addPost})=>{
    const [userInput,setUserInput]=useState('')
  return (
      <form>
          <input
          value={userInput}
          type="text"
          onChange={setUserInput}
          placeholder="Input massage"
          />
          <button onClick={addPost(userInput)}>Send massage</button>
      </form>
  );
}

export default PostForm;