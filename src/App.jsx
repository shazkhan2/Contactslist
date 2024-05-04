import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import ContactsList from "../components/ContactsList";
import EditContact from "../components/EditContact";
import DeleteContact from "../components/DeleteContact";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/contacts" component={ContactsList} />
          <Route path="/contacts/:id/edit" component={EditContact} />
          <Route path="/contacts/:id/delete" component={DeleteContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
