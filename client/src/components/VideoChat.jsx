import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { Button, Box, Heading, Text } from 'grommet'
import SimplePeer from 'simple-peer'

import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  width: 100%;
`

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`

const socket = io()
socket.emit('video-room', 'games')

console.log({ socket })

function VideoChat () {
  const [stream, setStream] = useState()
  // const [callAccepted, setCallAccepted] = useState(false)
  const [room, setRoom] = useState([])

  const userVideo = useRef()
  const partnerVideo = useRef()

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      setStream(stream)
      if (userVideo.current) {
        userVideo.current.srcObject = stream
      }
      const peer = new SimplePeer({
        initiator: window.location.hash === '#1',
        trickle: false,
        stream: stream
      })

      peer.on('signal', (data) => {
        console.log('Data was just sent by peer', data)
        socket.emit('signal', data)
      })

      socket.on('signal', (data) => {
        console.log('I just received data: ', data)
        peer.signal(data)
      })

      peer.on('stream', (stream) => {
        console.log('Im successfully streaming')
        if (partnerVideo.current) {
          partnerVideo.current.srcObject = stream
        }
      })
    })
  }, [])

  let UserVideo
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    )
  }
  let PartnerVideo
  if (stream) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    )
  }

  return (
    <div>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <h1>Hello Video Chat</h1>
    </div>
  )
}
export default VideoChat
