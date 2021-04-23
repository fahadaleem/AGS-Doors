import React from "react";
import {
  Link,
  makeStyles,
  Button,
  MenuItem,
  Menu,
  Hidden,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: "black",
    marginRight: "80px !important",
    textDecoration: "none",
  },
}));

const NavMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Hidden smDown xsDown>
        <nav style={{ textAlign: "right" }}>
          <Link href="#" className={classes.navLink}>
            Home
          </Link>
          <Link href="#" className={classes.navLink}>
            About Us
          </Link>
          <Link href="#" className={classes.navLink}>
            Services
          </Link>
          <Link href="#" className={classes.navLink}>
            Testimonials
          </Link>
        </nav>
      </Hidden>

      <Hidden mdUp lgUp>
        <div style={{ textAlign: "right" }}>
          <IconButton aria-label="toggler" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {" "}
              <Link href="#" className={classes.navLink}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#" className={classes.navLink}>
                About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link href="#" className={classes.navLink}>
                Services
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link href="#" className={classes.navLink}>
                Testimonials
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </Hidden>
    </div>
  );
};

export default NavMenu;
