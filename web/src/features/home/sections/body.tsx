import { useState,useEffect } from "react";

import { mockData } from "../sections/mockdata.json";

import { Box, Typography, Grid } from "@mui/material";
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
            <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <img src={image1} alt={item.title} style={{ width: "200px", borderRadius: "8px" }} />
            </Box>
        ))}
      </Grid>
    </Box>
  );
}