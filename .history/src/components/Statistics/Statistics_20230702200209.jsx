import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div className={css.statisticsItem}>
          <span> Good: {good} </span>
          <span> Neutral: {neutral} </span>
          <span> Bad: {bad} </span>
          <span> Total: {total} </span>
          <span> Positive feedback: {positivePercentage}% </span>
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
