import React,{useState} from 'react';

const PostForm=({editPost,edit,setEdit,addPost})=>{
    const [editingText,setEditingText]=useState('')
    const [userInput,setUserInput]=useState('')
    const addUpdateForm=()=>{
        editPost(editingText)
        //setEdit('');
        
    }
    const addForm=()=>{
            addPost(userInput)
        setUserInput('')  
    }
    return (
      <form>
          {edit=='Edit!'?
            <div>
              <input
              value={editingText}
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              placeholder="edit massage"
              />
              <button type='button' onClick={addUpdateForm}>edit massage</button>
            </div>
            :
            <div>
              <input
              value={userInput}
              type="text"
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Input massage"
              />
              <button type='button' onClick={addForm}>Send massage</button>
            </div>}
          
      </form>
  );
}

export default PostForm;