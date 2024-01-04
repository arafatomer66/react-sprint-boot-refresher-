// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import MainHeader from "./components/MainHeader/MainHeader";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  // only return one element
  return (
    <>
      {/* <MainHeader onCreatePost={showModal}></MainHeader> */}
      <main>
        <PostsList modalIsVisible={modalIsVisible} onHideModal={hideModal}></PostsList>
      </main>
    </>
  );
}
