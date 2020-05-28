import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import SimplePeer from 'simple-peer'
import styled from 'styled-components'
import { Stack, Box } from 'grommet'

const Video = styled.video`
  margin-top: 3%;
  width: 10%;
`
const SpeakerVideo = styled.video`
  width: 45%;
  margin-top: 3%;
`

function VideoChat () {
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
    socket.current.on('is-partner-here', isPartnerHere => {
      console.log({ isPartnerHere })
      setIsPartnerHere(isPartnerHere)

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(stream => {
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

          peer.on('signal', data => {
            console.log('Data was just sent', data)
            socket.current.emit('signal', data)
          })

          peer.on('stream', partnerStream => {
            setIsPartnerHere(true)
            console.log({ partnerStream })
            if (partnerVideo.current) {
              partnerVideo.current.srcObject = partnerStream
            }
          })

          socket.current.on('signal', data => {
            console.log('I just received data', data)
            peer.signal(data)
            console.log({ peer })
          })
        })
    })
  }, [])

  let UserVideo
  if (stream) {
    UserVideo = <Video playsInline muted ref={userVideo} autoPlay />
  }

  let PartnerVideo
  if (isPartnerHere) {
    PartnerVideo = <SpeakerVideo playsInline ref={partnerVideo} autoPlay />
  } else {
    PartnerVideo = <h2> Waiting for a partner...</h2>
  }

  return (
    <Stack alignSelf='center'>
      <Box align='center'>{PartnerVideo}</Box>
      <Box margin={{ top: 'small', left: '27.5%' }}>{UserVideo}</Box>
    </Stack>
  )
}
export default VideoChat
