// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { Outlet } from "react-router-dom";

export default function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModal() {
  //   setModalIsVisible(true);
  // }

  // function hideModal() {
  //   setModalIsVisible(false);
  // }

  // only return one element
  return (
    <>
      <Outlet/>
      {/* <MainHeader onCreatePost={showModal}></MainHeader> */}
      <main>
        <PostsList></PostsList>
      </main>
    </>
  );
}

export async function postLoader() {
  const response = await fetch("http://localhost:8081/posts");
  const responseJson = await response.json();

  console.log(responseJson);

  return responseJson.posts;
}
