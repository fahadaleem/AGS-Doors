import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Button
} from "@material-ui/core";
import WhyUsSideImage from "../../assests/Layer 16@1X.png"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 150px",
    paddingRight:"0 !important",
    backgroundColor:"#E5E3FF",
    [theme.breakpoints.down('xs')]:{
      paddingTop:"40px !important",
      paddingLeft:"20px !important",
      paddingRight:"20px !important"
    }, 
    [theme.breakpoints.down('md')]:{
      paddingTop:"40px !important",
      paddingLeft:"20px !important",
      paddingRight:"20px !important"
    }
   
  },
  sectionHeading: {
    fontSize: "34px",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down('xs')]:{
      fontSize:"20px"
    }, 
    [theme.breakpoints.down('md')]:{
      fontSize:"22px"
    }
  },
  image:{
      width:"80% !important"
  },
  ourServiceBtn:{
    width:"266px",
    height:"61px", 
    backgroundColor:"#1A519B", 
    color:"white",
    fontSize:"22px", 
    borderRadius:"10px", 
    '&:hover':{
    backgroundColor:"#4082db", 
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:"16px", 
      width:"230px",
      height:"50px", 
      marginBottom:"30px"
    }
}, 
bookaServiceBtnDiv:{
  [theme.breakpoints.down('xs')]:{
    textAlign:"center"
  }
},
  // leftContent:{
  //   paddingRight:"40px"
  // }
}));

const WhyUs = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl"  className={classes.root} >
      <Grid container spacing={10} alignItems="center">
        <Grid item lg={6} md={6} sm={12} xs={12} className={classes.leftDiv}>
          <Typography
            variant="h2"
            color="initial"
            className={classes.sectionHeading}
          >
            Why Us
          </Typography>
          <Box my={3} className={classes.leftContent}>
            <Typography variant="p" component="p" color="initial">
              When you need your door repaired or installed, you need it done
              now and that makes it difficult to vet out the real professionals
              from the amateurs. A quick search on the internet shows many local
              professionals and companies who claim to know how to do the job,
              but did you know that garage door repairs is a licensable trade?
              There is enough to the matter that requires mechanical and
              electrical training to know how to properly fix or install an
              electric garage door. But since anyone can technically post a
              service ad and claim to be an expert, you could potentially hire
              someone without really knowing their experience level. Often this
              is precisely what happens. <br />
              <br />
              American Service Garage Doors and Gates was born to remedy this
              very gap in the industry. Not only are we licensed and have the
              experience and professionalism to do the job right, we also have
              thousands of positive reviews from customers just like you. This
              means you can take the guess-work right out of wondering if we’re
              fit for the job – we literally have the references right at the
              tip of your fingers to show you that we do!
              <br />
              <br />
              At ASG Doors and Gates, we are licensed professionals with years
              of experience fixing all kinds of garage doors. When you reach out
              to us, we assess the problem and schedule the closest same-day
              appointment. Then we show up to get the job done right the first
              time around, all within the hour. Our service is available 24/7,
              and we pride ourselves for the value we provide to our customers.
              All this for a fraction of the cost you would end up spending with
              anyone else.
            </Typography>
          </Box>
            <Box className={classes.bookaServiceBtnDiv}>
            <Button className={classes.ourServiceBtn} variant="contained" >
              Book a Service
            </Button>
            </Box>
        </Grid>
        <Grid item lg={6} lg={6} md={6} sm={12} xs={12} style={{textAlign:"right"}}>
            <img src={WhyUsSideImage} alt="why-us" className={classes.image} />
        </Grid>

      </Grid>
    </Container>
  );
};

export default WhyUs;
