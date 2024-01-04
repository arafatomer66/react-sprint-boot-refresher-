// import { useState } from "react";
import classes from "./NewPost.module.css";
// import PropTypes from "prop-types";
import Modal from "../../components/Modal/Modal";
import { Link, Form, redirect } from "react-router-dom";

// import { useState, useEffect } from "react";

function NewPost() {
  // const [currentBody, setCurrentBody] = useState("");
  // const [currentName, setCurrentName] = useState("");

  // function changeBodyHandler(event) {
  //   setCurrentBody(event.target.value);
  // }

  // function changeNameHandler(event) {
  //   setCurrentName(event.target.value);
  // }

  function submitHandler() {
    // event.preventDefault();
    // const postData = {
    //   body: currentBody,
    //   author: currentName,
    // };

    // fetch("http://localhost:8080/posts", {
    //   method: "POST",
    //   body: JSON.stringify(postData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((post) => {
    //   console.log(post);
    // });

    // props.onAddPost(postData);

    // props.onCancel();
  }

  return (
    <Modal>
      <Form method="POST" className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Your Message</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        {/* <p>{currentPost}</p> */}
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required/>
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

NewPost.propTypes = {
  // onCancel: PropTypes.func.isRequired,
  // onAddPost: PropTypes.func.isRequired,
};

export default NewPost;

export async function action(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return redirect('/');
}
