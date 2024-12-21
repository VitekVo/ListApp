import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
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
            path="/detail/:id"
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
