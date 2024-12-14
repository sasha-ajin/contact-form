import React from "react";
import {Modal, Button, CloseButton} from 'react-bootstrap';

type SuccessModalProps = {
    text: string;
    isShown: boolean;
    onHide: () => void;
}

export function SuccessModal({text, isShown, onHide}: SuccessModalProps) {
    return (
        <Modal show={isShown} onHide={onHide} contentClassName="text-center" centered>
            <Modal.Header className="border-0 flex-wrap position-relative">
                <Modal.Title className="flex-grow-1 px-10 fs-2x fw-bold text-danger">
                    <i className="far fa-info-circle fs-1 text-info"/>
                </Modal.Title>
                <CloseButton onClick={onHide}/>
            </Modal.Header>
            <Modal.Body className="p-md-10 pt-md-0">
                <p className="fs-5">{text}</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="success" onClick={onHide}>
                    Okay
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

