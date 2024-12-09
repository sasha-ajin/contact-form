import React from "react";
import {Modal, Button, CloseButton} from 'react-bootstrap';

type ContactModalProps = {
    isShown: boolean;
    onClose: () => void;
}

export function ContactModal({isShown, onClose}: ContactModalProps) {
    return (
        <Modal show={isShown} onHide={onClose} contentClassName="text-center" centered>
            <Modal.Header className="border-0 flex-wrap position-relative">
                <Modal.Title className="flex-grow-1 px-10 fs-2x fw-bold text-danger">
                    <i className="far fa-info-circle fs-1 text-info"/>
                </Modal.Title>
                <CloseButton onClick={onClose}/>
            </Modal.Header>
            <Modal.Body className="p-md-10 pt-md-0">
                <p className="fs-5">Your contacts were successfully sent</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="success">
                    Okay
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

