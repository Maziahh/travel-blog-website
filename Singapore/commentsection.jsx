"use client"
import { useState } from "react"; // Importing useState hook from React library
import "./commentsection.css"; // Importing CSS file for styling

function App() { 
  const [comment, setComment] = useState(""); // Initializing state for comment input field and its setter function
  const [comments, setComments] = useState([]); // Initializing state for array of comments and its setter function

  const onClickHandler = () => { 
    setComments((comments) => [comment, ...comments]); // Add new comment and then it's added to beginning of array so latest comment appear first
    setComment(""); // Clearing the comment input field after submitting
  };
  
  const onChangeHandler = (e) => { 
    setComment(e.target.value); // Updating the comment state with the value entered in the input field
  };
  
  // Calculate the margin top dynamically based on the number of comments
  const calculateMarginTop = () => {
    const numComments = comments.length;
    // Calculate the margin based on the number of comments, ensuring it's at least 0
    return Math.max(-200 + (-numComments * 100), 0) + 'px';
  };

  return (
    <div className="main-container" style={{marginTop: calculateMarginTop()}}> {/* Main container div */}
      <div className="comment-flexbox"> {/* Div for comment input section */}
        <h3 className="comment-text">Comment</h3> {/* Heading for comment section */} 
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box" // Textarea input field for entering comment
        />
        <button onClick={onClickHandler} className="comment-button"> {/* Button to submit comment */}
          Submit
        </button>
      </div>
      {comments.map((text, index) => ( // Mapping through comments array to display comments
        <div key={index} className="comment-container">{text}</div> // Displaying each comment with index as key
      ))}
    </div>
  );
}

export default App;
