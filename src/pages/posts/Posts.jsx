import React from "react";
import "./posts.css";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    //<main> for controlling how the page layout will look
    <main className="post">
      {posts.map((post) => (
        //<div> for controlling the look of each post
        <div className="post-container" key={post.id}>
          {/*<h2> render only post title */}
          <h2>{post.title} </h2>
          {/* <p> render only post body */}
          <p>{post.body}</p>
          {/* <p> render post reactions */}
          <p>Reactions: {post.reactions}</p>
          {/* <div> for controlling the look of tags */}
          <div className="post-tags">
            {/* <p> for specifying that the values in front of it are tags  */}
            <p>Tags: </p>
            {/* <span> for rendering tags values*/}
            {post.tags &&
              post.tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Posts;
