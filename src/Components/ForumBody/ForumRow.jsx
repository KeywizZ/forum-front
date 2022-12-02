import React from 'react';

// {
//     threadId: 0,
//     title: "Rules",
//     time: "2022-04-23T18:25:43.511Z",
//     creator: 0,
//     posts: [0, 1, 2],
//   }

const ForumRow = (props) => {
    return (
        <div className='forum-row'>
            <div className='thread-title'>
                <h2>{props.items.title}</h2>
            </div>
            <span>Posts: {props.items.post_count}</span>
            <div className='thread-date'>
                <p>{props.items.time}</p>
            </div>
        </div>
    );
}

export default ForumRow;
