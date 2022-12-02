import React from "react";
import Axios from "axios";
import { useRef, useState } from "react";

import "./AddPost.css"

const filter_words = "badword cuss fudge";

const AddPost = () => {
    const [badWordDetected, setBadWordDetected] = useState("hidden");
    const bodyRef = useRef();
    const categoryRef = useRef();

  function sendPost() {
    const windowUrl = window.location.href;
    let threadId = windowUrl.split("/").pop();

    let data = {
      body: bodyRef.current.value,
      imgurl: "",
      category: categoryRef.current.value === "Question" ? 1 : categoryRef.current.value === "Suggestion" ? 2 : 3,
      creator: 0,
    };

    // detect bad words before posting
    for (let word of filter_words.split(" ")) {
        console.log(word)
      if (data.body.toLowerCase().includes(word)) {
        setBadWordDetected("");
        return;
      }
    }

    Axios.post("http://localhost:4000/forum/thread/" + threadId + "/post", data).then(function (res) {
      console.log(res);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }

  return (
    <div className="add-post">
      <div className={badWordDetected}>Bad words!</div>
      <textarea ref={bodyRef}></textarea>
      <select name="category" id="category" ref={categoryRef}>
        <option value="Question" >Question</option>
        <option value="Suggestion" >Suggestion</option>
        <option value="Clarification" >Clarification</option>
      </select>
      <button onClick={sendPost}>Send</button>
    </div>
  );
};

export default AddPost;
