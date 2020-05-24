import React, { useState, useEffect } from 'react'
import { Heading } from 'grommet'
import UpcomingEventsCard from './UpcomingEventsCard'

function UpcomingEvents () {
  const [upcomingEvents, setUpComingEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    function getRSVPEvents () {
      setIsLoading(true)
      fetch('/rsvp/user')
        .then(res => res.json())
        .then(event => {
          const newEvents = [...event]
          setUpComingEvents(newEvents)
        })
        .catch(err => {
          console.log(err)
          err = 'Sorry there was an error, please try again'
          setErr(err)
        })
    }

    getRSVPEvents()
    setIsLoading(false)
  }, [])

  console.log(upcomingEvents)

  return (
    <>
      {isLoading ? (
        <p> {err || '...Loading'}</p>
      ) : (
        <>
          <Heading
            className='upcomingEventHeader'
            textAlign='center'
            responsive='true'
            label='Your Upcoming Events'
          >
            Your Upcoming Events
          </Heading>
          {upcomingEvents &&
            upcomingEvents.map(event => {
              return <UpcomingEventsCard key={event.id} event={event} />
            })}
          {upcomingEvents.length === 0 ? (
            <Heading level='3' id='emptyHeading' textAlign='center'>
              Hm...looks empty. Why not RSVP to an event?
            </Heading>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  )
}
export default UpcomingEvents
