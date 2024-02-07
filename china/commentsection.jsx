"use client"
import { useState } from "react";
import "./commentsection.css";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [comment, ...comments]); // Add the new comment at the beginning of the array
    setComment(""); 
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="main-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
      {comments.map((text, index) => ( // Map through comments array to display comments
        <div key={index} className="comment-container">{text}</div> // Use index as key 
      ))}
    </div>
  );
}

export default App;
