import React, { useState, useEffect } from 'react'
import DashBoardEvent from './DashBoardEvent'

function DashBoard() {
  const [events, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

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
    <div>
      <h1>Hello</h1>
      {isLoading ? (
        <>
          <p>{err && err || '...Loading'}</p>
        </>
      ) : (
          <>
            {events &&
              events.map((event) => {
                return (
                  <DashBoardEvent key={event.event_id} event={event} />
                )
              })}
          </>
        )}
    </div>
  )
}

export default DashBoard
