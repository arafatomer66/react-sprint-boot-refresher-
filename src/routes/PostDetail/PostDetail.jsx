import { useLoaderData, Link } from "react-router-dom";


import classes from "./PostDetail.module.css";
import Modal from "../../components/Modal/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader(data) {
  console.log("Post Detail Loader");
  const response = await fetch("http://localhost:8080/posts/" + data.params.id);
  const responseJson = await response.json();

  console.log(responseJson);

  return responseJson.post;
}
