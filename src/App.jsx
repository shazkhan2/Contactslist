import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import EditContact from "./components/EditContact";
import DeleteContact from "./components/DeleteContact";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/contacts/:contactId" component={ContactDetails} />
          <Route path="/contacts/:contactId/edit" component={EditContact} />
          <Route path="/contacts/:contactId/delete" component={DeleteContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
