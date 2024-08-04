"use client"

import { Box, Stack, Typography } from "@mui/material";
import { firestore } from '@/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from "react";

export default function Home() {
  const [pantry, setPantry] = useState([]);

  useEffect(() => {
    const updatePantry = async () => {
      try {
        const snapshot = query(collection(firestore, 'pantry'));
        const docs = await getDocs(snapshot);
        const pantryList = [];
        docs.forEach((doc) => {
          pantryList.push(doc.id); // or doc.data().itemName if you want specific fields
        });
        console.log(pantryList);
        setPantry(pantryList);
      } catch (error) {
        console.error("Error fetching pantry items:", error);
      }
    };
    updatePantry();
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box border="1px solid #333">
        <Box
          width="800px"
          height="100px"
          bgcolor="#FEEAFA"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid #333"
        >
          <Typography variant="h3" color="#000" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <Stack
          width="800px"
          height="300px"
          spacing={0.5}
          overflow="scroll"
        >
          {pantry.map((i) => (
            <Box
              key={i}
              width="100%"
              minHeight="100px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#DEE2FF"
            >
              <Typography variant="h4" color="#333" textAlign="center">
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
