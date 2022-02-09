import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="d-flex flex-column align-items-center border border-1 border-danger p-3">
      <div className="d-flex flex-column align-items-center gap-3">
        <img src={process.env.PUBLIC_URL + `/assets/profile/${user.userName}.png`} className="avatar" />
        <p>{user.userName}</p>
      </div>
      <p>{user.userBio}</p>
    </div>
  );
};

export default Profile;
