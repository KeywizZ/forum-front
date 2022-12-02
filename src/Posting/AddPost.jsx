import React from 'react';
import Axios from "axios";
import { useRef, useEffect } from "react";

const AddPost = () => {
    const body = useRef();

    useEffect(function () {
        const windowUrl = window.location.href;
        let threadId = windowUrl.split("/").pop();
        Axios.post("http://localhost:4000/forum/thread/" + threadId + "/post").then(
          function (res) {
            setTimeout(() => {
            }, 1000);
          }
        );
      }, []);

    return (
        <div>
            <textarea ref={body}></textarea>
        </div>
    );
}

export default AddPost;
