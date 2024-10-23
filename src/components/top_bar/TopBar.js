import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopBar () {
  const navigate = useNavigate();
  return (
    <div className="top-bar d-flex justify-content-between">
      <button className="btn btn-primary" onClick={()=>navigate('/list-overview')}>MrLister</button>
      {/* <button className="btn btn-primary">Create New List</button> */}
      <div className="dropdown">
        <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Users</button>
        <ul className="dropdown-menu">
          <li><p className="dropdown-item">User 1</p></li>
          <li><p className="dropdown-item">User 2</p></li>
          <li><p className="dropdown-item">User 3</p></li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
