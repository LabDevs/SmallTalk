import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

function UpcomingEvents () {
  const [upcomingEvents, setUpComingEvents] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    function getRSVPEvents () {
      setIsLoading(true)
      fetch('/rsvp/user')
        .then(res => res.json())
        .then(event => {
          const newEvents = [...event]
          setUpComingEvents(newEvents)
        })
        .catch(err => {
          console.log(err)
          err = 'Sorry there was an error, please try again'
          setErr(err)
        })
    }

    getRSVPEvents()
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (
        <p> {err || '...Loading'}</p>
      ) : (
        <>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>Upcoming Events</h3>
                </td>
              </tr>
              {upcomingEvents &&
                upcomingEvents.map(event => {
                  return (
                    <tr key={event.event_id}>
                      <td>event {event.event_id}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default UpcomingEvents
