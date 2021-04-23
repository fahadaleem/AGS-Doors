import React from "react"
import {Container,makeStyles, Typography} from '@material-ui/core'
import SlickSlider from "./Slider"


const useStyles = makeStyles(theme=>({
        root: {
            // padding: "100px 150px",
            // [theme.breakpoints.down("sm")]: {
            //   padding: "20px 40px",
            // },
            // [theme.breakpoints.down("xs")]: {
            //     padding: "20px 40px",
            //   },
            // paddingRight:"0 !important",
            overflow:"hidden !important", 
            margin:"40px 0"
          },
    testmonialHeading: {
        fontWeight: "bold",
        margin: "15px 0",
      },
}))

const Testmonials = ()=>{
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>
           <Typography
        variant="h4"
        color="initial"
        align="center"
        className={classes.testmonialHeading}
      >
        What Our Customer Says
      </Typography>
      <SlickSlider />
        </Container>
    )
}

export default Testmonials