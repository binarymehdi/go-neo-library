"use client"

import { useState, useEffect } from "react"
import { mockData } from "../sections/mockdata.json"
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Fade,
  Chip,
  IconButton,
} from "@mui/material"
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";
import image1 from "../../../assets/download.jpeg"

export default function HeroBanner() {
  const [data, setData] = useState<any[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setData(mockData)
    }, 1000)
  }, [])

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        background: "linear-gradient(145deg, #f6f8fb 0%, #e9f1f9 100%)",
        borderRadius: 3,
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          textAlign: "center",
          color: "#1a365d",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Featured Books Collection
      </Typography>

      <Grid container spacing={4}>
        {data.length === 0 ? (
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", p: 5 }}>
            <Typography variant="h6" color="text.secondary">
              Loading books...
            </Typography>
          </Box>
        ) : (
          data.map((item, index) => (
              <Fade in={true} timeout={500 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                        : "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                    transform: hoveredIndex === index ? "translateY(-8px)" : "none",
                    position: "relative",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={image1}
                      alt={item.title}
                      sx={{
                        objectFit: "cover",
                        filter: hoveredIndex === index ? "brightness(90%)" : "brightness(100%)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <IconButton
                        sx={{
                          bgcolor: "rgba(255,255,255,0.9)",
                          "&:hover": { bgcolor: "white" },
                        }}
                      >
                        <BookmarkIcon color="primary" />
                      </IconButton>
                    </Box>
                    <Chip
                      label="Featured"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        fontWeight: "bold",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#2d3748",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: 2, pt: 0, justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="info"
                        startIcon={<EditIcon />}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                        }}
                      >
                        Edit
                      </Button>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<VisibilityIcon />}
                      sx={{
                        borderRadius: 2,
                        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                          boxShadow: "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      View Book
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
          ))
        )}
      </Grid>
    </Box>
  )
}

