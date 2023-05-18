/* eslint-disable */
import React from 'react'
import axios from 'axios'
import { Button, Text, Heading, ListItem, UnorderedList, Input, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { stringify } from 'viem'
import DataReuqest from './karat-acc'
import CheckC from './karat-checkC'
import InputHex from './karat-input'

export default function KaratDAO() {
  return (
    <div>
      <Heading as="h1" fontSize="xl" my={4}>
        妈妈, 我是 karatDAO 交互小工具
      </Heading>
      <div>
        <DataReuqest />
      </div>{' '}
      <div>
        <InputHex />
      </div>
      <div>
        <CheckC />
      </div>
    </div>
  )
}
