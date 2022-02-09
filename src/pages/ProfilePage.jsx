import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respnse = await axios(`https://mock-api-ikbp.herokuapp.com/api/v1/users/${id}`);
      setUser(respnse.data);
      setPosts(respnse.data.posts);
    };
    getData();
  }, []);
  return (
    <div className="mt-3">
      <Container>
        <div className="row">
          <div className="col-sm-3">
            <Profile user={user} />
          </div>
          <div className="col-sm-7 d-flex flex-column gap-3">
            {posts.map((post) => {
              return <PostCard post={post} key={post.id} user={user} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
