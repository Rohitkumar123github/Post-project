import "./App.css";
import { useState, useEffect } from "react";
import Posts from "./pages/posts/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  const getApiData = async () => {
    const response = await fetch("https://dummyjson.com/posts").then(
      (response) => response.json()
    );

    setPosts(response.posts);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <Posts posts={posts} />
    </>
  );
}

export default App;
