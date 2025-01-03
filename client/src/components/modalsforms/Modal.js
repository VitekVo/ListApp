import React from "react";
import ChangeName from "./ChangeNameForm";
import AddItem from "./AddItemForm";
import ManageUsers from "./ManageUsersForm";
import CreateList from "./CreateListForm";
import DeletList from "./DeleteListForm";

const Modal = ({ onClose, formType }) => {
  const renderForm = () => {
    switch (formType) {
      case "changeName":
        return <ChangeName onClose={onClose} />;
      case "addItem":
        return <AddItem onClose={onClose} />;
      case "manageUsers":
        return <ManageUsers onClose={onClose} />;
      case "createList":
        return <CreateList onClose={onClose} />;
      case "deleteList":
        return <DeletList onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="modal modal-overlay show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content text-black">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body modal-buttons">{renderForm()}</div>
        </div>
      </div>
    </div>
  );

};

export default Modal;
