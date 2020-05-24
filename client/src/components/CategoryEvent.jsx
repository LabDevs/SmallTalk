import React, { useState } from 'react'
import { Box, Button, Heading, Text } from 'grommet'

const CategoryEvent = props => {
  console.log(props)
  const [variant, setVariant] = useState('primary')
  const rsvpInfo = {
    userId: props.event.userId,
    eventId: props.event.id
  }

  const addRSVP = () => {
    fetch('/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rsvpInfo)
    }).catch(err => {
      console.log(err)
    })
    setVariant('secondary')
  }

  return (
    <Box
      margin={{ left: 'large', right: 'large' }}
      responsive='true'
      className='dashboardEventCard'
      direction='column'
      align='center'
      alignSelf='center'
      background='light'
      border={{ color: 'gray' }}
      round='small'
      header='Your Events'
      pad='medium'
    >
      <Heading level='2' textAlign='start' responsive='true'>
        {props.event.title}
      </Heading>
      <Text margin={{ bottom: 'small' }} textAlign='center'>
        {props.event.description}
      </Text>

      <Box className='eventButtons'>
        <Button
          className='upcomingEventsButton'
          size='medium'
          responsive='true'
          gap='small'
          label='RSVP'
          onClick={addRSVP}
        />
      </Box>
    </Box>
  )
}

export default CategoryEvent
