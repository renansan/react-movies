import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = (props) => {
  return (
    <ModalBase>
      <ModalOverlay onClick={props.closeModal}></ModalOverlay>
      <ModalContainer>
        <CloseButton type="button" onClick={props.closeModal}>x</CloseButton>
        {props.children}
      </ModalContainer>
    </ModalBase>
  )
}

const ModalBase = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, .5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
`
const ModalContainer = styled.div`
  background-color: #fff;
  display: block;
  height: 100%;
  max-height: 90vh;
  max-width: 90vh;
  overflow: auto;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 300;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #000;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
