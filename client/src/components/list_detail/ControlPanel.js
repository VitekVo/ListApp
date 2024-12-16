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
      <h1 className="header-one">
        {theList.name}
        {loggedInUser === theList.host && (
          <button
            className="btn btn-light"
            style={{ padding: "5px", margin: "5px" }}
            onClick={() => openModal("changeName")}
          >
            Edit
          </button>
        )}
      </h1>
      <button className="btn btn-primary" onClick={() => openModal("addItem")}>
        Add new item
      </button>
      <button
        className="btn btn-primary"
        onClick={() => openModal("manageUsers")}
      >
        Invited users
      </button>
      {showModal && <Modal onClose={closeModal} formType={formType} />}
    </div>
  );
}

export default ControlPanel;
