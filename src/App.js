import React, { useState, useEffect } from 'react';
import axios from "axios";
import Posts from "./components/Posts"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPages, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      setPosts(res.data);
      setLoading(false)
    }

    fetchPosts();
  }, []);

  console.log(posts)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Simple Pagination with react hooks</h1>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
