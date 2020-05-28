import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoriesContextProvider from './contexts/CategoriesContextProvider'
import CategoryPage from './components/CategoryPage'
import CategoryList from './components/CategoryList'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import VideoChat from './components/VideoChat'

import Home from './components/Home'
import Logo from './navy-logo.png'
import './index.css'
import { Anchor, Box, Header, Nav, Image } from 'grommet'
import UpcomingEvents from './components/UpcomingEvents'

function App () {
  const logout = () => {
    fetch('/api/logout').catch(err => console.log(err))
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
          <Link to='/'>
            <Image src={Logo} fit='contain' className='logo' />
          </Link>
          {document.cookie ? (
            <>
              <Anchor color='#304258' className='navLink' href='/dash'>
                Your SmallTalks
              </Anchor>
              <Anchor color='#304258' className='navLink' href='/categories'>
                Categories
              </Anchor>
              <Anchor
                color='#304258'
                className='navLink'
                href='/upcomingEvents'
              >
                Upcoming SmallTalks
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
                color='#304258'
                id='login'
                onClick={() => logout()}
              >
                Logout
              </Anchor>
            </>
          ) : (
            <>
              <Anchor color='#304258' className='navLink' href='/login'>
                Login
              </Anchor>
              <p className='separator'> | </p>
              <Anchor color='#304258' className='navLink' href='/register'>
                Register
              </Anchor>
            </>
          )}
        </Nav>
      </Header>

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

        <Route path='/videoroom/:roomId'>
          <VideoChat />
        </Route>

        <Route path='/categories/:categoryId'>
          <CategoriesContextProvider>
            <CategoryPage />
          </CategoriesContextProvider>
        </Route>

        <Route path='/upcomingEvents'>
          <UpcomingEvents />
        </Route>

        <Route path='/categories'>
          <CategoryList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
