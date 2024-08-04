
import { Box, Stack, Typography } from "@mui/material";



const items= ['tomato','potato', 'onion','garlic', 'ginger','carrot', 'apple','oranges'
]
export default function Home() {
  return( <Box
    width = "100vw"
    height = "100vh"
    display = {'flex'}
    justifyContent = {'center'}
    alignItems={'center'}
  > 
  <Box width = "800px" height = "800px"> 
  
  
  </Box>
  <Stack width = '800px' height = '300px' spacing = {2} overflow = {'scroll'}> 
    {items.map((i) => (
      <Box 
      key= {i}
      width = "100%"
      height = "300px"
      display = {'flex'}
      justifyContent = {'center'}
      alignItems={'center'}
      bgcolor = {'#8DA9C4'}
    >
      <Typography variant = {'h2'}
      color = {'#333'}
      textAlign = {'center'}
      
      >{
        i.charAt(0).toUpperCase() + i.slice(1)
      }</Typography>
      
    </Box>
    ))}
  
  </Stack> </Box>
  )
}
