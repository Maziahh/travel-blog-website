// Yuet Lin
"use client"
import { useState } from "react"; // Importing useState hook from React library
import "./commentsection.css"; // Importing CSS file for styling

function App() { 
  const [comment, setComment] = useState(""); 
  const [comments, setComments] = useState([]); 

  const onClickHandler = () => { 
    setComments((comments) => [comment, ...comments]); // Add new comment and then add to beginning of array so latest comment appear first
    setComment(""); // Clear comment input field after submitting
  };
  
  const onChangeHandler = (e) => { 
    setComment(e.target.value); // Updating the comment state with the value entered in the input field
  };
  
  // Calculate the margin top dynamically based on the number of comments
  const calculateMarginTop = () => {
    const numComments = comments.length;
    return Math.max(-200 + (-numComments * 100), 0) + 'px'; // Calculate margin based on the number of comments, ensuring it's at least 0
  };

  return (
    <div className="main-container" style={{marginTop: calculateMarginTop()}}> 
      <div className="comment-flexbox"> 
        <h3 className="comment-text">Comment</h3> {/* Heading for comment section */} 
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box" // Textarea input field for entering comment
        />
        <button onClick={onClickHandler} className="comment-button"> {/* Button to click to submit comment */}
          Submit
        </button>
      </div>
      {comments.map((text, index) => ( // Map through comments array to display comments
        <div key={index} className="comment-container">{text}</div> // Display each comment with its index as the key
      ))}
    </div>
  );
}

export default App;
