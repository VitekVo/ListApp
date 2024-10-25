import React from 'react';
import ChangeName from './ChangeNameForm';
import ManageUsers from './ManageUsersForm';

const Modal = ({ onClose, formType }) => {
  const renderForm = () => {
    switch (formType) {
      case "changeName":
        return <ChangeName onClose={onClose} />;
      case "manageUsers":
        return <ManageUsers onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content text-black">
          <div className="modal-header">
            <h5 className="modal-title">Modal</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );    
};

export default Modal;
