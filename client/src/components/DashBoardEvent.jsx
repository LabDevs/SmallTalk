import React, { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
<<<<<<< HEAD
import { Button, Box, Heading, Text } from 'grommet'
=======
import { Button, Grid, Box, Heading, Text } from 'grommet'
>>>>>>> 3ca58e036d34674f7d364eac8c0a48fafa33229f
import { Link } from 'react-router-dom'

const DashBoardEvent = ({ event }) => {
  const [show, setShow] = useState(false)
  const [categoryName, setCategoryName] = useState('')

  const removeEvent = () => {
    fetch('/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: event.id })
    })
      .then(() => {
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    async function getCategoryName () {
      const response = await fetch(`/api/categoryId/${event.category_id}`)
      const name = await response.json()
      setCategoryName(name)
    }

    getCategoryName()
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Box>
      <UpdateEvent show={show} handleClose={handleClose} eventId={event.id} />

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
<<<<<<< HEAD
        <Heading level='2' textAlign='start' responsive='true'>
          {event.title}
        </Heading>
        <Text margin={{ bottom: 'small' }} textAlign='center'>
          {event.description}
        </Text>
        <Heading level='5'>{categoryName.name}</Heading>
        <Text textAlign='center' margin={{ bottom: 'small' }}>
          {new Date(event.date).toLocaleString()}
        </Text>
        <Box className='eventButtons'>
          <Button
            className='upcomingEventsButton'
            size='medium'
            responsive='true'
            primary
            gap='small'
            label='Update Event'
            onClick={removeEvent}
            margin={{ bottom: 'small' }}
          />
          <Button
            className='upcomingEventsButton'
            size='medium'
            responsive='true'
            primary
            gap='small'
            label='Delete Event'
            onClick={removeEvent}
            margin={{ bottom: 'small' }}
          />
          <Link to='/videoRoom'>
            <Button
              className='upcomingEventsButton'
              size='medium'
              responsive='true'
              primary
              gap='small'
              label='Start Small Talk'
            />
          </Link>
        </Box>
=======
        <Grid
          rows={['auto', 'xsmall', 'xxsmall', 'auto']}
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
              {categoryName.name}
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
            margin={{ top: 'large', left: '13%' }}
            direction='row'
          >
            <Box>
              <Button
                responsive='true'
                label='Update'
                onClick={handleShow}
                color='#6AB8E0'
              />
            </Box>
            <Box>
              <Button
                responsive='true'
                label='Delete'
                onClick={removeEvent}
                color='#6AB8E0'
              />
            </Box>
            <Link to='/videoroom'>
              <Button
                size='medium'
                responsive='true'
                primary
                label='Start SmallTalk'
                color='#6AB8E0'
              />
            </Link>
          </Box>
        </Grid>
>>>>>>> 3ca58e036d34674f7d364eac8c0a48fafa33229f
      </Box>
    </Box>
  )
}

export default DashBoardEvent
