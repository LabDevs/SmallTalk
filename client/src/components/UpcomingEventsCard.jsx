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
    //   <Box
    //     responsive='true'
    //     className='upcomingEventCard'
    //     direction='column'
    //     align='center'
    //     alignSelf='center'
    //     background='light'
    //     border={{ color: 'gray' }}
    //     round='small'
    //     header='Upcoming Events'
    //     pad='medium'
    //   >
    //     <h2>{event.title}</h2>
    //     <Button
    //       className='upcomingEventsButton'
    //       size='medium'
    //       responsive='true'
    //       primary
    //       gap='small'
    //       label='Chat!'
    //       href='/videoroom'
    //     />
    //     <Button
    //       className='upcomingEventsButton'
    //       size='medium'
    //       responsive='true'
    //       primary
    //       gap='small'
    //       label='Un-RSVP'
    //       onClick={removeRSVP}
    //     />
    //   </Box>
    // )

    <Box>
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
        margin={{ top: '10%' }}
        width='90%'
      >
        <Grid
          rows={['auto', 'xxsmall', 'xxsmall', 'auto']}
          columns={['small', 'small', 'small']}
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
            gap='medium'
            margin={{ top: 'large', left: '24%' }}
            direction='row'
          >
            <Button
              size='medium'
              responsive='true'
              gap='small'
              label='Un-RSVP'
              onClick={removeRSVP}
              color='#6AB8E0'
            />
            <Link to='/videoroom'>
              <Button
                size='medium'
                responsive='true'
                primary
                gap='small'
                label='Join SmallTalk'
                color='#6AB8E0'
              />
            </Link>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default UpcomingEventsCard