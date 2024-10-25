import React, { useState, useContext } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';
import Modal from '../modalsforms/Modal';

function ControlPanel() {
    const { list } = useContext(ListDetailContext);
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState(null);
    
    const openModal = (type) => {
      setFormType(type); 
      setShowModal(true);
    };
  
    const closeModal = () => setShowModal(false);

    return (
      <div className="control-panel">
        <button className="btn btn-primary" onClick={() =>openModal("changeName")}>{list.name}</button>
        <button className="btn btn-primary">Add new item</button>
        <button className="btn btn-primary" onClick={() =>openModal("manageUsers")}>Invited users</button>
        {showModal && <Modal onClose={closeModal} formType={formType} />}
      </div>
    );
}

export default ControlPanel;
