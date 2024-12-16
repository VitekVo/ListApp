import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListDetailContext } from "../../providers/ListDetailProvider";
import { UserContext } from "../../providers/UserProvider";
import { Modal } from "react-bootstrap";

const ManageUsers = () => {
  const { theList, manageUsers } = useContext(ListDetailContext);
  const { userList, loggedInUser } = useContext(UserContext);
  const [userID, setUserID] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const navigate = useNavigate();

  const guests = userList.filter((user) => theList.guests.includes(user.id));

  const handleSubmit = (userID, action) => {
    setShowModal(true);
    manageUsers(userID, action);
  };

  const handleAdd = () => {
    setMessage("User Added successfully");
    const action = "add";
    handleSubmit(userID, action);
    setUserID("");
  };

  const handleRemove = (userId) => {
    setMessage("User removed successfully");
    const action = "remove";
    handleSubmit(userId, action);
    setUserID("");
  };

  return (
    <form>
      <div>
        <h2>Guest List</h2>
        <ul>
          {guests.map((guest) => (
            <li key={guest.id}>
              {guest.name}
              {loggedInUser === theList.host && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemove(guest.id)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {loggedInUser === theList.host && (
        <div>
          <label htmlFor="invite-user" className="form-label">
            Enter user's ID to add him to this list
          </label>
          <input
            type="text"
            id="invite-user"
            name="inviteUser"
            className="form-control"
            placeholder="e.g., 123"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleAdd()}
          >
            Add user
          </button>
        </div>
      )}

      {loggedInUser !== theList.host && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleRemove(loggedInUser)}
        >
          Leave list
        </button>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => handleClose()}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default ManageUsers;
