import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoriesEventList from './components/CategoriesEventList'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AddEvent from './components/AddEvent'
import UpdateEvent from './components/UpdateEvent'
import DashBoard from './components/DashBoard'

function App () {
  return (
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            src='https://via.placeholder.com/150'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='placeholder'
          />
        </Navbar.Brand>

        <Nav className='mr.auto'>
          <Link to='/dash'>Dash</Link>
          <Link to='/categories'>Categories</Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>

          <Login />
        </Route>

        <Route path='/dash'>
          <DashBoard />
        </Route>

        <Route path='/updateEvent'>
          <UpdateEvent />
        </Route>
        <Route path='/categories'>
          <CategoriesContextProvider>
            <CategoriesEventList />
          </CategoriesContextProvider>
        </Route>
      </Switch>
    </Router>
  )
}

// <Route path='/addEvent'>
//   <AddEvent />
// </Route>
export default App
