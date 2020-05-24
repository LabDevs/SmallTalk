import React from 'react'
import { Box, Button } from 'grommet'

const UpcomingEventsCard = ({ event }) => {
  const removeRSVP = () => {
    fetch('/rsvp/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rsvpId: event.id })
    })
      .then(() => {
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

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
        href='/videoChat'
      />
      <Button
        className='upcomingEventsButton'
        size='medium'
        responsive='true'
        primary
        gap='small'
        label='Un-RSVP'
        onClick={removeRSVP}
      />
    </Box>
  )
}

export default UpcomingEventsCard
