import React, { useEffect, useState, useRef } from 'react';
import P2P from 'socket.io-p2p'
import io from 'socket.io-client'

// import SimplePeer from 'simple-peer'

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
const opts = {autoUpgrade: true, numClients: 2}

const p2p= new P2P(socket,opts, () => console.log('Peers'))

function VideoChat() {
  const [stream, setStream] = useState();
  const [text, setText] = useState('')

  const userVideo = useRef();
  const partnerVideo = useRef();
  // const socket = useRef();

  const getVideo = () => {
    socket.current = io.connect("/videoChat");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      console.log(stream)
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })
  }

  
  useEffect(() => {
    p2p.on('peer-msg',  (data) =>{
      console.log('From a peer %s', data);
    })
  
    socket.on('server-event', (data) =>{
      console.log(data)
      // socket.emit('client-res', 'This better work')
    })
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('peer-msg',text)
  }
  
 
  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  return (
    <Container>
      <Row>
        {UserVideo}
      </Row>
      <div>
        <h1>Hello Video Chat</h1>
        <video id="local-video" height="150" autoPlay></video>
        <video id="remote-video" height="150" autoPlay></video>
        <button onClick={getVideo} id="get-video">Get Video</button>
        <button id="call"  disabled="disabled">Call</button>
        <form>
          <input type='text' onChange= {(e) => setText(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </Container>
  );
}
export default VideoChat;




            // <button onClick={() => callPeer(key)}>Call {key}</button>
      //   {PartnerVideo}
      //
      //   {Object.keys(users).map(key => {
      //     console.log(key)
      //     if (key === yourID) {
      //       return null;
      //     }
      //   })}

      // <Row>
      //   {incomingCall}
      // </Row>



