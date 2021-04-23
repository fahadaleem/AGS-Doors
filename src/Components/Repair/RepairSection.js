import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Box,
  Button,
  Container,
} from "@material-ui/core";
import RepairImage from "../../assests/repair-side-image.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "30px 10px",
    },
    paddingBottom: "0 !important",
  },
  //   repairHeading: {
  //     width: "60%",
  //     margin: "0 auto",
  //     [theme.breakpoints.down("xs")]: {
  //       fontSize: "18px",
  //     },
  //     [theme.breakpoints.down("sm")]: {
  //       fontSize: "24px",
  //     },
  //     [theme.breakpoints.down("md")]: {
  //       fontSize: "28px",
  //     },
  //   },
  repairHeading: {
    fontSize: "34px",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
  },

  container: {
    margin: "50px 0 0 0",
    paddingRight: "150px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
    },
  },
  repairSideImage: {
    height: "auto",
    width: "100%",
    clipPath: "polygon(0 0, 66% 0, 100% 100%, 0% 100%)",
    [theme.breakpoints.up("xl")]: {
      width: "80%",
    },
  },
  ourServiceBtn: {
    width: "266px",
    height: "61px",
    backgroundColor: "#1A519B",
    color: "white",
    fontSize: "22px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#4082db",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      width: "230px",
      height: "50px",
      marginBottom: "30px",
    },
  },
  ourServiceBtnDiv: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

const RepairSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Typography
          variant="h3"
          color="initial"
          align="center"
          className={classes.repairHeading}
        >
          Repairs By ASG Doors and Gates
        </Typography>
        <Typography
          variant="h3"
          color="initial"
          align="center"
          className={classes.repairHeading}
        >
          It's What We Do Best!
        </Typography>

        <Grid container className={classes.container}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box pt={1}>
              <img
                src={RepairImage}
                alt="repair"
                className={classes.repairSideImage}
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box px={2} py={2} className={classes.sideContent}>
              <Typography variant="p" color="initial" display="block">
                When you think about a garage door, what comes to mind? This
                simple feature to your home or commercial building really has
                two important jobs: going up and coming down. They really don’t
                have much character than that, do they? But neither does a body
                guard until you need their service, or if one isn’t around when
                you really need them to be. <br />
                <br />
                This simple feature of any home or building may not have much
                else to do, but it’s performing a very important function:
                Keeping you, your family, your home and your possessions safe
                and secure. They keep out intruders of all kinds: People, pests,
                and unwelcome weather. It’s only when they stop doing their
                rather simple job (go up, come down!), that you realize how
                important the role really is. And how much you take for granted
                that they can go up and down with the click of a few buttons.
                <br />
                <br />
                At American Service Garage Doors and Gates, we operate with your
                safety and a high standard of service in mind. We are licensed
                experts who are knowledgeable on exactly what you need, and can
                get the job done right. Garage doors and gates may be rather
                bland to anyone else, but it’s all that we do, all day, every
                day, here at ASG Doors and Gates.
              </Typography>
            </Box>
            <Box p={4} className={classes.ourServiceBtnDiv}>
              <Button className={classes.ourServiceBtn} variant="contained">
                Our Services
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RepairSection;
