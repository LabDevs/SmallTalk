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
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  // const [state, setState] = useState({ data: null });

  // useEffect(() => {
  //   expressBackend().then((server) => {
  //     setState({ server: res.express });
  //   }, []);
  // });
  useEffect(() => {
    getEvents()
      .then((event) => {
        setIsLoading(true);
        setEvents(event);
      })
      .catch((err) => {
        console.log(err);
        err = "Sorry there was an error, please try again";
        setErr(err);
      });
    setIsLoading(false);
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

// async function expressBackend() {
//   const url = "/express_backend";
//   const response = await fetch(url);
//   console.log(response);
//   const data = response.json();
//   console.log(data);
//   return data;
// }

async function getEvents() {
  const url =
    "https://cors-anywhere.herokuapp.com//http://localhost:8000/api/getEvents";
  const url2 = "/api/getEvents";
  const response = await fetch(url2);
  console.log(response);
  const data = response.json()
  // console.log(data)
}

export default DashBoard;
