import React from 'react';
import ListDetailProvider from '../../providers/ListDetailProvider';

import ControlPanel from './ControlPanel';
import ItemOverview from './ItemOverview';

function ListDetail() {
    return (
        <div className="list-detail">
        <ListDetailProvider >
            <ControlPanel/>
            <ItemOverview/>
        </ListDetailProvider>
        </div>
    );
}

export default ListDetail;
