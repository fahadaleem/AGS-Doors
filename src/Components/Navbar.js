import React from "react"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {Typography, makeStyles, Grid} from '@material-ui/core'
import Logo from "../assests/Layer 2.svg"
import NavMenu from "./NavMenu"


const useStyles = makeStyles(theme=>({
    root:{
        boxShadow:"0 !important",
        backgroundColor:"white",
        padding:"10px 55px !important", 
    }, 
    logoImage:{
        maxWidth:"100%",
        height:"61px"
    }, 
    licenseNo:{
        color:"#0C86E9"
    }
  
}))

const Navbar = ()=>{
    const classes = useStyles()
    return (
        <AppBar position="relative" className={classes.root} elevation={0}>
          <Toolbar>
            <Grid container spacing={3} alignItems="center">
                <Grid item lg={3} sm={4} md={3} xs={6} >
                {/* <img src={Logo} alt="top-logo" className={classes.logoImage}/> */}
                <Typography variant="h4" color="initial" style={{color:"#0C86E9"}} align="right">AGS DOORS</Typography>
                <Typography variant="p" display="block" align="right" className={classes.licenseNo}>Lic: #1073912</Typography>
                </Grid>
                <Grid item lg={9} sm={4} md={9} xs={6}>
                    <NavMenu />
                </Grid>
            </Grid>            
          </Toolbar>
        </AppBar>
    )
}


export default Navbar