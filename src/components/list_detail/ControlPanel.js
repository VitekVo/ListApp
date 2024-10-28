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
<<<<<<< HEAD
        <div className="control-panel">
            <div>
            <button className="btn btn-primary">Fruits</button>
            <p>Owner: Adam</p>
            </div>
            <button className="btn btn-primary">Add new item</button>
            <button className="btn btn-primary">Invited users: {2}</button>
        </div>
=======
      <div className="control-panel">
        <button className="btn btn-primary" onClick={() =>openModal("changeName")}>{list.name}</button>
        <button className="btn btn-primary">Add new item</button>
        <button className="btn btn-primary" onClick={() =>openModal("manageUsers")}>Invited users</button>
        {showModal && <Modal onClose={closeModal} formType={formType} />}
      </div>
>>>>>>> bf5e7633099a368d8d2c39983391a5faf4beff04
    );
}

export default ControlPanel;
