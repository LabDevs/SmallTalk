import React, { useState, useEffect } from 'react'
import DashBoardEvent from './DashBoardEvent'
import AddEvent from './AddEvent'
import { Box, Button, Heading, Grid, Stack } from 'grommet'
import { Spinner } from 'react-bootstrap'

function DashBoard () {
  const [events, setEvent] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const getUsers = () => {
    fetch('/api/users')
      .then(response => {
        console.log(response)
        response.json()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/getEvents')
      .then(res => res.json())
      .then(event => {
        const newEvents = [...event]
        setEvent(newEvents)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })

    getUsers()
  }, [])

  return (
    <>
      <Box responsive='true' className='dashboard'>
        <Heading
          margin={{ bottom: 'medium' }}
          textAlign='center'
          responsive='true'
          label='Your Events'
          color='#444444'
        >
          Your SmallTalk's
        </Heading>
        <Button
          alignSelf='center'
          primary
          color='#6AB8E0'
          onClick={handleShow}
          label='Create SmallTalk'
        />
        <AddEvent id='addEvent' show={show} handleClose={handleClose} />
      </Box>
      {isLoading ? (
        <Spinner className='loading' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <Stack>
          {events.length === 0 ? (
            <Heading level='3' id='emptyHeadingDash' textAlign='center'>
              No SmallTalk's here! Try creating one!
            </Heading>
          ) : (
            <></>
          )}
          <Grid
            rows='medium'
            columns={['auto', '1/2']}
            gap='small'
            responsive='true'
            align='center'
          >
            {events &&
              events.map(event => {
                return <DashBoardEvent key={event.id} event={event} />
              })}
          </Grid>
        </Stack>
      )}
    </>
  )
}
export default DashBoard
