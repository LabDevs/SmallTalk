import React from 'react'
import { Link } from 'react-router-dom'

import People from '../people.jpg'
import { Chrome } from 'grommet-icons'
import { User, Search, Chat } from 'grommet-icons'

const Home = () => {
  return (
    <div className='homePage'>
      <section className='top-row'>
        <aside className='sideText'>
          <h1 className='slogan'>
            A new way to <span className='logo-text'>SMALLTALK</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            veniam consectetur adipisci maxime ad mollitia libero obcaecati iste
            minima eligendi ipsum dolore doloremque! Pariatur, necessitatibus
            vero! Numquam veritatis magnam optio.
          </p>
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
      <footer> this is a placeholder for the real footer</footer>
    </div>
  )
}

export default Home
