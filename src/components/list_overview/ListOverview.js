import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

function ListOverview() {
    const { setActiveList } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = (listId) => {
        setActiveList(listId);
        navigate('/');
      };
    return (
        <div>
    <h1>This is the List Overview</h1>
    <h2>Navigate to a list:</h2>
    <button onClick={() => handleClick("l1")}>List 1</button>
    <button onClick={() => handleClick("l2")}>List 2</button>
    </div>
    );
}

export default ListOverview;
