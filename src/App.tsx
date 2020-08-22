import React from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import AddTransaction from "./Components/AddTransaction";
import ExpandPanel from "./Components/Expandhistory";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { getNotifications } from "./Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ExpenseTracker(): JSX.Element {
  const classes = useStyles();
  return (
    <GlobalProvider>
      <Header />
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <h2>Do you want to get notisfications from ExpenseTracker</h2>
              <Button onClick={getNotifications}>If Yes? click me</Button>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={8} sm={4}>
            <Paper className={classes.paper}>
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
            </Paper>
          </Grid>
          <Grid item xs={8} sm={4}>
            <Paper className={classes.paper}>
              {" "}
              <ExpandPanel />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTracker;
