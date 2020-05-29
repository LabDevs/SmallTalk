import React, { useState, useEffect } from 'react'
import { Heading, Box, Grid, Stack } from 'grommet'
import UpcomingEventsCard from './UpcomingEventsCard'
import { Spinner } from 'react-bootstrap'

function UpcomingEvents () {
  const [upcomingEvents, setUpComingEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
        })
    }

    getRSVPEvents()
  }, [])

  return (
    <>
      <Box>
        <Heading
          className='upcomingEventHeader'
          responsive='true'
          color='#444444'
        >
          Your Upcoming SmallTalks
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
            columns={['auto', 'auto']}
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
