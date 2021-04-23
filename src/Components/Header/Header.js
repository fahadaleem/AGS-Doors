import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import HeaderImage from "../../assests/Layer 3@1X.png"

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0 !important",
    
    
  },
  leftSide: {
    background: `linear-gradient(90deg, rgba(38, 147, 255,0.8), rgba(38, 147, 255,0.8)), url('Layer 17@1X.png')`,
    backgroundPosition: "center",
    // height:"250px",
    padding: "60px 20px 20px 105px",
    width:"150%",

    [theme.breakpoints.down('xs')]:{
    padding: "60px 20px 20px 35px",

    }
    
  },
  logo: {
    fontSize: "44px",
    fontWeight: "bold",
    color: "white",
  },
  tagLine: {
    fontSize: "18px",
    color: "white",
  },
  callBtn: {
    backgroundColor: "white",
    padding: "10px 50px",
    borderRadius: "10px",
    fontSize: "16px",
  },
  headerImage:{
      width:"100%", 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 38% 100%)'
  }, 
  ourServiceBtn:{
    width:"200px",
    height:"52px", 
    backgroundColor:"#1A519B", 
    color:"white",
    fontSize:"16px", 
    borderRadius:"10px", 
    
    '&:hover':{
    backgroundColor:"#4082db", 

    },
    [theme.breakpoints.up('xl')]:{
      position:"relative",
     top:"-200px",
     left:"600px",
    },
    [theme.breakpoints.up('lg')]:{
      position:"relative",
     top:"-150px",
     left:"340px",
    },
    [theme.breakpoints.up('md')]:{
      position:"relative",
     top:"-120px",
     left:"340px",
    },
    [theme.breakpoints.up('sm')]:{
      position:"relative",
     top:"-120px",
     left:"340px",
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:"16px", 
      width:"180px",
      height:"50px", 
      marginBottom:"30px", 
      position:"relative",
     top:"-100px",
     left:"150px",
    }
},
}));

const Header = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container alignItems="center">
        <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.leftSide}>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.tagLine}
            >
              Get it done right within an hour
            </Typography>
            <Typography variant="h4" color="initial" className={classes.logo}>
              AGS DOORS
            </Typography>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.tagLine}
            >
              American Service Garage Doors and Gates: <br></br>Experts at your
              service!
            </Typography>
            <Box my={2}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                className={classes.callBtn}
              >
                +456985-632
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} style={{padding:"0"}}>
            <img src={HeaderImage} alt="header-image" className={classes.headerImage} />
            <Box p={4} className={classes.ourServiceBtnDiv}>
            <Button startIcon={<PhoneIcon />} className={classes.ourServiceBtn} variant="contained" >
              Call Now
            </Button>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
