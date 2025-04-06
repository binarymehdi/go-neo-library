"use client"

import { Box, Typography, Button, Container, Paper } from "@mui/material"

export default function HeroBanner() {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(/placeholder.svg?height=500&width=1200)`,
        height: { xs: "300px", md: "400px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      />
      <Container
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "60%" } }}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Discover a World of Knowledge
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Explore our collection of books, at GOLibrary
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" size="large" sx={{ mr: 2, mb: 1 }}>
              Browse Catalog
            </Button>
            <Button variant="outlined" size="large" sx={{ color: "white", borderColor: "white", mb: 1 }}>
              Become a Member
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}

