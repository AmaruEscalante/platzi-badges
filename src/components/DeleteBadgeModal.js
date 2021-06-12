import React from 'react';
import Modal from './Modal';

export default function DeleteBadgeModal(props){
    return <Modal onClose={props.onClose} isOpen={props.isOpen}>
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>
        <div>
            <button onClick={props.deleteBadge} className="btn btn-danger me-4">Yes</button>
            <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
        </div>
    </Modal>
}

