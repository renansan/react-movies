import React from 'react';
import { withRouter } from 'react-router';

const Modal = (props) => {

  const closeModal = (ev) => {
    const { history } = props;
    debugger;
    history.back();
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-container">
        {props.children}
      </div>
    </div>
  )
}

export default withRouter(Modal);
