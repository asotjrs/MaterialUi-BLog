import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container,Box,Grid,Card,CardContent,CardMedia,CardActionArea,CardActions,Avatar} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
 appBar:{
   backgroundColor:"#fff"
 },
  hero:{
   backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
   url('https://alfacom.ee/wp-content/uploads/2019/09/cisco-sdn-500x300.jpg')`,
    height:"500px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    fontsize: '4rem'
  },
  blogsContainer:{
   paddingTop:theme.spacing(3)
  },
  blogTitle:{
    fontWeight:800,
    paddingBottom:theme.spacing(3)
  },
  card:{
   maxWidth:"100%"

  },
  media:{
   height: 240
  },
  cardActions:{
   display: "flex",
    margin:"0 10",
    justifyContent: "space-between"
  },
  author:{
   display:"flex"
  },
  paginationContainer:{
   display:"flex",
    justifyContent:"center"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h4" color={"primary"} >
            The 10x Engineers community
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box >
          <h1 style={{fontSize:"50px"}}>
            10x Engineers Community
          </h1>
        </Box>
      </Box>
      <Container maxWidth={"lg"} className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle} >
        Articles
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image="https://optace.co.ke/wp-content/uploads/2019/04/Cisco-Catalyst-2960X-48FPS-L-Switch-1-800x324.jpg"
                  title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={"https://asotjrs.github.io/Djafer-Abdelhadi/assets/profile.07ff80112d7d417b448ebd588f44210b.jpg"} />
                  <Box ml={2}>
                    <Typography gutterBottom variant="subtitle2" component="p">
                    Djafer Abdelhadi
                  </Typography>
                    <Typography gutterBottom variant="subtitle2" color={"textSecondary"} component="p">
                    May 14th 2020
                  </Typography>

                  </Box>
                </Box>
              <Box>
              <BookmarkBorderIcon/>
              </Box>
            </CardActions>
          </Card>
        </Grid>

        </Grid>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10}/>

      </Box>
      </Container>
    </div>
  );
}

export default App;
