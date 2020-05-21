import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoryPage from './components/CategoryPage'
import CategoryList from './components/CategoryList'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import './index.css'
import UpcomingEvents from './components/UpcomingEvents'

function App() {
  const logout = () => {
    fetch('/api/logout').catch(err => console.log(err))
  }
  return (
    <Router>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='/'>
          <img
            src='https://via.placeholder.com/150'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='placeholder'
          />
        </Navbar.Brand>

        {document.cookie ? (
          <>
            <Nav className='mr.auto'>
              <Link to='/dash'>Dash</Link>
              <Link to='/categories'>Categories</Link>
            </Nav>
            <Navbar.Collapse className='justify-content-end'>
              <Nav className='mr.auto'>
                <Button onClick={logout} href='/login'>
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
            <>
              <Navbar.Collapse className='justify-content-end'>
                <Nav className='mr.auto'>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
      </Navbar>

      {document.cookie ? <UpcomingEvents /> : <></>}

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

        <Route path='/categories/:categoryId'>
          <CategoryPage />
        </Route>

        <Route path='/categories'>
          <CategoriesContextProvider>
            <CategoryList />
          </CategoriesContextProvider>
        </Route>
      </Switch>
    </Router>
  )
}
// Is there a particular reason why you're getting rid of this? If you're going to build the landing page, it might be useful to have it there for testing :)
// <Route exact path='/'>
//           <Home />
//         </Route>

export default App
