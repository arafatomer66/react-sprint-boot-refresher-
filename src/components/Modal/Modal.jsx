import classes from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
        <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
