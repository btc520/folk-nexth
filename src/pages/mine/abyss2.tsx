import React from 'react'
import axios from 'axios'
import { Button, Text, Heading, ListItem, UnorderedList, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Aby() {
  const [Token, setToken] = useState('')

  const [Server, setServer] = useState('')
  const [Http, setHttp] = useState('')
  const [Date, setDate] = useState('')

  const [post, setPost] = React.useState(null)

  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozODgxMiwiaWF0IjoxNjg0MzE0ODkyfQ.G7nS6zqTZaUPuM9I2lUEnLqfPFCUKIx9FqE7MafLfo4'
  const url = `https://ca.abyssworld.games/api/user/checkin`
  const config = {
    headers: {
      authorization: `Bearer ${Token}`,
    },
  }
  const payload = {}

  function PTAby() {
    axios.post(url, payload, config).then((response) => {
      setPost(response.data)

      setServer(response.data.msg)
      setHttp(response.data.code)
      setDate(response.data?.data.date)

      console.log(response.data?.data.date)
    })
  }
  return (
    <div>
      <Heading mt={5}> Abyss 交互 </Heading>

      <Input mt={5} value={Token} onChange={(e) => setToken(e.target.value)} placeholder="粘贴 abyss autenication token " />

      <Button mt={5} onClick={PTAby}>
        {' '}
        点我交互
      </Button>

      <Text mt={5}>交互状态 Server:    {Server}</Text>
      <Text mt={5}>交互状态 HTTP:    {Http}</Text>
      <Text mt={5}>交互日期 (今天):    {Date}</Text>
    </div>
  )
}
