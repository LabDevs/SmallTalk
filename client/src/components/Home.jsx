import React from 'react'
import { Link } from 'react-router-dom'
import People from '../people.jpg'
import { User, Search, Chat } from 'grommet-icons'
import { Text, Heading } from 'grommet'

const Home = () => {
  return (
    <div className='homePage'>
      <section className='top-row'>
        <aside className='sideText'>
          <Heading className='slogan'>
            A new way to <span className='logo-text'>SMALLTALK</span>
          </Heading>
          <Text color='#304258' size='large' textAlign='start'>
            SmallTalk is meant for just that: small talks! SmallTalk aims to
            help ease the pressure that sometimes occurs when starting
            conversations. With categories for starting points and events
            created by users, there's tons of opportunities to join in!
          </Text>
        </aside>
        <img
          src={People}
          className='people'
          alt='image of interconnected circles with a group of people looking up at them symbolizing a network'
        />
      </section>

      <h1 className='middle-row-title'>Join SmallTalk</h1>
      <section className='middle-row'>
        <div className='iconCard'>
          <Link to='/register'>
            <User className='userIcon' color='#3E92CC' size='xlarge' />
          </Link>
          <div className='cardContent'>
            <Link to='/register'>
              <b>Sign-Up</b>
            </Link>
            <p>Create a profile to join SmallTalks!</p>
          </div>
        </div>
        <div className='iconCard'>
          <Search className='searchIcon' color='#3E92CC' size='xlarge' />
          <div className='cardContent'>
            <b>Find events</b>
            <p>Find events based on categories that interest you!</p>
          </div>
        </div>
        <div className='iconCard'>
          <Chat className='chatIcon' color='#3E92CC' size='xlarge' />
          <div className='cardContent'>
            <b>Chat it up!</b>
            <p>
              Once you have RSVP'd for an event, you are all set to start small
              talking with others!
            </p>
          </div>
        </div>
      </section>

      <section className='bottom-row'>
        <p>
          We hope that SmallTalk opens you up to all the one liners and awkward
          silence reducers!
        </p>
      </section>
      <footer>
        <p>© SMALLTALK 2020</p>
      </footer>
    </div>
  )
}

export default Home
