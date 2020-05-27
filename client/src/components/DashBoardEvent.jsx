import React, { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
import { Button, Grid, Box, Heading, Text } from 'grommet'
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
    <Box responsive='true'>
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
          <Box gridArea='category' responsive='true'>
            <Heading textAlign='end' margin={{ vertical: 'xsmall' }} level='4'>
              {categoryName.name}
            </Heading>
          </Box>
          <Box responsive='true' gridArea='time'>
            <Text size='large' textAlign='center' margin={{ vertical: 'auto' }}>
              {new Date(event.date).toLocaleString()}
            </Text>
          </Box>
          <Box responsive='true' gridArea='desc'>
            <Text
              size='medium'
              margin={{ vertical: 'auto' }}
              textAlign='center'
            >
              {event.description}
            </Text>
          </Box>
          <Box
            responsive='true'
            gridArea='buttons'
            gap='medium'
            margin={{ top: 'large', left: '13%' }}
            direction='row'
          >
            <Box responsive='true'>
              <Button
                responsive='true'
                label='Update'
                onClick={handleShow}
                color='#6AB8E0'
              />
            </Box>
            <Box responsive='true'>
              <Button
                responsive='true'
                label='Delete'
                onClick={removeEvent}
                color='#6AB8E0'
              />
            </Box>
            <Link to={`/videoroom/${event.id}`}>
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
      </Box>
    </Box>
  )
}

export default DashBoardEvent
