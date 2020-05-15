import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import LoginForm from './Login'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://via.placeholder.com/150"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="placeholder"
          />
        </Navbar.Brand>

        <Nav className="mr.auto">
          <Link to="/home">Dash</Link>
          <Link to="/categories">Topics</Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/:id" children={<RouteList />}  />
        <Route path="/login" children={<LoginForm />}
          />
      </Switch>
    </Router>
  );
}

// will refactor this to add more routes when needed
function RouteList() {
  let { id } = useParams();
  return (
    <div>
      <p>Access to route id {id}</p>
    </div>
  );
}

export default App;
