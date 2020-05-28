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
        fill='true'
        responsive='true'
        rows={['xxsmall', 'xxsmall', 'xsmall', 'auto']}
        columns={['auto', 'auto', 'auto']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 1] },
          { name: 'time', start: [0, 1], end: [2, 1] },
          { name: 'desc', start: [0, 2], end: [2, 2] },
          { name: 'buttons', start: [0, 3], end: [2, 3] }
        ]}
      >
        <Box responsive='true' gridArea='time'>
          <Heading
            alignSelf='center'
            textAlign='center'
            level='2'
            responsive='true'
            margin={{ top: 'xsmall' }}
          >
            {event.title}
          </Heading>
        </Box>
        <Box responsive='true' gridArea='header'>
          <Text size='large' textAlign='center'>
            {new Date(event.date).toLocaleString()}
          </Text>
        </Box>
        <Box responsive='true' gridArea='desc'>
          <Text size='medium' margin={{ vertical: 'auto' }} textAlign='center'>
            {event.description}
          </Text>
        </Box>
        <Box
          gridArea='buttons'
          alignContent='center'
          align='center'
          alignSelf='center'
          flex='true'
          direction='row'
          justify='evenly'
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
