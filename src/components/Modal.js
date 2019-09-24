import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  // return ReactDOM.createPortal(
  //   <div onClick={props.onDismiss} className="ui dimmer modals visible active">
  //     <div
  //       onClick={e => e.stopPropagation()}
  //       className="ui standard modal visible active"
  //     >
  //       <div className="header">{props.title}</div>
  //       <div className="content">{props.content}</div>
  //       <div className="actions">{props.action}</div>
  //     </div>
  //   </div>,
  //   document.querySelector("#modal")
  // );

  return ReactDOM.createPortal(
    <div className="modal modal-danger fade" id="modal-danger">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">Danger Modal</h4>
          </div>
          <div className="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline pull-left"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-outline">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
