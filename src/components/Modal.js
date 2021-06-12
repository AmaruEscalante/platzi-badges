// Dependencies
import { Fragment, React } from "react";
import ReactDOM from "react-dom";

// Assets
import "./styles/Modal.css";

function Modal(props) {
  if (props.isOpen) {
    return ReactDOM.createPortal(
      <div className="Modal">
          <div className="Modal__container">
            <button onClick={props.onClose} className="Modal__close-button btn btn-danger">
                X
            </button>
            {props.children}
          </div>
      </div>,
      document.getElementById("modal"));
  } else {
    return null;
  }
}

export default Modal;
