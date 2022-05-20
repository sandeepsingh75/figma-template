import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";
import p8 from "../../images/p8.png";

// const useStyle = makeStyles({
//     product:{
//         position:"absolute",
//         top:"110rem"
//     }
// })

const Products = () => {
  //   const classes = useStyle();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "108rem",
      }}
    >
      <Typography varient="h1">New Products</Typography>
      <Button varient="text" color="inherit">
        All Products
      </Button>
      <Button varient="text" color="inherit">
        T-Shirt
      </Button>
      <Button varient="text" color="inherit">
        Hoodies
      </Button>
      <Button varient="text" color="inherit">
        Jacket
      </Button>
      <Button variant="contained" color="success" sx={{ marginLeft: "46rem" }}>
        {" "}
        <FilterAltIcon /> Filter
      </Button>

      <Grid container sx={{marginTop:2}} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={3} >
          <Card sx={{ maxWidth: 345 }}>
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
        <Grid item md={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={p5}
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
                image={p6}
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
                image={p7}
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
                image={p8}
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
                  Dress
                  <Typography variant="span" sx={{ marginLeft: 20 }}>
                    $63.85
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

export default Products;
