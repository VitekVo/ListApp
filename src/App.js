import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ListOverview from './components/list_overview/ListOverview';
import ListDetail from './components/list_detail/ListDetail';
import TopBar from './components/top_bar/TopBar';

import UserProvider from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
        <Router>
        <TopBar/>
          <Routes>
            <Route path="/list-overview" element={<ListOverview />} />
            <Route path="/" element={<ListDetail />} />
          </Routes>
        </Router>
    </UserProvider>
  );
}

export default App;
