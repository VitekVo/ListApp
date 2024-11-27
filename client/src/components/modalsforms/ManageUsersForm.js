import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListDetailContext } from '../../providers/ListDetailProvider';
import { UserContext } from '../../providers/UserProvider';
import { Modal } from 'react-bootstrap'

const ManageUsers = () => {
  const { list, addUser, removeUser } = useContext(ListDetailContext);
  const { userList, loggedInUser } = useContext(UserContext);
  const [userID, setUserID] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false)
  const navigate = useNavigate();

  const guests = userList.filter(user => list.guests.includes(user.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    const userIdValid = userList.some((user) => user.id === userID);

    if (list.guests.includes(userID)) {
      setMessage('This user is already on the list'); 
      setShowModal(true);
    } 
    else if (!(list.guests.includes(loggedInUser)) && (loggedInUser !== list.host)) {
      navigate('/list-overview');
    }
    else if (!userIdValid) {
      setMessage('Invalid user ID');
      setShowModal(true);
    }
    else {
      setMessage('User added successfully');
      setShowModal(true);
      addUser(userID);
      setUserID('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <h2>Guest List</h2>
        <ul>
          {guests.map(guest => (
            <li key={guest.id}>
              {guest.name} 
              {(loggedInUser === list.host) &&
              <button className="btn btn-danger" onClick={() => removeUser(guest.id)}>Remove</button>
              }
            </li>
          ))}
        </ul>
      </div>
    {(loggedInUser === list.host) && 
    <div>
        <label htmlFor="invite-user" className="form-label">Enter user's ID to add him to this list</label>
        <input
          type="text"
          id="invite-user"
          name="inviteUser"
          className="form-control"
          placeholder="e.g., u1"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
      <button type="submit" className="btn btn-primary">Add user</button>
    </div>
    }

      {loggedInUser !== list.host &&
      <button type="submit" className="btn btn-danger" onClick={()=>removeUser(loggedInUser)}>Leave list</button>
}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer><button className="btn btn-secondary" onClick={() =>handleClose()}>Ok</button></Modal.Footer>
      </Modal>
    </form>
  );
};

export default ManageUsers;
