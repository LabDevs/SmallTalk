import React, { useState, useEffect } from 'react'
import { Box, Button, Heading } from 'grommet'

function UpcomingEvents () {
  const [upcomingEvents, setUpComingEvents] = useState(null)
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
        // <Card className='text-center eventTable'>
        //   <Card.Header className='eventHeader'>Upcoming Events</Card.Header>
        //   {upcomingEvents &&
        //     upcomingEvents.map(event => {
        //       return (
        //         <Card.Body className='eventBody'>
        //           <Card.Title>{event.title}</Card.Title>
        //           <Button>Chat!</Button>
        //         </Card.Body>
        //       )
        //     })}
        // </Card>
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
                  />
                </Box>
              )
            })}
        </>
      )}
    </>
  )
}

export default UpcomingEvents
