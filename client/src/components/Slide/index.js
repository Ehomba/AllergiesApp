// I got this from https://codesandbox.io/s/zx6wnnx03m  --Mandie

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 150,
  },
};

class StepSlider extends React.Component {
  state = {
    value: 0,
    severity: "None"
  };

  handleChange = (event, value, severity) => {
    this.setState({ value });

    switch(value) {
      default:
        severity = "None";
        break;
      case 1:
        severity = "Mild";
        break;
      case 2:
        severity = "Moderate to Severe";
        break;
      case 3:
        severity = "Life-Threatening";
    }

    this.setState({ severity });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider value={value} min={0} max={3} step={1} onChange={this.handleChange} />{this.state.severity}
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);