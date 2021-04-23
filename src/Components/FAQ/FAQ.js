import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  Box,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import MinimizeIcon from "@material-ui/icons/Minimize";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "100px 150px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 40px",
    },
  },

  faqHeading: {
    fontWeight: "bold",
    margin: "15px 0",
  },
  accordian: {
    padding: "20px",
    border: "1px solid black",
    margin: "20px 0",
  },
  accordianSummary: {
    fontWeight: "bold",
    fontSize: "22px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  accordianDescription: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  getQouteBtn: {
    backgroundColor: "#1A519B",
    width: 290,
    height: 61,
    fontSize: "22px",
    color: "white",
    [theme.breakpoints.down('xs')]:{
      fontSize:"16px", 
      width:"230px",
      height:"50px", 
      marginBottom:"30px"
    }
  },
}));

const FAQ = () => {
  const classes = useStyle();

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography
        variant="h4"
        color="initial"
        align="center"
        className={classes.faqHeading}
      >
        FAQ
      </Typography>
      <Box my={4}>
        <Accordion
          className={classes.accordian}
          onChange={() => {
            setExpanded1(!expanded1);
          }}
        >
          <AccordionSummary
            expandIcon={expanded1 ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="initial"
              className={classes.accordianSummary}
            >
              My door stopped working and it’s pretty late at night. Can you
              have someone over now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.accordianDescription}
            >
              Absolutely! We understand that emergencies don’t arrive announced,
              so we are ready to get to work as soon as we reasonably can. Fill
              out the form or give us a call to discuss the issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordian}
          onChange={() => {
            setExpanded2(!expanded2);
          }}
        >
          <AccordionSummary
            expandIcon={expanded2 ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="initial"
              className={classes.accordianSummary}
            >
              My door stopped working and it’s pretty late at night. Can you
              have someone over now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.accordianDescription}
            >
              Absolutely! We understand that emergencies don’t arrive announced,
              so we are ready to get to work as soon as we reasonably can. Fill
              out the form or give us a call to discuss the issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordian}
          onChange={() => {
            setExpanded3(!expanded3);
          }}
        >
          <AccordionSummary
            expandIcon={expanded3 ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="initial"
              className={classes.accordianSummary}
            >
              My door stopped working and it’s pretty late at night. Can you
              have someone over now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.accordianDescription}
            >
              Absolutely! We understand that emergencies don’t arrive announced,
              so we are ready to get to work as soon as we reasonably can. Fill
              out the form or give us a call to discuss the issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordian}
          onChange={() => {
            setExpanded4(!expanded3);
          }}
        >
          <AccordionSummary
            expandIcon={expanded4 ? <MinimizeIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h5"
              color="initial"
              className={classes.accordianSummary}
            >
              My door stopped working and it’s pretty late at night. Can you
              have someone over now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="p"
              component="p"
              color="initial"
              className={classes.accordianDescription}
            >
              Absolutely! We understand that emergencies don’t arrive announced,
              so we are ready to get to work as soon as we reasonably can. Fill
              out the form or give us a call to discuss the issue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          className={classes.getQouteBtn}
        >
          Get Qoute Now!
        </Button>
      </Box>
    </Container>
  );
};

export default FAQ;
