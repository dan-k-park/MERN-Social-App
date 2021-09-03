import { useState, useEffect } from "react";
import Post from "../Post";
import Share from "../Share";
import "./styles.css";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(username);
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/61315a5045eb17068fb9c584");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
