import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

import "./ThreadPage.css";
import Post from "../Post/Post";
import AddPost from "../../Posting/AddPost";

const ThreadPage = (props) => {
  const [thread, setThread] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState(false);

  useEffect(function () {
    const windowUrl = window.location.href;
    let threadId = windowUrl.split("/").pop();
    Axios.get("http://localhost:4000/forum/thread/" + threadId + "/posts").then(
      function (res) {
        setThread(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="forum-body">
        <p>loading</p>
      </div>
    );
  }

  const openTextBox = () => {
    if (comment) {
      setComment(false);
    } else {
      setComment(true);
    }
  };

  return (
    <div className="forum-body">
      <div clasName="thread-title">
        <h3>{thread.threadTitle}</h3>
      </div>
      <div className="post-container">
        {thread.posts.length !== 0 ? (
          thread.posts.map((post, i) => <Post items={post} key={post.postId} />)
        ) : (
          <p>No posts yet</p>
        )}
      </div>
      <div className="new-post">
        <button onClick={openTextBox}>Add post</button>
        {comment && <AddPost />}
      </div>
    </div>
  );
};

export default ThreadPage;
