import React from 'react'
// import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoryPage from './components/CategoryPage'
import CategoryList from './components/CategoryList'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Home from './components/Home'
import Logo from './logo.png'
import UpcomingEvents from './components/UpcomingEvents'
import VideoChat from './components/VideoChat'
import './index.css'
import { Anchor, Box, Header, Nav, Image } from 'grommet'

function App () {
  const logout = () => {
    fetch('/api/logout').catch(err => console.log(err))
  }
  return (
    <Router>
      {/* <Navbar bg='light' variant='light'>
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
      </Navbar> */}

      <Header background='light-1' pad='medium'>
        <Box
          direction='row'
          responsive='true'
          width='large'
          align='center'
          gap='small'
        >
          <Link to='/'>
            <Image src={Logo} fit='contain' className='logo' />
          </Link>
          {document.cookie ? (
            <>
              <Anchor className='navLink' href='/dash'>
                Dashboard
              </Anchor>
              <Anchor className='navLink' href='/categories'>
                Categories
              </Anchor>
              <Anchor className='navLink' href='/upcomingEvents'>
                Upcoming Events
              </Anchor>
            </>
          ) : (
            <></>
          )}
        </Box>
        <Nav direction='row'>
          {document.cookies ? (
            <>
              <Anchor className='navLink' href='/logout'>
                Logout
              </Anchor>
            </>
          ) : (
            <>
              <Anchor className='navLink' href='/login'>
                Login
              </Anchor>
              <Anchor className='navLink' href='/register'>
                Register
              </Anchor>
            </>
          )}
        </Nav>
      </Header>

      <Switch>
        <Route path='/home'>
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

        <Route path='/videoChat'>
          <VideoChat />
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

export default App
