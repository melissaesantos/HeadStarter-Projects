"use client"

import { Box, Stack, Typography, Button, Modal, TextField } from "@mui/material";
import { firestore } from '@/firebase';
import { collection, getDocs, query, addDoc,deleteDoc ,doc, setDoc,docSnap,getDoc} from 'firebase/firestore';
import { useEffect, useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

export default function Home() {
  const [pantry, setPantry] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState(''); // State to track the item name

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updatePantry = async () => {
    try {
      const snapshot = query(collection(firestore, 'pantry'));
      const docs = await getDocs(snapshot);
      const pantryList = [];
      docs.forEach((doc) => {
        pantryList.push({name:doc.id, ...doc.data()}); // or doc.data().itemName if you want specific fields
      });
      console.log(pantryList);
      setPantry(pantryList);
    } catch (error) {
      console.error("Error fetching pantry items:", error);
    }
  };
  useEffect(() => {
    updatePantry();
  }, []);

  const addItem = async (itemName) => {
    const docRef = await doc(collection(firestore, 'pantry'),itemName)
    const docSnap = await getDoc(docRef)
    console.log(docSnap.data())
    await setDoc(docRef,{count:1})
    await updatePantry()
  }
  const removeItem = async(itemName) => {
    const docRef = doc(collection(firestore,"pantry"),itemName)
    await deleteDoc(docRef)
    await updatePantry()
    
    
  }


  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap={2}
      alignItems="center"
    >
      <Button onClick={handleOpen}>Add Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Item
          </Typography>
          <Stack width="100%" direction={'row'} spacing={1}>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                addItem(itemName);
                //this makes what we previously typed in the box disappear for the next time
                //we want to add something
                setItemName('');
                handleClose();
              }}
            >
              ADD
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Box border="1px solid #333" width="800px">
        <Box
          width="100%"
          height="100px"
          bgcolor="#FEEAFA"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid #333"
        >
          <Typography variant="h4" color="#000" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <Stack
          width="100%"
          height="300px"
          spacing={0.5}
          overflow="scroll"
        >
          {pantry.map(({name,count}) => (
       
            <Box
              key={name}
              width="100%"
              minHeight="150px"
              display={"flex"}
              justifyContent="space-between"
              alignItems="center"
              bgcolor="#DEE2FF"
              paddingX = {5}
            
            >
              <Typography variant="h4" color="#333" textAlign="center">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>

              <Typography variant = {'h6'} color = {'#333'} textAlgin = "center">
                Quantity: {count}
              </Typography>
  
            <Button variant= 'contained' onClick={() => removeItem(name)}>
                Remove
            </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
