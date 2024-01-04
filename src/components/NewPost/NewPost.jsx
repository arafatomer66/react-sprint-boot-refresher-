import { useState } from "react";
import classes from "./NewPost.module.css";
import PropTypes from "prop-types";

// import { useState, useEffect } from "react";

function NewPost(props) {
  const [currentBody, setCurrentBody] = useState("");
  const [currentName, setCurrentName] = useState("");


  function changeBodyHandler(event) {
    setCurrentBody(event.target.value);
  }

  function changeNameHandler(event) {
    setCurrentName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: currentBody,
      author: currentName
    };

    props.onAddPost(postData);

    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Your Message</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      {/* <p>{currentPost}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={classes.actions}>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired,
};

export default NewPost;
