import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'

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


function VideoChat () {
  const [stream, setStream] = useState()
  const [callAccepted, setCallAccepted] = useState(false);
  const [text, setText] = useState('')
  // const [caller, setCaller] = useState("");
  // const [callerSignal, setCallerSignal] = useState();
  

  const userVideo = useRef()
  const partnerVideo = useRef()
  // const socket = useRef();


  useEffect(() => {
    
    navigator.mediaDevices.getUserMedia({
      video:true,
      audio:true
    }).then(stream => {
      setStream(stream)
      if(userVideo.current){
        userVideo.current.srcObject = stream
      }
    })
    //this peer will be sending the signal via socket
    const peer = new SimplePeer({
      initiator: window.location.hash === '#1',
      trickle: false,
      stream: stream,
    })
    
    peer.on('signal', (data) => {
      console.log('Data was just sent by peer',data)
      socket.emit('signal', data)
    })

    socket.on('signal', (data) => {
      console.log('I just received data: ', data);
      peer.signal(data)
    })
    
    peer.on('stream', (stream) => {
      if(partnerVideo.current){
        partnerVideo.current.srcObject = stream
      }
  })
  
  //hopefully this peer accept and send back its answer
  function acceptSignal(){
    setCallAccepted(true)
    const peer = new SimplePeer({
      initiator:false,
      trickle:false,
      stream:stream
    })
    peer.on('signal', (data) => {
      // socket.emit('acceptCall', data)
      peer.signal(data)
    })
    
    peer.on('stream', (stream) =>{
      partnerVideo.current.srcObject = stream
    })
  }
  
  acceptSignal()
    
  }, [])

  
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

  
  return (
      <div>
      <Row>
        {UserVideo}
        
      </Row>
        <h1>Hello Video Chat</h1>
        <button id='call' disabled='disabled'>Call</button>
      
      </div>
  )
}
export default VideoChat

        // <button onClick={getVideo} id='get-video'>Get Video</button>
