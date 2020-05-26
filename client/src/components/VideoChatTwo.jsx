import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { Button, Box, Heading, Text } from 'grommet'
import io from "socket.io-client";
import SimplePeer from 'simple-peer'
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;

const socket = io()
function VideoChatTwo() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [room,setRoom] = useState([])
  const roomID = useParams()

  const userVideo = useRef();
  const partnerVideo = useRef();

  //check to see if anyone is in the room
  useEffect(() => {
    socket.emit('video-room', roomID)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.on("yourID", (id) => {
      console.log(id)
      setYourID(id);

    })
    socket.on("allUsers", (users) => {
      setUsers(users);
    })
    
    socket.on('is-partner-here', callPeer)
  

    socket.on("call", (data) => {
      console.log('call event', data)
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
    
    socket.on("disconnect", (data) =>{
      // console.log('user left', data)
      // socket.emit('user left', data)
    })
    function getUsers(){
      fetch('/api/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    // getUsers()
  }, []);
  

  function callPeer(id) {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      console.log('Data was just sent',data)
      socket.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
    
    
    socket.on("callAccepted", (signal) => {
      console.log('I got the signal', signal)
      setCallAccepted(true);
      peer.signal(signal);
    })
    
  }
  


  function acceptCall() {
    setCallAccepted(true);
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      console.log('trying to signal', data)
      socket.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>
          Accept
        </button>
      </div>
    )
  }
  return (
    <Container>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button onClick={() => callPeer(key)}>
            Call {key}
            </button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
      </Row>
    </Container>
  );
}

export default VideoChatTwo;
