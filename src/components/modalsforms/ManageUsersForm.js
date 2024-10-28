import React, { useContext, useState } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';
import { UserContext } from '../../providers/UserProvider';

const ManageUsers = ({ onClose }) => {
  const { list, addUser, removeUser } = useContext(ListDetailContext);
  const { userList } = useContext(UserContext);
  const [userID, setUserID] = useState('');

  const guests = userList.filter(user => list.guests.includes(user.id));


  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userID);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map(guest => (
          <li key={guest.id}>
            {guest.name} <button onClick={() => removeUser(guest.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>

      
        <label className="form-label">Add new user</label>
        <input
          type="text"
          className="form-control"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add user</button>
    </form>
  );
};

export default ManageUsers;
