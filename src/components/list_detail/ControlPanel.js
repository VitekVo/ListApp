import React, { useState, useContext } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';
import { UserContext} from '../../providers/UserProvider';
import Modal from '../modalsforms/Modal';

function ControlPanel() {
    const { list } = useContext(ListDetailContext);
    const { loggedInUser } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState(null);
    
    const openModal = (type) => {
      setFormType(type); 
      setShowModal(true);
    };
  
    const closeModal = () => setShowModal(false);

    return (
      <div className="control-panel">
        <h1>{list.name}
          {loggedInUser === list.host &&
        <button className="btn btn-primary" onClick={() =>openModal("changeName")} >Edit</button>
          }
        </h1>
        <button className="btn btn-primary" onClick={() =>openModal("addItem")} >Add new item</button>
        <button className="btn btn-primary" onClick={() =>openModal("manageUsers")} >Invited users</button>
        {showModal && <Modal onClose={closeModal} formType={formType} />}
      </div>
    );
}

export default ControlPanel;
