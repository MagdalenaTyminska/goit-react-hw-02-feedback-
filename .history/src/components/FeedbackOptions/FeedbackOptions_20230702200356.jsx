import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateOptions = Object.keys(options);
  return (
    <>
      <div>
        {stateOptions.map(option => (
          <button
            className={css.feedbackButton}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            name={option}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
