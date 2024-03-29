import { MdPostAdd, MdMessage } from "react-icons/md";
// import PropTypes from "prop-types";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>

      <p>
        <Link to="/movies" className={classes.button}>
          <MdPostAdd size={12} />
          Movies
        </Link>
      </p>
      <p>
        <Link to="/" className={classes.button}>
          <MdPostAdd size={12} />
          Posts
        </Link>
      </p>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={12} />
          New Post
        </Link>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
  // onCreatePost: PropTypes.func.isRequired
};

export default MainHeader;
