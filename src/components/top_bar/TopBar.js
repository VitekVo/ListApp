import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

function TopBar () {
  const navigate = useNavigate();
  const { userList, loggedInUser, setLoggedInUser} = useContext(UserContext);
  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-primary" onClick={()=>navigate('/list-overview')}>MrLister</button>
      <div className="dropdown">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{userList.find(user => user.id === loggedInUser)?.name}</button>
        <ul className="dropdown-menu">
        {userList.map((user) => (
          <li key={user.id}>
            <button
              className="dropdown-item"
              onClick={() => setLoggedInUser(user.id)} 
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TopBar;
