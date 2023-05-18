import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'

export default function DataReuqest() {
  const [Addr, setAddr] = useState('')
  //   const [Trans2, setTrans2] = useState({})
  const [Score, setScore] = useState('')
  const [Role, setRole] = useState('')
  const [mintId, setmintId] = useState('')
  const [signedMessage, setsignedMessage] = useState('')
  const url2 = 'https://api.karatdao.com/network/action'
  const postData = {
    method: 'claimer/requestMintClaimerSignature',
    params: {
      walletAddress: Addr,
      validatorTokenId: 3,
      lieutenantAddr: '0x0000000000000000000000000000000000000000',
    },
  }

  function runCheck() {
    axios.post(url2, postData).then((response) => {
      //   setTrans2(response.data['result'])
      console.log(response.data)
      //   console.log(typeof Trans2)
      setScore(response.data['result']['message']['score'])
      setRole(response.data['result']['message']['role'])
      setmintId(response.data['result']['mintId'])
      setsignedMessage(response.data['result']['signedMessage'])
    })
  }

  return (
    <div>
      <Heading as="h3" fontSize="lg" my={4}>
        1. 查询自己的钱包
      </Heading>
      <Input mt={5} value={Addr} onChange={(e) => setAddr(e.target.value)} placeholder="" />

      <Button mt={5} onClick={() => runCheck()}>
        点我更新
      </Button>
      <Text mt={2}> Score: {Score} </Text>
      <Text mt={2}> Role: {Role} </Text>
      <Text mt={2}> mintId: {mintId} </Text>
      <Text mt={2}> signedMessage: {signedMessage} </Text>
    </div>
  )
}
