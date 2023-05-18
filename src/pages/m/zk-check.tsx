/* eslint-disable */
import React from 'react'
import axios from 'axios'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { stringify } from 'viem'

export default function KaratDAO() {
  const [Trans, setTrans] = useState([])
  const [Cot, setCon] = useState('0x112E5059a4742ad8b2baF9C453fDA8695c200454')
  const url = `https://zksync2-mainnet-explorer.zksync.io/transactions?limit=20&direction=older&contractAddress=` + Cot

  //0x112E5059a4742ad8b2baF9C453fDA8695c200454
  function UpdateFee() {
    axios.get(url).then((response) => {
      setTrans(response.data.list)
      console.log(Array.isArray(Trans))

      console.log(Trans)
    })
  }

  return (
    <div>
      <Heading as="h3" fontSize="xl" my={4}>
        妈妈, 我是 karatDAO 交互小工具
      </Heading>
      <Text mt={5}> 输入合约地址查询手续费: </Text>
      <Input mt={5} value={Cot} onChange={(e) => setCon(e.target.value)} placeholder={Cot} />

      <Text mt={5}> 合约地址 0x112E5059a4742ad8b2baF9C453fDA8695c200454, 也可以查其他的. 实时数据: </Text>

      <Button mt={5} onClick={UpdateFee}>
        点我更新
      </Button>

      <div>
        {Array.from(Trans).map((tran) => (
          <li>
            {tran['transactionHash']} - {tran['blockNumber']} - {parseInt(tran['fee'], 16) / 1000000000000000000}{' '}
          </li>
        ))}
      </div>
      {/* <UpdateFee /> */}
    </div>
  )
}
