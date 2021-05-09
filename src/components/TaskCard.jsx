import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const TaskCard = ({ task }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.CardContent}>
        <Box className={classes.remainingDuration}>
          <Typography variant="h6">05:00</Typography>
        </Box>
        <Box className={classes.taskName}>
          <Typography variant="subtitle1">My First Task</Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="outlined" size="small" className={classes.buttons}>
          Delete
        </Button>
        <Button variant="outlined" size="small" className={classes.buttons}>
          Reset
        </Button>
        <Button variant="outlined" size="small" className={classes.buttons}>
          Complete
        </Button>
        <Typography>05:00</Typography>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  CardContent: {
    display: "flex",
    padding: "0",
  },
  cardActions: {
    background: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  remainingDuration: {
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    padding: "0rem 1rem",
  },
  taskName: {
    padding: "1rem 0.5rem",
  },
  buttons: {
    fontSize: "0.7rem",
  },
}));

export default TaskCard;
