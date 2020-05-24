import React, { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
import { Button, Box, Heading, Text } from 'grommet'

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
    <>
      <UpdateEvent show={show} handleClose={handleClose} eventId={event.id} />

      <Box
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
          <Button
            className='upcomingEventsButton'
            size='medium'
            responsive='true'
            primary
            gap='small'
            label='Start Small Talk'
            href='/videochat#1'
          />
        </Box>
      </Box>
    </>
  )
}

export default DashBoardEvent
