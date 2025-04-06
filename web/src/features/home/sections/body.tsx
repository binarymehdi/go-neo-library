import { useState,useEffect } from "react";

import { mockData } from "../sections/mockdata.json";

import { Box, Typography, Grid, Button } from "@mui/material";
import image1 from "../../../assets/download.jpeg";

export default function HeroBanner() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setData(mockData);
      console.log("dataaa",mockData);
    }, 1000); // Simulate a 1 second delay
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
            <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2, display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <img src={image1} alt={item.title} style={{ width: "200px", borderRadius: "8px" }} />
              
             <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 2, gap: 1 }}>
            <Button variant="contained" color="primary" key={index} style={{ marginTop: "10px" }}>  
              delete
            </Button>
            <Button variant="contained" color="primary" key={index} style={{ marginTop: "10px" }}>  
              edit
            </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" color="primary" key={index} style={{ marginTop: "10px" }}>  
              view book
            </Button>
            </Box>
        ))}
      </Grid>
    </Box>
  );
}