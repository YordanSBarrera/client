import React from "react";
import reactDom from "react-dom";

const Modal = (props) => {
  return reactDom.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
