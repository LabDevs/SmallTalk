import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
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
  justify-content:start;
`

const Video = styled.video`
  height: 40%;
`
const SpeakerVideo = styled.video`
  width:90%;
  height:70%;
`

const Image = styled.img`
  width:9%;
  height:20%;
  margin-top:10%;
`

function VideoChatTwo () {
  const [stream, setStream] = useState()
  const [isPartnerHere, setIsPartnerHere] = useState(null)
  const { roomId } = useParams()

  const userVideo = useRef()
  const partnerVideo = useRef()
  const socket = useRef()
  
  useEffect(() => {
    socket.current = io()
    socket.current.emit('video-room', roomId)
    let peer
    socket.current.on('is-partner-here', (isPartnerHere) => {
      console.log({ isPartnerHere })
      setIsPartnerHere(isPartnerHere)

      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        setStream(stream)
        peer = new SimplePeer({
          initiator: isPartnerHere,
          trickle: false,
          stream: stream
        })
        if (userVideo.current) {
          console.log({ userVideo })
          userVideo.current.srcObject = stream
        }

        peer.on('signal', (data) => {
          console.log('Data was just sent', data)
          socket.current.emit('signal', data)
        })

        peer.on('stream', (partnerStream) => {
          setIsPartnerHere(true)
          console.log({ partnerStream })
          if (partnerVideo.current) {
            partnerVideo.current.srcObject = partnerStream
          }
        })

        socket.current.on('signal', (data) => {
          console.log('I just received data', data)
          peer.signal(data)
          console.log({ peer })
        })
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
  if (isPartnerHere) {
    PartnerVideo = (
      <SpeakerVideo playsInline ref={partnerVideo} autoPlay />
    )
  } else {
    PartnerVideo = (<h2> Waiting for a partner...</h2>)
  }

  return (
    <Container>
      <Row>
        {UserVideo}
      </Row>
      <Row>
        {PartnerVideo}
      </Row>
    </Container>
  )
}

        // <Image src="https://image.flaticon.com/icons/png/512/493/493808.png"/>
export default VideoChatTwo
