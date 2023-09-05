'use client'

import Link  from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";


const loginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })


  const onLogin = async () => {
    
  }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // signup logic here
    };

  return (
    <div className='container'>
      <h1 className='site_title'>Login</h1>
      <div>
      <Box p={8} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button onClick={onLogin} type="submit" colorScheme="teal">
            Login
          </Button>
          <p>Not A User<Link href={'/signup'}>&nbsp;Sign Up&nbsp;</Link> Now</p>
        </VStack>
      </form>
    </Box>
      </div>
    </div>
  )
}

export default loginPage