// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

import PropTypes from "prop-types";

import classes from "./PostsList.module.css";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

function PostsList(props) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseJson = await response.json();
      // console.log(responseJson)
      setPosts(responseJson.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, [posts]);

  function addPostHandler(postData) {
    // setPosts((previousPosts) => [postData, ...previousPosts]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((post) => {
      console.log(post);
    });
    setPosts((previousPosts) => [postData, ...previousPosts]);
  }

  let modalContent = (
    <Modal onClose={props.onHideModal}>
      <NewPost
        onCancel={props.onHideModal}
        onAddPost={addPostHandler}
      ></NewPost>
    </Modal>
  );

  return (
    <>
      {props.modalIsVisible && modalContent}

      {!!posts.length && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.id} />
          ))}
        </ul>
      )}

      {!isFetching && !posts.length && (
        <h2 style={{ textAlign: "center", color: "white" }}> No Posts! </h2>
      )}

      {isFetching && (
        <h2 style={{ textAlign: "center", color: "white" }}> Loading Posts... </h2>
      )}
    </>
  );
}

PostsList.propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default PostsList;
