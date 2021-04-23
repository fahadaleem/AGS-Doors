import React from "react"
import {Container, Grid, makeStyles, Typography, Link, Box} from '@material-ui/core'
import CompanyLogo from "../../assests/logo.png"


const useStyles = makeStyles(theme=>({
    root:{
        padding:"100px 130px", 
        backgroundColor:"#E5E3FF", 
        [theme.breakpoints.down('xs')]:{
            padding:"30px 40px"
        }
    }, 
    companyLogo:{
        width:"100%", 
        margin:"15px 0"
    }, 
    companyStatement:{
        fontSize:"14px"
    }, 
    footerLinks:{
        color:"black", 
    }, 
    footerLinksText:{
        margin:"10px 0", 
        fontWeight:"normal",
        fontSize:"14px"
    }
}))

const Footer = ()=>{
    const classes = useStyles()
    return (
        <Container maxWidth="xl" className={classes.root}>
          <Grid container spacing={7} justify="space-between">
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={CompanyLogo} alt="company-logo" className={classes.companyLogo} />
                <Typography variant="p" component="p" color="initial" className={classes.companyStatement}>What makes us so awesome and why should you fill out that form? Because we have thousands of satisfied customers to vouch for our track record. Nothing beats consistently amazing service, and we have the reviews to show for it. </Typography>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
                <Grid container justify="space-between">
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Typography variant="h6" color="initial">Navigation</Typography>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Home</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Service</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>About Us</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Book Service</Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Typography variant="h6" color="initial">Company</Typography>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Contact Us</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>FAQs</Typography>
                        </Link>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Typography variant="h6" color="initial">Social</Typography>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Facebook</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Instagram</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Google Plus</Typography>
                        </Link>
                        <Link className={classes.footerLinks}>
                            <Typography variant="h6" color="initial" className={classes.footerLinksText}>Twitter</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
         <Box my={3}>
         <Grid container justify="space-between" alignItems="center">
                <Grid item lg={3}>
                    <Typography variant="h6" color="initial">© 2021  All Rights Reserved</Typography>
                </Grid>
                <Grid item lg={4}>
                   <Link className={classes.footerLinks}><Typography variant="h6" color="initial" className={classes.footerLinksText} display="inline">Terms and Conditions</Typography></Link>
                   <Link className={classes.footerLinks}><Typography variant="h6" color="initial" className={classes.footerLinksText} display="inline" style={{marginLeft:"35px"}}>Privacy Policy</Typography></Link>
                
                </Grid>
          </Grid>
         </Box>
        </Container>
    )
}

export default Footer