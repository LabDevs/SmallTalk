import React, { useState, useEffect } from 'react'
import DashBoardEvent from './DashBoardEvent'
import AddEvent from './AddEvent'
import { Button } from 'grommet'

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
    <div>
      <Button primary gap='medium' onClick={handleShow} label='Add Event' />
      <AddEvent show={show} handleClose={handleClose} />
      {isLoading ? (
        <p> {err || '...Loading'}</p>
      ) : (
        <>
          {isLoading ? (
            <p> {err || '...Loading'}</p>
          ) : (
            <>
              {events &&
                events.map(event => {
                  return <DashBoardEvent key={event.id} event={event} />
                })}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default DashBoard
