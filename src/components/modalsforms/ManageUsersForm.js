import React, { useContext } from 'react';
import { ListDetailContext } from '../../providers/ListDetailProvider';
import { UserContext } from '../../providers/UserProvider';

const ManageUsers = ({ onClose }) => {
  const { list } = useContext(ListDetailContext);
  const { userList } = useContext(UserContext);
  console.log(list);

  const userLookup = userList.reduce((lookup, user) => {
    lookup[user.id] = user.name;
    return lookup;
  }, {});

  const userNames = list.guests.map(id => userLookup[id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div>
        <ul>
      {userNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
        </div>
        <label className="form-label">Add new user</label>
        <input
          type="text"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add user</button>
    </form>
  );
};

export default ManageUsers;
