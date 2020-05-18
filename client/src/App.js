import React, { useState, useEffect, useContext } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoriesEventList from './components/CategoriesEventList'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import UpdateEvent from './components/UpdateEvent'
import DashBoard from './components/DashBoard'

function App () {
  const logout = () => {
    fetch('/api/logout')
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            src='https://via.placeholder.com/150'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='placeholder'
          />
        </Navbar.Brand>

        <Navbar.Collapse className='justify-content-end'>
          <Nav className='mr.auto'>
            {document.cookie ? (
              <>
                <Nav className='mr.auto'>
                  <Link to='/dash'>Dash</Link>
                  <Link to='/categories'>Categories</Link>
                  <Button onClick={logout} href='/login'>Logout</Button>
                </Nav>
              </>
            ) : (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        
        <Route path='/dash'>
          <DashBoard />
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


export default App
