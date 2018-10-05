// I got this from https://codesandbox.io/s/zx6wnnx03m  --Mandie

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 200,
  },
};

class StepSlider extends React.Component {
  state = {
    word: "None"
  }

  onChange = (event, value) => {
    const data = {
      name: this.props.name,
      value: value
    }
    this.props.handleChange(data);

    let word;
    switch(value) {
      default:
        word = "None";
        break;
      case 1:
        word = "Mild";
        break;
      case 2:
        word = "Moderate to Severe";
        break;
      case 3:
        word = "Life-Threatening";
    }

    this.setState({ word: word })
  }

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider name={this.props.name} value={this.props.state[this.props.name]} min={0} max={3} step={1} onChange={this.onChange} />{this.state.word}
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);