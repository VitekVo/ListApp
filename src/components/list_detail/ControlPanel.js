// import React from 'react';
// import { ListDetailProvider } from './providers/ListDetailProvider';

function ControlPanel() {
    return (
        <div className="control-panel">
            <div>
            <button className="btn btn-primary">Fruits</button>
            <p>Owner: Adam</p>
            </div>
            <button className="btn btn-primary">Add new item</button>
            <button className="btn btn-primary">Invited users: {2}</button>
        </div>
    );
}

export default ControlPanel;
