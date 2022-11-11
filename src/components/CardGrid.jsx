import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import data from "../data";

export default function CardGrid() {
  return (
    <>
      <Typography cariant="h4" color="error" align="center" m={4}>
        CARD And GRID
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((card) => {
          const { id, text, img, name } = card;
          return (
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={img}
                    alt="img"
                    sx={{ maxWidth: "200px", margin: "auto" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" fullWidth>
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
