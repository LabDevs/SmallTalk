import React, { useState, useEffect } from "react";

// A list of the events that the user has created themselves
// The user's RSVP's, or upcoming events, for the specific user, should be displayed somewhere on the screen (see wireframe)
// state = {
//     data: null
//   };

//   componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message)
//     }
//     return body;
//   };

function DashBoard() {
  const [events, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  
  useEffect(() => {
    
    async function getLogin(){
      const loginURL ="/login";
      const response = await getEvents(loginURL,'POST',{
        "username":"paul1","password":"password1"
      })
      console.log(response.json())
        .then((event) =>{
          setIsLoading(true)
          setEvent(event)
        })
        .catch((err) =>{
          console.log(err)
          err ="Sorry there was an error, please try again"
          setErr(err)
        })
        setIsLoading(false)
    }
    
    // getEvents()
    //   .then((event) => {
    //     setIsLoading(true);
    //     setEvents(event);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     err = "Sorry there was an error, please try again";
    //     setErr(err);
    //   });
    // setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {err && err}
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          {events &&
            events.map((event) => {
              return (
                <div>
                  <p>{event.title}</p>
                  <p>{event.description}</p>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

const getEvents = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: {
		  'Content-Type': 'application/json'
  },
})
		  .catch((response) => {
		    const error = new Error('Something went wrong');
		    error.data = response;
		    console.log(error);
		    throw error;
});


export default DashBoard;
