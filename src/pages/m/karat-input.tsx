/* eslint-disable */
import React from 'react'
import axios from 'axios'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { stringify } from 'viem'
import DataReuqest from './karat-acc'

export default function CheckC() {
  const [Wallet, setWallet] = useState('')
  const [Validator, setValidator] = useState('')
  const [Role, setRole] = useState('')
  const [Score, setScore] = useState('')
  const [Sign, setSign] = useState('')
  const func = '0xd221bd26'
  //0x112E5059a4742ad8b2baF9C453fDA8695c200454
  const [ID, setID] = useState('')
  function Mix() {
    const parseWallet = Wallet.substring(2).padStart(64, '0')
    const parseValidator = parseInt(Validator, 10).toString(16).padStart(64, '0')
    const parseScore = parseInt(Score, 10).toString(16).padStart(64, '0')
    const zero = ''.padStart(64, '0')
    const parseRole = Role.padStart(64, '0')
    const ex1 = '00000000000000000000000000000000000000000000000000000000000000c0'
    const ex2 = '0000000000000000000000000000000000000000000000000000000000000041'
    const parseSign = Sign.substring(2).padEnd(192, '0')

    const InputData = func + parseWallet + parseValidator + parseScore + zero + parseRole + ex1 + ex2 + parseSign
    setID(InputData)
  }

  return (
    <div>
      <Heading as="h3" fontSize="lg" my={4}>
        2. 生成 Input:
      </Heading>
      <Text mt={5}> 1. 钱包地址 </Text> <Input mt={5} value={Wallet} onChange={(e) => setWallet(e.target.value)} />
      <Text mt={5}> 2. dalidator </Text> <Input mt={5} value={Validator} onChange={(e) => setValidator(e.target.value)} />
      <Text mt={5}> 3. score </Text> <Input mt={5} value={Score} onChange={(e) => setScore(e.target.value)} />
      <Text mt={5}> 3. role </Text> <Input mt={5} value={Role} onChange={(e) => setRole(e.target.value)} />
      <Text mt={5}> 5. sign </Text> <Input mt={5} value={Sign} onChange={(e) => setSign(e.target.value)} />
      <Button mt={5} onClick={Mix}>
        点我合成
      </Button>
      <Text mt={5}> 合成 Input {ID}</Text>
    </div>
  )
}
