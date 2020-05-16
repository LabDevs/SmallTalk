import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoriesEventList from './components/CategoriesEventList'
import Register from './components/Register'
import Home from './components/Home'

function App() {
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
          <Link to='/categories'>Topics</Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/categories/:id'>
          <CategoriesContextProvider>
            <CategoriesEventList />
          </CategoriesContextProvider>
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
