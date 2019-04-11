import React from 'react';
import { withRouter } from 'react-router';

const Modal = (props) => {

  const closeModal = (ev) => {
    const { history } = props;
    ev.stopPropagation();
    ev.nativeEvent.stopImmediatePropagation();
    history.push('/');
  }

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <button type="button" className="modal-close-button" onClick={closeModal}>x</button>
        {props.children}
      </div>
    </div>
  )
}

export default withRouter(Modal);
