import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";
import p8 from "../../images/p8.png";

const SliderProducts = () => {
  return (
    <Box sx={{ position: "absolute", top: "177rem" }}>
      <Typography variant="h4" component="div" sx={{ marginLeft: 70 }}>
        {" "}
        Best Sellers
      </Typography>
      <Button variant="text" color="inherit">
        All Products
      </Button>
      <Button variant="text" color="inherit">
        T-Shirt
      </Button>
      <Button variant="text" color="inherit">
        Hoodies
      </Button>
      <Button variant="text" color="inherit">
        Jacket
      </Button>
      <Button variant="text" color="inherit" sx={{ marginLeft: "50rem" }}>
        Show All
      </Button>

      <Grid container sx={{height:500 , marginTop:2, background:'red'}}>
        <Grid item md={3} sx={{height:400}}>
          <Card sx={{ maxWidth: 345, height:400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={p1}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Adicolor Classics Joggers
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Dress{" "}
                  <Typography variant="span" sx={{ marginLeft: 20 }}>
                    {" "}
                    $63.85{" "}
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" component="div"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={p2}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Adicolor Classics Joggers
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Dress{" "}
                  <Typography variant="span" sx={{ marginLeft: 20 }}>
                    {" "}
                    $63.85{" "}
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" component="div"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={p3}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Adicolor Classics Joggers
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Dress{" "}
                  <Typography variant="span" sx={{ marginLeft: 20 }}>
                    {" "}
                    $63.85{" "}
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" component="div"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={p4}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Adicolor Classics Joggers
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 1 }}
                >
                  Dress{" "}
                  <Typography variant="span" sx={{ marginLeft: 20 }}>
                    {" "}
                    $63.85{" "}
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" component="div"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderProducts;
