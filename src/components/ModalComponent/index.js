import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Modal, ModalContent, CloseModal, BodyModal } from './styles'

const ModalComponent = (props) => (
  <Modal open={props.statuModal} >
    <ModalContent  >
      <CloseModal>
        <span className="close" onClick={props.funcOpen()} >&times;</span>
      </CloseModal>
      <BodyModal>
        {props.children}
      </BodyModal>
    </ModalContent>
  </Modal>
)

export default ModalComponent;
