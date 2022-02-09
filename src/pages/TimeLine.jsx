import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const TimeLine = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios("https://mock-api-ikbp.herokuapp.com/api/v1/posts");
      setPosts(response.data);
    };
    getData();
  }, []);

  return (
    <main className="py-3">
      <div className="container">
        <div className="row justify-content-center gap-3 px-2 p-sm-0">
          {posts.map((post) => {
            return (
              <div className="col-md-8">
                <PostCard post={post} key={post.id} user={post.user} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TimeLine;
