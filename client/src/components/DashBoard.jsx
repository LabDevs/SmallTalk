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
        response.json()
      })
      .catch(err => {
        console.log(err)
      })
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
          color='#444444'
        >
          Your SmallTalks
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
              No SmallTalks here! Try creating one!
            </Heading>
          ) : (
            <></>
          )}
          <Grid
            rows='medium'
            columns={['auto', 'auto']}
            gap='large'
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
