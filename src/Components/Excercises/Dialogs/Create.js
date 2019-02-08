import React, { Fragment, Component } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Fab
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: 500
  },
  select: {
    marginTop: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      excercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        excercise: {
          ...this.state.excercise,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      const { excercise } = this.state;

      this.props.onCreate({
        ...excercise,
        id: excercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        excercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const {
          open,
          excercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <Fragment>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create a new excercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill out the form</DialogContentText>
              <form className={classes.root}>
                <TextField
                  label="Title"
                  name={title}
                  className={classes.formControl}
                  onChange={this.handleChange("title")}
                  margin="normal"
                />
                <br />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="muscles">Muscles</InputLabel>
                  <Select
                    value={muscles}
                    className={classes.selectEmpty}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Description"
                  multiline
                  className={classes.formControl}
                  rowsMax="4"
                  name={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                />
                <br />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
