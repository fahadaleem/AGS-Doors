import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, makeStyles, Box } from "@material-ui/core";
// import OurServiceImage from "../../assests/Layer 14@1X.png"
import Warehouse from "../../assests/warehouse@1X.png";
import Garage from "../../assests/garage@1X.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F3F5",
    padding: "100px 150px",
    paddingLeft: "0 !important",
    paddingTop:"0 !important",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 12px",
    },
  },
  rightSideImage: {
    width: "100%",
  },
  sideDiv: {
    // background:`linear-gradient(10deg, rgba(255, 0, 150, 0.1), rgba(255, 0, 150, 0.8)), url(${OurServiceImage})`,
    background: `linear-gradient(90deg, rgba(37, 197, 255,0.8), rgba(37, 197, 255,0.8)), url('Layer 14@1X.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
    width:"100%",
    [theme.breakpoints.down('xs')]:{
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    }
  },
  ourserviceIcons: {
    height: "58px",
    width: "54px",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#081221",
  },
  ourServiceHeadings: {
    fontWeight: "bold",
    fontSize: "24px",
    margin: "15px 0",
  },
  ourService:{
      fontWeight:"bold", 
      color:"white",
      padding:"200px 50px", 
      [theme.breakpoints.down('xs')]:{
      padding:"200px 30px", 
        
      }
  }
}));

const OurService = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12} className={classes.sideDiv}>
          {/* <img src={OurServiceImage} alt="our-service" className={classes.rightSideImage} /> */}
        <Typography variant="h3" color="initial" className={classes.ourService}>Our Services</Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box px={2}>
            <Box>
              <img
                src={Warehouse}
                alt="ware-house"
                className={classes.ourserviceIcons}
              />
              <Typography
                variant="h5"
                color="initial"
                className={classes.ourServiceHeadings}
              >
                Residential Garage Doors
              </Typography>
              <Typography variant="p" component="p" color="initial">
                Whether you are a homeowner or tenant, having a faulty garage
                door can be worrisome. Get in touch with us to have your door
                repaired quickly and efficiently.
              </Typography>
            </Box>
            <Box my={4}>
              <Box>
                <img
                  src={Garage}
                  alt="ware-house"
                  className={classes.ourserviceIcons}
                />
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.ourServiceHeadings}
                >
                  Commercial Garage Doors
                </Typography>
                <Typography variant="p" component="p" color="initial">
                  There are added levels of security and safety concerns related
                  to garage doors in commercial establishments. Whether you are
                  the owner of the building, security personnel, or building
                  management, the longer that door remains inoperable or faulty,
                  the greater the consequences to yourself and others.
                  Everything from occupant and visitor convenience to the
                  buildings safety and security are jeopardized. We understand
                  the predicament and will work with you to prioritize your
                  needs.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurService;
