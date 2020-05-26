import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
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

function VideoChatTwo() {
  const [stream, setStream] = useState();
  const [isPartnerHere, setIsPartnerHere] = useState(null)
  const [peer, setPeer] = useState(new SimplePeer({
    initiator:false,
    trickle:false,
    stream,
  }))
  const roomID = useParams()

  const userVideo = useRef();
  const partnerVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })
    
    const socket = io()
    socket.emit('video-room', roomID)

    peer.on("signal", (data) => {
      console.log('Data was just sent',data)
      socket.emit("signal", data)
    })

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
    
    socket.on("signal", (signal) => {
      console.log('I got the signal', signal)
      peer.signal(signal);
    })
    
    socket.on('is-partner-here', (isPartnerHere) => {
      console.log('partner is here',isPartnerHere)
      setIsPartnerHere(isPartnerHere)
      if(isPartnerHere){
        setPeer(new SimplePeer({
          initiator:true,
          trickle:false,
          stream:stream,
        }))
      }
    })
  
   
  
    
  }, []);
  
  
  
  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (isPartnerHere) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }else{
    PartnerVideo = (<h2> Waiting for a partner...</h2>)
  }
  
  return (
    <Container>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
    </Container>
  );
}

export default VideoChatTwo;
