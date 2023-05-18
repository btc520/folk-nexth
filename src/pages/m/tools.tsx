/* eslint-disable */

import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { ethers } from 'ethers'

function ToHex() {
  const [IN, setIN] = useState('60')
  const [OUT, setOUT] = useState('')
  //const num = 60

  function UpdateHex() {
    //const INN =  parseInt(IN, 10)
    //const INN = IN
    //IN.toString(16)
    const OUTT = parseInt(IN, 10).toString(16)
    setOUT(OUTT)
    //console.log(OUT) // 3c
    //let OUTT = parseInt(INN, 10).toString(16)

    //setOUT(INN)

    // const num = 60
    // const hex = num.toString(16)
    // console.log(hex) // 3c
  }

  return (
    <div>
      <Heading as="h3" fontSize="lg" my={4}>
        1. int to hex
      </Heading>
      <Input mt={5} value={IN} onChange={(e) => setIN(e.target.value)} />

      <Button mt={5} onClick={() => UpdateHex()}>
        点我更新
      </Button>

      <Text mt={5}>output hex string: {OUT}</Text>
    </div>
  )
}

function InputParse() {
  const [IN, setIN] = useState('')
  const [Method, setMethod] = useState('')
  const [IN1, setIN1] = useState('')
  const [IN2, setIN2] = useState('')
  const [IN3, setIN3] = useState('')
  const [IN4, setIN4] = useState('')
  const [IN5, setIN5] = useState('')
  const [IN6, setIN6] = useState('')
  const [IN7, setIN7] = useState('')
  const [IN8, setIN8] = useState('')

  const [TS, setTS] = useState('')

  const A = 10
  const B = 10 + 64
  const C = 10 + 64 + 64
  const D = 10 + 64 + 64 + 64
  const E = 10 + 64 + 64 + 64 + 64
  const F = 10 + 64 + 64 + 64 + 64 + 64
  const G = 10 + 64 + 64 + 64 + 64 + 64 + 64
  const H = 458
  const I = 10 + 64 + 64 + 64 + 64 + 64 + 64 + 64 + 64

  function ParseIn() {
    //const OUTT = parseInt(IN, 10).toString(16)

    setMethod(IN.substring(0, 10))
    IN.substring(A, A + 1) == '0' && IN.length > A ? setIN1(IN.substring(A, B)) : setIN1(IN.substring(A))
    IN.substring(B, B + 1) == '0' && IN.length > B ? setIN2(IN.substring(B, C)) : setIN2(IN.substring(B))
    IN.substring(C, C + 1) == '0' && IN.length > C ? setIN3(IN.substring(C, D)) : setIN3(IN.substring(C))
    IN.substring(D, D + 1) == '0' && IN.length > D ? setIN4(IN.substring(D, E)) : setIN4(IN.substring(D))
    IN.substring(E, E + 1) == '0' && IN.length > F ? setIN5(IN.substring(E, F)) : setIN5(IN.substring(E))
    IN.substring(F, F + 1) == '0' && IN.length > F ? setIN6(IN.substring(F, G)) : setIN6(IN.substring(F))
    IN.substring(G, G + 1) == '0' && IN.length > G ? setIN7(IN.substring(G, H)) : setIN7(IN.substring(G))
    IN.substring(H, H + 1) == '0' && IN.length > H ? setIN8(IN.substring(H, I)) : setIN8(IN.substring(H))

    setTS(IN.substring(G, G + 1))
  }

  return (
    <div>
      <Heading as="h3" fontSize="lg" my={4}>
        2. parse input
      </Heading>
      <Input mt={5} value={IN} onChange={(e) => setIN(e.target.value)} />
      <Button mt={5} onClick={() => ParseIn()}>
        点我解析
      </Button>
      <Text mt={5}>方法: {Method}</Text>

      <Text mt={5}>第1行: {IN1}</Text>
      <Text mt={5}>第2行: {IN2}</Text>
      <Text mt={5}>第3行: {IN3}</Text>
      <Text mt={5}>第4行: {IN4}</Text>
      <Text mt={5}>第5行: {IN5}</Text>
      <Text mt={5}>第6行: {IN6}</Text>
      <Text mt={5}>第7行: {IN7}</Text>
      <Text mt={5}>第8行: {IN8}</Text>

      <Text mt={5}>test: {TS}</Text>
    </div>
  )
}

export default function OP() {
  return (
    <div>
      <div>
        <ToHex />
      </div>
      <div>
        <InputParse />
      </div>
    </div>
  )
}
