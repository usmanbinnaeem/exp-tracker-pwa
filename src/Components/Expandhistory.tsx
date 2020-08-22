import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TransactionList from "./TransactionList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#FFFFFF",
  },
  headingBG: {
    backgroundColor: "#012365",
  },
  white: {
    color: "#FFFFFF",
  },
}));

const ExpandPanel = () => {
  const classes = useStyles();

  return (
    <div>
      <Box m={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.white} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.headingBG}
          >
            <Typography className={classes.heading}>
              Transacitons History
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TransactionList />
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default ExpandPanel;
