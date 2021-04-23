import React from "react"
import {Container, Typography, makeStyles, Grid, Box} from '@material-ui/core'
import Calender from "../../assests/calendar.svg"
import TwentyFour from "../../assests/24-hours@1X.png"
import License from "../../assests/licensing@1X.png"
import BackInTime from "../../assests/back-in-time@1X.png"
import Team from "../../assests/team@1X.png"
import Rating from "../../assests/rating@1X.png"


const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:"#25B0FF", 
        padding:"100px 150px", 
        [theme.breakpoints.down('xs')]:{
            padding:"30px 40px"
        }, [theme.breakpoints.down('md')]:{
            padding:"30px 40px"
        }
    }, 
    textHeading:{
        fontSize:"34px", 
        textAlign:"center", 
        fontWeight:"bold", 
        color:"white", 
        [theme.breakpoints.down('xs')]:{
            fontSize:"20px"
          }, 
          [theme.breakpoints.down('md')]:{
            fontSize:"22px"
          }
    },
    servicesTitle:{
        padding:"10px 0",
        fontSize:"22px", 
        color:"white"
    }, 
    serviceContent:{
        color:"white", 
        fontSize:"14px !important"
    }
}))

const WhatMakes = ()=>{
    const classes = useStyles()
    return(
        <Container maxWidth="xl" className={classes.root}>
          <Typography variant="h2" color="initial" className={classes.textHeading}>What makes us your best choice?</Typography>
           <Box my={4} py={4}>
           <Grid container spacing={10}>
                <Grid item lg={4} md={4} sm={6} xs={12} style={{textAlign:"center"}}>
                    <img src={Calender} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>Same-day service</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent} display="block">Our service is fast and reliable. Just fill out the form and wait for someone to call in a matter of hours.</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12} style={{textAlign:"center"}}>
                    <img src={TwentyFour} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>24/7 support</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent}>Our customer service support team is available around the clock. Give us a call any day, any time.</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}  style={{textAlign:"center"}}>
                    <img src={License} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>Licensed experts</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent}>All of the professionals within our network are licensed and trained experts.</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}  style={{textAlign:"center"}}>
                    <img src={BackInTime} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>Repair within an Hour</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent}>We work quickly and efficiently. This means that we come with all of our tools, assess the problem, and complete the repair within an hour.</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}  style={{textAlign:"center"}}>
                    <img src={Team} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>Thousands of highly trained local professionals</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent}>A wide network means you receive prompt and efficient service.</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}  style={{textAlign:"center"}}>
                    <img src={Rating} alt="icon" />
                    <Typography variant="h5" color="initial" className={classes.servicesTitle}>Rave reviews</Typography>
                    <Typography variant="p" color="initial" className={classes.serviceContent}>How do you know to trust us without customer reviews? You don’t. We have many, many customer reviews for you to trust instead. Don’t take our word for it! See what others like you have experienced.</Typography>
                </Grid>
              </Grid>
           </Box>
        </Container>
    )
}

export default WhatMakes