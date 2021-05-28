import styled from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.open? 'block;' : 'none;'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);
`
export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`

export const CloseModal = styled.section`

  text-align: right;

  margin-bottom: 1px solid rgb(204, 204, 204);

  .close {
    cursor: pointer;
    font-size: 34px;
    font-weight: 600;
  }
`
export const BodyModal = styled.section`

`
