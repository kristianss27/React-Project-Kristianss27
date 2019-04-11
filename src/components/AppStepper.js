import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Step,
  Stepper,
  StepButton,
  Typography,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {},
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return [
    "Do you have a workout?",
    "Pick up some exercises",
    "Set up your workout"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

class AppStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {}
  };

  isStepOptional = step => step === 4;

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={this.handleStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default withStyles(styles)(AppStepper);

/*How to use it? add the following code to where you want to add it
        <Grid item lg={8} xl={8}>
          <WithWidth>
            {({ width }) => {
              if (width === 'xs') {
                return '' //You should invoke the component setting the propertie orientation to vertical
              } else {
                return <AppStepper />
              }
              //return <div>{`Current width: ${width}`}</div>
            }}
          </WithWidth>
        </Grid>

        //Also do not forget to import the component WithWidth
       import WithWidth from "./WithWidth"; 
        
*/
