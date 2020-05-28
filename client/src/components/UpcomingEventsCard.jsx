import React from 'react'
import { Box, Grid, Text, Heading, Button } from 'grommet'
import { Link } from 'react-router-dom'

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
    <Box>
      <Box
        responsive='true'
        direction='column'
        align='center'
        alignSelf='center'
        background='#D3EBF9'
        border={{ color: '#17539D', size: 'medium' }}
        round='xsmall'
        pad='medium'
        margin={{ top: '10%' }}
        width='90%'
      >
        <Grid
          fill='true'
          responsive='true'
          rows={['xsmall', 'xxsmall', 'xsmall', 'auto']}
          columns={['auto', 'auto', 'auto']}
          areas={[
            { name: 'category', start: [2, 0], end: [2, 0] },
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
          <Box gridArea='category'>
            <Heading textAlign='end' margin={{ vertical: 'xsmall' }} level='4'>
              {event.name}
            </Heading>
          </Box>
          <Box gridArea='time'>
            <Text size='large' textAlign='center' margin={{ vertical: 'auto' }}>
              {new Date(event.date).toLocaleString()}
            </Text>
          </Box>
          <Box gridArea='desc'>
            <Text
              size='medium'
              margin={{ vertical: 'auto' }}
              textAlign='center'
            >
              {event.description}
            </Text>
          </Box>
          <Box
            gridArea='buttons'
            margin={{ top: 'medium' }}
            alignContent='center'
            align='center'
            alignSelf='center'
            flex='true'
            direction='row'
            justify='evenly'
          >
            <Box flex='true' align='center'>
              <Button
                responsive='true'
                label='Un-RSVP'
                onClick={removeRSVP}
                color='#6AB8E0'
              />
            </Box>
            <Box flex='true' align='center'>
              <Link to={`/videoroom/${event.id}`}>
                <Button
                  size='medium'
                  responsive='true'
                  primary
                  label='Join SmallTalk'
                  color='#6AB8E0'
                />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default UpcomingEventsCard
