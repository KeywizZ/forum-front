import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Link, Routes } from "react-router-dom";

import "./ForumBody.css";
import ForumRow from "./ForumRow";

/* Hardcoded because these 2 go on top */
const topThreads = [
  {
    threadId: 0,
    title: "Rules",
    time: "2022-04-23T18:25:43.511Z",
    creator: 0,
    posts: [0],
  },
  {
    threadId: 1,
    title: "Help",
    time: "2022-04-23T18:25:43.511Z",
    creator: 0,
    posts: [1],
  },
];


const ForumBody = () => {
  const [threads, setThreads] = useState([])

  useEffect(function () {
    Axios.get("http://localhost:4000/forum/threads").then(
      function (res) {
        res.data.splice(0,2)
        setThreads(res.data);
        setTimeout(() => {
        }, 1000);
      }
    );
  }, []);


  return (
    <div className="forum-body">
      <h3>Admin Threads</h3>
      <div className="top-threads">
        {topThreads.map((thread, i) => {
          return (
            <Link to={`/thread/${topThreads[i].threadId}`}>
              <ForumRow items={topThreads[i]} key={topThreads[i].threadId} />
            </Link>
          );
        })}
      </div>
      <h3>General Threads</h3>
      <div className="user-threads">
        {threads.map((thread, i) => {
          return (
            <Link
              to={{
                pathname: `/thread/${threads[i].threadId}`,
                state: { threadId: threads[i].threadId },
              }}
            >
              <ForumRow
                items={threads[i]}
                key={threads[i].threadId}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ForumBody;
