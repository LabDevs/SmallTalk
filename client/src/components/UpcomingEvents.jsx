import React, { useState, useEffect } from 'react'
import { Heading, Box, Grid, Stack } from 'grommet'
import UpcomingEventsCard from './UpcomingEventsCard'
import { Spinner } from 'react-bootstrap'

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
          setIsLoading(false)
        })
        .catch(err => {
          console.log(err)
          err = 'Sorry there was an error, please try again'
          setErr(err)
        })
    }

    getRSVPEvents()
  }, [])

  console.log(upcomingEvents)

  return (
    <>
      <Box>
        <Heading
          className='upcomingEventHeader'
          textAlign='center'
          responsive='true'
          label='Your Upcoming Events'
          color='#444444'
        >
          Your Upcoming SmallTalk's
        </Heading>
      </Box>

      {isLoading ? (
        <Spinner className='loading' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <Stack>
          {upcomingEvents.length === 0 ? (
            <Heading level='3' className='emptyHeading' textAlign='center'>
              Hm...looks empty. Why not RSVP to an event?
            </Heading>
          ) : (
            <></>
          )}
          <Grid
            rows='medium'
            columns={['auto', '1/2']}
            gap='small'
            responsive='true'
            align='center'
          >
            {upcomingEvents &&
              upcomingEvents.map(event => {
                return <UpcomingEventsCard key={event.id} event={event} />
              })}
          </Grid>
        </Stack>
      )}
    </>
  )
}
export default UpcomingEvents
