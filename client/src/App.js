import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <Tasks />
          </Route>
          <Route exact path={"/tasks"}>
            <TaskForm />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
