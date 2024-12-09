import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ListOverview from "./components/list_overview/ListOverview";
import ListDetail from "./components/list_detail/ListDetail";

import UserProvider from "./providers/UserProvider";
import ListDetailProvider from "./providers/ListDetailProvider";
import ListOverviewProvider from "./providers/ListOverviewProvider";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ListOverviewProvider>
                <ListOverview />
              </ListOverviewProvider>
            }
          />
          <Route
            path="/detail"
            element={
              <ListDetailProvider>
                <ListDetail />
              </ListDetailProvider>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
