const Post=({post,removePost,editPost})=>{
    return (
        <div key={post.id}>
            <div onClick={()=>{editPost(post.id)}}>
                {post.massage}
            </div>
            <button onClick={()=>{removePost(post.id)}}>Remove</button>

        </div>
    );
  }
  
  export default Post;