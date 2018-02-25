import React from 'react';
import Modal from 'react-modal';

export default (props) => (
    <Modal
        isOpen={props.isModalOpen}
        contentLabel="Remove expense confirmation"
        closeTimeoutMS={300}
        className="modal"
    >
        <div>
            <p>Remove expense?</p>
            <button
                value="yes"
                className="button button--margin"
                onClick={props.handleConfirmation}
            >
                Yes
            </button>
            <button
                value="no"
                className="button button--margin"
                onClick={props.handleConfirmation}
            >
                No
            </button>
        </div>
    </Modal>
);
