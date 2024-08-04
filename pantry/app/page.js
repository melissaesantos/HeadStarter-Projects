"use client"

import { Box, Stack, Typography } from "@mui/material"
import {firestore} from '@/firebase'
import {collection} from 'firebase/firestore'
import { useEffect } from "react";

const items= ['tomato','potato', 'onion','garlic', 'ginger','carrot', 'apple','oranges'
]
export default function Home() {
  useEffect(async() =>{
    const snapshot = query(collection(firestore,'pantry'))
    const  docs = await getDocs(snapshot)
  }, [] )
    
  return( <Box
    width = "100vw"
    height = "100vh"
    display = {'flex'}
    justifyContent = {'center'}
    flexDirection = {'Column'}
    alignItems={'center'}
  > 
  <Box border = {'1px solid #333'}>
  <Box width = "800px" height = "100px" bgcolor = {'#FEEAFA'} 
  display = {'flex'} 
  justifyContent = {'center'}
  alignItems = {'center'}
  border = {'1px solid #333'}
  > <Typography variant ={'h3'} color = {'#000'} textAlign = {'center'} >
    Pantry Items
  </Typography>
   
  
  </Box>
  <Stack width = '800px' height = '300px' spacing = {.5} overflow = {'scroll'}
   >
    {items.map((i) => (
      <Box 
      key= {i}
      width = "100%"
      height = "300px"
      display = {'flex'}
      justifyContent = {'center'}
      alignItems={'center'}
      bgcolor = {'#DEE2FF'}
    >
      <Typography variant = {'h4'}
      color = {'#333'}
      textAlign = {'center'}
      
      >{
        i.charAt(0).toUpperCase() + i.slice(1)
      }</Typography>
      
    </Box>
    ))}
  
  </Stack>
  </Box> 
  </Box>
  
  
  )
  
}
