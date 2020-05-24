import React, { useState, useEffect } from 'react'
import { Box, Button, Heading } from 'grommet'

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
              return (
                <Box
                  responsive='true'
                  className='upcomingEventCard'
                  direction='column'
                  align='center'
                  alignSelf='center'
                  background='light'
                  border={{ color: 'gray' }}
                  round='small'
                  header='Upcoming Events'
                  pad='medium'
                >
                  <h2>{event.title}</h2>
                  <Button
                    className='upcomingEventsButton'
                    size='medium'
                    responsive='true'
                    primary
                    gap='small'
                    label='Chat!'
                    href='/videochat'
                  />
                </Box>
              )
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
