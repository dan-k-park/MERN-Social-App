import Post from "../Post";
import Share from "../Share";
import "./styles.css";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
