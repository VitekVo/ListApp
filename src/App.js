import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ListOverview from './components/list_overview/ListOverview';
import ListDetail from './components/list_detail/ListDetail';
import TopBar from './components/top_bar/TopBar';

import UserProvider from './providers/UserProvider';
import ListDetailProvider from './providers/ListDetailProvider';

function App() {
  return (
    <UserProvider>
        <Router>
        <TopBar/>
          <Routes>
            <Route path="/list-overview" element={<ListOverview />} />
            <Route path="/" element={
              <ListDetailProvider>
                <ListDetail/>
              </ListDetailProvider>
             }/>
          </Routes>
        </Router>
    </UserProvider>
  );
}

export default App;
