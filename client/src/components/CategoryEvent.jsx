import React, { useState } from 'react'
import { Box, Button, Heading, Text, Grid } from 'grommet'
import { Checkmark } from 'grommet-icons'

const CategoryEvent = ({ event }) => {
  const [icon, setIcon] = useState(null)

  const rsvpInfo = {
    userId: event.userId,
    eventId: event.id
  }

  const addRSVP = () => {
    fetch('/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rsvpInfo)
    })
      .then(() => {
        setIcon(<Checkmark />)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Box
      responsive='true'
      direction='column'
      align='center'
      alignSelf='center'
      background='#D3EBF9'
      border={{ color: '#17539D', size: 'medium' }}
      round='xsmall'
      header='Your Events'
      pad='medium'
      margin={{ top: '10%', left: '4.5%' }}
      width='90%'
    >
      <Grid
        responsive='true'
        rows={['xxsmall', 'xsmall', 'xxsmall', 'auto']}
        columns={['auto', 'auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 1] },
          { name: 'time', start: [0, 1], end: [2, 1] },
          { name: 'desc', start: [0, 2], end: [2, 2] },
          { name: 'buttons', start: [0, 3], end: [2, 3] }
        ]}
      >
        <Box responsive='true' gridArea='header'>
          <Heading
            alignSelf='start'
            textAlign='start'
            level='2'
            responsive='true'
            margin={{ top: 'small' }}
          >
            {event.title}
          </Heading>
        </Box>
        <Box responsive='true' gridArea='time'>
          <Text size='large' textAlign='center' margin={{ vertical: 'auto' }}>
            {new Date(event.date).toLocaleString()}
          </Text>
        </Box>
        <Box responsive='true' gridArea='desc'>
          <Text size='medium' margin={{ vertical: 'auto' }} textAlign='center'>
            {event.description}
          </Text>
        </Box>
        <Box
          responsive='true'
          gridArea='buttons'
          gap='medium'
          margin={{ top: 'large', left: '41%' }}
          direction='row'
        >
          <Box responsive='true'>
            <Button
              responsive='true'
              label='RSVP'
              icon={icon}
              primary
              onClick={addRSVP}
              color='#6AB8E0'
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default CategoryEvent
