import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import {hideMessage} from "../../store/services/errorMessageSlice";
import {useDispatch} from "react-redux";
import doge from '../../assets/doge.png';

export const ErrorMessage = () => {
  const dispatch = useDispatch();
  const showMessage = useSelector(state => state.modalError);

  const handleClose = () => dispatch(hideMessage());

  return (
    <>
      <Modal
        show={showMessage.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{showMessage.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={"text-center"}>
            <div>
              <img src={doge} alt='ratas' width='140' />
            </div>
            <div>
              {showMessage.msg}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}