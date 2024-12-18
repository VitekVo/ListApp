import React, { useState, useContext } from "react";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import Modal from "../modalsforms/Modal";

function ControlPanel() {
  const { theList } = useContext(ListDetailContext);
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
      {/* Left-aligned: List Name and Edit Button */}
      <div className="header-one">
        {theList.name}
        {loggedInUser === theList.host && (
          <button
            className="btn btn-light"
            onClick={() => openModal("changeName")}
          >
            Edit
          </button>
        )}
      </div>

      {/* Center-aligned: Add New Item */}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => openModal("addItem")}
        >
          Add new item
        </button>
      </div>

      {/* Right-aligned: Invited Users */}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => openModal("manageUsers")}
        >
          Invited users
        </button>
      </div>

      {/* Modal */}
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default ControlPanel;
