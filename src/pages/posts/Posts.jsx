import React from "react";
import "./posts.css";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    //main for controlling how the page layout will look
    <main className="post">
      {posts.map((post) => (
        //div for controlling the look of each post
        <div className="post-container" key={post.id}>
          <h2>{post.title} </h2>
          <p>{post.body}</p>
          <p>Reactions: {post.reactions}</p>
          {/* div for controlling the look of tags */}
          <div className="post-tags">
            <p>Tags: </p>
            {post.tags &&
              post.tags.map((item, index) => <span key={index}>{item}</span>)}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Posts;
