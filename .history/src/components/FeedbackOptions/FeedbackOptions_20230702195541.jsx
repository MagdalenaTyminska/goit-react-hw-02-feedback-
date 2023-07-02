import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const stateOptions = Object.keys(options);
    return (
      <>
        <div>
          {stateOptions.map(option => (
            <button
              className={css.feedbackButton}
              type="button"
              onClick={onLeaveFeedback}
              name={option}
            >
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
