import React from "react";

import placeholderImage from "./placeholder-img.png";
import "./Post.css";

const Post = ({ items }) => {
  let profilePicture = items.creator.imgurl;

  if (profilePicture === "") {
    profilePicture = placeholderImage;
  }

  return (
    <div className="post">
      <div className="user">
        <span>{items.creator.username}</span>
        <img src={profilePicture} alt={`${items.creator.username}`} />
      </div>
      <p>{items.body}</p>
    </div>
  );
};

export default Post;
