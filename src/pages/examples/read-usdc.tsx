import { useState } from 'react'
import type { Address } from 'wagmi'
import { useContractRead } from 'wagmi'

import { USDTConfig } from './USDT'

import { Button, Heading, Text, ListItem, UnorderedList } from '@chakra-ui/react'

// import { useState } from "react"

const ReadName = () => {
  const { data, isRefetching, isSuccess, refetch } = useContractRead({
    ...USDTConfig,
    functionName: 'name',
  })
  console.log(data)
  return <Heading> ERC20_USDC Name: {data?.toString()}</Heading>
}

const Decimals = () => {
  const { data, isRefetching, isSuccess, refetch } = useContractRead({
    ...USDTConfig,
    functionName: 'decimals',
  })
  console.log(data)
  return <Heading> ERC20_USDC Currency: {data?.toString()}</Heading>
}

const ReadBalanceOf = () => {
  const { data, isRefetching, isSuccess, refetch } = useContractRead({
    ...USDTConfig,
    functionName: 'balanceOf',
    args: ['0x64D05D76f528448F6DB887130135Ad1b86dcCE55'],
  })
  console.log(data)
  return (
    <div>
      <Heading>ERC20_USDC balanceOf: {data?.toString()}</Heading>
    </div>
  )
}

const Allowance = () => {
  const { data, isRefetching, isSuccess, refetch } = useContractRead({
    ...USDTConfig,
    functionName: 'allowance',
    args: ['0x64D05D76f528448F6DB887130135Ad1b86dcCE55', '0x64D05D76f528448F6DB887130135Ad1b86dcCE55'],
  })
  console.log(data)
  return (
    <div>
      <Heading>ERC20_USDC Allowance: {data?.toString()}</Heading>
    </div>
  )
}

const TotalSupply = () => {
  const { data, isRefetching, isSuccess, refetch } = useContractRead({
    ...USDTConfig,
    functionName: '_totalSupply',
  })
  console.log(data)
  return (
    <div>
      <Heading>ERC20_USDC _totalSupply: {data?.toString()}</Heading>
    </div>
  )
}

export default function ReadCont() {
  return (
    <div>
      <div>
        <ReadName />
        <Decimals />
        <ReadBalanceOf />
        <Allowance />
        <TotalSupply />
      </div>
    </div>
  )
}
