
import { Box } from "@mui/material";



const items= [
  'tomato',
  'potato', 
  'onion',
  'garlic',
  'ginger',
  'carrot'
]
export default function Home() {
  return( <Box
    width = "100vw"
    height = "100vh"
    display = {'flex'}
    justifyContent = {'center'}
    alignItems={'center'}
  > Hello World</Box>
  )
}
