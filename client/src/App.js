import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoryPage from './components/CategoryPage'
import CategoryList from './components/CategoryList'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Home from './components/Home'
import Logo from './navy-logo.png'
import VideoChat from './components/VideoChat'
import './index.css'
import { Anchor, Box, Header, Nav, Image } from 'grommet'
import UpcomingEvents from './components/UpcomingEvents'

function App() {
  const logout = () => {
    fetch('/api/logout').catch((err) => console.log(err))
  }
  return (
    <Router>
      <Header background='light-1' pad='medium'>
        <Box
          direction='row'
          responsive='true'
          width='large'
          align='center'
          gap='small'
        >
          <Link to='/home'>
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
          {document.cookie ? (
            <>
              <Anchor
                href='/login'
                color='brand'
                id='login'
                onClick={() => logout()}
              >
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

        <Route path='/upcomingEvents'>
          <UpcomingEvents />
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
