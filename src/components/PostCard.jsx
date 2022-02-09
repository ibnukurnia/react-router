import { Link } from "react-router-dom";

const PostCard = ({ post, user }) => {
  return (
    <div className="p-2  border border-1 border-danger">
      <div className="d-flex gap-3 mb-3 ">
        <img src={process.env.PUBLIC_URL + `/assets/profile/${user.userName}.png`} className="avatar" />
        <div className="d-flex flex-column">
          <Link to={`/profile/${user.id}`}>{user.userName}</Link>
          <span>on {post.createdAt}</span>
        </div>
      </div>
      <h4>{post.post}</h4>
    </div>
  );
};

export default PostCard;
