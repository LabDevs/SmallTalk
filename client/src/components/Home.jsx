import React from 'react'
import People from '../people.jpg'

const Home = () => {
  return (
    <div className='homePage'>
      <section className='introBody'>
        <aside className='sideText'>
          <h1>Welcome to SmallTalk</h1>
          <p>SmallTalk will allow you to </p>
        </aside>

        <img src={People} className='people' />
      </section>
      <section className='instructionBody'>
        <p>hellooo</p>
      </section>
    </div>
  )
}

export default Home
