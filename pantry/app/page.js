
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
  > <Stack width = '800px' height = '300px' spacing = {2} overflow = {'scroll'}> 
    {items.map((i) => (
      <Box 
      key= {i}
      width = "100%"
      height = "300px"
      display = {'flex'}
      justifyContent = {'center'}
      bgcolor = {'#8DA9C4'}
    >
      <Typography variant = {'h4'}
      color = {'#333'}
      textAlign = {'center'}
      fontWeight = {'bold'}
      >{i}</Typography>
      
    </Box>
    ))}
  
  </Stack> </Box>
  )
}
