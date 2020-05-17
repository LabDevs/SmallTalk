import React, { useState, useEffect } from 'react'

function DashBoard (props) {
  const [events, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/getEvents')
      .then((res) => res.json())
      .then((event) => {
        console.log(event)
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
  const userInfo ={
    eventId: props.eventId
  }
  
  const removeEvent = () => {
    fetch('/remove/', {
      method:'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userInfo)
    })
      .then(() =>{
        console.log('Success')
        // window.location.reload()
      })
      
      .catch((err) =>{
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Hello</h1>
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          {events &&
            events.map((event) => {
              return (
              <DashBoardEvent event={event}/>
              )
            })}
        </>
      )}
    </div>
  )

}



const editEvent = () =>{
  
}


export default DashBoard