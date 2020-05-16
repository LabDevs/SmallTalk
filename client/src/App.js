import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import LoginForm from './Login'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoriesEventList from './components/CategoriesEventList'
import Register from './components/Register'
import Home from './components/Home'
import AddEvent from './components/AddEvent'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/api/register">
          <RouteList/>
        </Route>
        <Route path="/api/login" >
          <LoginForm />
        </Route>
        
        <PrivateRoute path="/api/getEvents">
          <DashBoard />
        </PrivateRoute>
        
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/addEvent'>
          <AddEvent />
        </Route>
        <Route path='/updateEvent'>
          <UpdateEvent />
        </Route>
        <Route path='/categories/:id'>
          <CategoriesContextProvider>
            <CategoriesEventList />
          </CategoriesContextProvider>
        </Route>
      </Switch>
    </Router>
  )
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


function PrivateRoute({children}){
  return (
    <Route>
      <Redirect
        to={{pathname:"/api/login"}}/>
    </Route>
    )
}

// <Navbar bg='dark' variant='dark'>
//         <Navbar.Brand href='#home'>
//           <img
//             src='https://via.placeholder.com/150'
//             width='30'
//             height='30'
//             className='d-inline-block align-top'
//             alt='placeholder'
//           />
//         </Navbar.Brand>

//         <Nav className='mr.auto'>
//           <Link to='/dash'>Dash</Link>
//           <Link to='/categories'>Topics</Link>
//         </Nav>
//       </Navbar>

export default App

