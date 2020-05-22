import React, { useState, useEffect } from 'react'
import DashBoardEvent from './DashBoardEvent'
import AddEvent from './AddEvent'
<<<<<<< HEAD
import { Button } from 'grommet'
import UpcomingEvents from './UpcomingEvents'
=======
import { Box, Button, Heading } from 'grommet'
>>>>>>> ab41c676f8cf3fc4c4238dff99af334cd7963c2f

function DashBoard() {
  const [events, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/getEvents')
      .then((res) => res.json())
      .then((event) => {
        const newEvents = [...event]
        setEvent(newEvents)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        err = 'Sorry there was an error, please try again'
        setErr(err)
      })
  }, [])

  return (
<<<<<<< HEAD
    <div>
      <Button primary gap='medium' onClick={handleShow} label='Add Event' />
      <AddEvent show={show} handleClose={handleClose} />
      <UpcomingEvents />
      {isLoading ? (
        <p> {err || '...Loading'}</p>
      ) : (
        <>
          {isLoading ? (
            <p> {err || '...Loading'}</p>
          ) : (
            <>
              {events &&
                events.map((event) => {
                  return <DashBoardEvent key={event.id} event={event} />
                })}
            </>
          )}
        </>
      )}
    </div>
=======
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
      <Box>
        {isLoading ? (
          <p> {err || '...Loading'}</p>
        ) : (
          <Box>
            {events &&
              events.map(event => {
                return <DashBoardEvent key={event.id} event={event} />
              })}
          </Box>
        )}
      </Box>
    </>
>>>>>>> ab41c676f8cf3fc4c4238dff99af334cd7963c2f
  )
}

export default DashBoard
