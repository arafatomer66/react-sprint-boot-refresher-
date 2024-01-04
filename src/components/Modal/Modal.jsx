import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('/');
    // navigate('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
        <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  // onClose: PropTypes.func.isRequired,
};
