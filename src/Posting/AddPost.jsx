import React from "react";
import Axios from "axios";
import { useRef, useEffect } from "react";

const AddPost = () => {
  const bodyRef = useRef();
  const categoryRef = useRef();

  function sendPost() {
    const windowUrl = window.location.href;
    let threadId = windowUrl.split("/").pop();
    Axios.post("http://localhost:4000/forum/thread/" + threadId + "/post", {
      body: bodyRef.current.value,
      imgurl: null,
      category: categoryRef,
      creator: 0,
    }).then(function (res) {
      setTimeout(() => {}, 1000);
    });
  }

  return (
    <div className="">
      <textarea ref={bodyRef}></textarea>
      <select name="category" id="category" ref={categoryRef}>
        <option value="Question">Question</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Clarification">Clarification</option>
      </select>
      <button onClick={sendPost}>Send</button>
    </div>
  );
};

export default AddPost;
