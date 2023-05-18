import React from 'react'
import axios from 'axios'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
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

  function Aby_Post() {
    axios.post(url, payload, config).then((response) => {
      setPost(response.data)

      setServer(response.data.msg)
      setHttp(response.data.code)
      setDate(response.data?.data.date)

      console.log(response)
    })
  }

  function Aby_Get() {
    axios.post(url, payload, config).then((response) => {
      setPost(response.data)

      setServer(response.data.msg)
      setHttp(response.data.code)
      setDate(response.data?.data.date)

      console.log(response)
    })
  }

  return (
    <div>
      <Heading mt={5}> Abyss 交互 </Heading>

      <Input mt={5} value={Token} onChange={(e) => setToken(e.target.value)} placeholder="粘贴 abyss autenication token " />

      <Button mt={5} onClick={Aby_Post}>
        {' '}
        点我 - 登录
      </Button>

      <Button ml={5} mt={5} onClick={Aby_Get}>
        {' '}
        点我 - 签到
      </Button>

      <Text mt={5}> 交互状态 Server: {Server}</Text>
      <Text mt={5}> 交互状态 HTTP: {Http}</Text>
      <Text mt={5}> 交互日期 (今天): {Date}</Text>

      <Text mt={5}>以下是备注信息: </Text>
      <Text mt={5}>1. 使用说明: 先点一下 登录, 然后点一下签到, 显示出来的数据是一样的 </Text>
      <Text mt={5}>
        <Link href="https://ca.abyssworld.games/">2. 官方链接 https://ca.abyssworld.games/</Link>{' '}
      </Text>
      <Text mt={5}>3. 可以的在 chrome dev 里面的 network 找到 checkin 然后找到 authentication, 截取 Bear 后面部分 </Text>
    </div>
  )
}
