import React, { useState, useEffect } from 'react'
import DashBoardEvent from './DashBoardEvent'
import AddEvent from './AddEvent'
import { Box, Button, Heading, Grid } from 'grommet'

function DashBoard () {
  const [events, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

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
        err = 'Sorry there was an error, please try again'
        setErr(err)
      })
  }, [])

  return (
    <>
      <Box className='dashboard'>
        <Heading
          margin={{ bottom: 'medium' }}
          textAlign='center'
          responsive='true'
          label='Your Events'
        >
          Your Events
        </Heading>
        <Button
          alignSelf='center'
          primary
          onClick={handleShow}
          label='Add Event'
        />
        <AddEvent id='addEvent' show={show} handleClose={handleClose} />
      </Box>
      {isLoading ? (
        <p> {err || '...Loading'}</p>
      ) : (
        <Grid
          rows={'medium'}
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
      )}
    </>
  )
}
export default DashBoard
