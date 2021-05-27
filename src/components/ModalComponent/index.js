import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Modal, ModalContent, CloseModal } from './styles'

const ModalComponent = (props) => (
  <Modal open={props.statuModal} >
    <ModalContent  >
      <CloseModal>
        <span className="close" onClick={props.funcOpen()} >&times;</span>
      </CloseModal>
    </ModalContent>
  </Modal>
)

export default ModalComponent;
